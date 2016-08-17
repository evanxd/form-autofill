'use strict';

(function(window, document) {
  function FormFields() {
    this._elements = [];
    this.interestingType.forEach(function(type) {
      this[field] = this.getElement(field);
      this[field] && this._elements.push(this[field]);
    }.bind(this));
  }

  FormFields.prototype = {
    interestingType: [
      'firstName', 'lastName', 'phone', 'email',
      'address', 'city', 'country','postalCode'
    ],
    firstName: null,
    lastName: null,
    phone: null,
    email: null,
    address: null,
    city: null,
    country: null,
    postalCode: null,

    _elements: null,
    _rules: {
      firstName: ['input[name="firstname"]', 'input[placeholder="First name"]'],
      lastName: ['input[name="lastname"]', 'input[placeholder="Last name"]'],
      email: ['input[type="email"]', 'input[placeholder="Email"]','input[name="email"]']
    },

    /**
     * Get interesting field element.
     * @param {String} type The field type, e.g. name, address
     * @return {Object} The DOM element.
     */    
    getElement: function(type) {
      var element;
      this._rules[type].forEach(function(rule) {
        element = document.querySelector(rule);
        if (element) {
          return false;
        }
      });
      return element;
    },
    /**
     * Get all interesting field elements.
     * @return {Array} The DOM elements.
     */
    getElements: function() {
      return this._elements;
    }
  };

  window.FormFields = FormFields;
})(window, document);
