/* global FormField, ProfileData */
'use strict';

(function(window) {
  function FormAutofill() {
    this._formField = new FormField();
    this._profileData = new ProfileData();
  }

  FormAutofill.prototype = {
    /**
     * Fill the form.
     */
    fill: function() {
      var formField = this._formField;
      formField.interestingType.forEach(function(type) {
        if (formField[type]) {
          formField[type].value = this._profileData.get()[type];
        }
      }.bind(this));
    }
  };

  window.FormAutofill = FormAutofill;
})(window);
