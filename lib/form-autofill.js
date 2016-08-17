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
      that._formFields.getElements().forEach(function(element, type) {
        element.addEventListener('input', function() {
          element.value === that._profileData.get()[type] && that._fill();
        });
      });
    },

    /**
     * Fill the form.
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
