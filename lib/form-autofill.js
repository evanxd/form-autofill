/* global FormFields, ProfileData */
'use strict';

(function(window) {
  function FormAutofill() {
    this._formFields = new FormFields();
    this._profileData = new ProfileData();
  }

  FormAutofill.prototype = {
    /**
     * Start the form autofill feature.
     */
    start: function() {
      var that = this;
      var elements = that._formFields.getElements();

      // Do autofill when a user inputs a field matches profile data.
      elements.forEach(function(element, type) {
        element.addEventListener('input', function() {
          element.value === that._profileData.get()[type] && that._fill();
        });
      });

      // TODO: Make the below code work.
      // Add a new profile after a user submit a form.
      window.addEventListener('submit', function() {
        elements.size >= 3 && that._saveProfile();
      });
    },

    /**
     * Fill the form with profile data.
     */
    _fill: function() {
      this._formFields.getElements().forEach(function(element, type) {
        element.value = this._profileData.get()[type];
      }.bind(this));
    },

    /**
     * Save a new profile after users submit a form.
     */
    _saveProfile: function() {
      var profile = {};
      this._formFields.getElements().forEach(function(element, type) {
        profile[type] = element.value;
      });
      this._profileData.add(profile);
    }
  };

  window.FormAutofill = FormAutofill;
})(window);
