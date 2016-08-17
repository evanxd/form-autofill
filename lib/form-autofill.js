/* global FormFields, ProfileData */
'use strict';

(function(window) {
  function FormAutofill() {
    this._formFields = new FormFields();
    this._profileData = new ProfileData();
  }

  FormAutofill.prototype = {
    /**
     * Fill the form.
     */
    fill: function() {
      var formFields = this._formFields;
      formFields.interestingType.forEach(function(type) {
        if (formFields[type]) {
          formFields[type].value = this._profileData.get()[type];
        }
      }.bind(this));
    },
    /**
     * Save a new profile after users submit a form.
     */
    saveProfile: function() {
      var profile = {};
      var formFields = this._formFields;
      formFields.interestingType.forEach(function(type) {
        if (formFields[type]) {
          profile[type] = formFields[type].value;
        }
      });
      this._profileData.add(profile);
    }
  };

  window.FormAutofill = FormAutofill;
})(window);
