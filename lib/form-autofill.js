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
      this._formFields.getElements().forEach(function(element, type) {
        console.log('element: ' + element);
        element.value = this._profileData.get()[type];
      }.bind(this));
    },

    /**
     * Save a new profile after users submit a form.
     */
    saveProfile: function() {
      var profile = {};
      this._formFields.getElements().forEach(function(element, type) {
        profile[type] = element.value;
      });
      this._profileData.add(profile);
    }
  };

  window.FormAutofill = FormAutofill;
})(window);
