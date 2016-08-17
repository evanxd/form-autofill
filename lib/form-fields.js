'use strict';

(function(window, document) {
  function FormFields() {
    this._elements = new Map();
    this._interestingType.forEach(function(type) {
      this[field] = this.getElement(field);
      this[field] && this._elements.set(type, this[field]);
    }.bind(this));
  }

  FormFields.prototype = {
    firstName: null,
    lastName: null,
    phone: null,
    email: null,
    address: null,
    city: null,
    country: null,
    postalCode: null,

    _interestingType: [
      'firstName', 'lastName', 'phone', 'email',
      'address', 'city', 'country','postalCode'
    ],
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
     * @return {Map} The DOM elements.
     */
    getElements: function() {
      return this._elements;
    }
  };

  window.FormFields = FormFields;
})(window, document);
