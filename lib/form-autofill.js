/* global FormFields, ProfileData */
'use strict';

(function(window) {
  function FormAutofill() {
    this._formFields = new FormFields();
    this._profileData = new ProfileData();
  }

  FormAutofill.prototype = {
    start: function() {
      var firstNameField = this._formFields.getElement('firstName');
      var firstName = this._profileData.get().firstName;
      firstNameField && firstNameField.addEventListener('change', function() {
        firstNameField.value === firstName && this._fill();
      }.bind(this));
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
