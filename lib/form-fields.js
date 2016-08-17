'use strict';

(function(window, document) {
  function FormFields() {
    this._elements = new Map();
    this._interestingType.forEach(function(type) {
      this['_' + type] = this.getElement(type);
      this['_' + type] && this._elements.set(type, this['_' + type]);
    }.bind(this));
  }

  FormFields.prototype = {
    _interestingType: [
      'firstName', 'lastName', 'phone', 'email',
      'address', 'city', 'country','postalCode'
    ],
    _firstName: null,
    _lastName: null,
    _phone: null,
    _email: null,
    _address: null,
    _city: null,
    _country: null,
    _postalCode: null,
    _elements: null,
    _rules: {
      firstName: ['input[name="firstname"]', 'input[placeholder="First name"]'],
      lastName: ['input[name="lastname"]', 'input[placeholder="Last name"]'],
      phone: ['input[placeholder="Phone"]'],
      email: ['input[type="email"]', 'input[placeholder="Email"]','input[name="email"]'],
      address: ['input[placeholder="Address"]'],
      city: ['input[placeholder="City"]'],
      postalCode: ['input[placeholder="Postal code"]']
    },

    /**
     * Get interesting field element.
     * @param {String} type The field type, e.g. name, address
     * @return {Object} The DOM element.
     */    
    getElement: function(type) {
      var element;
      this._rules[type] && this._rules[type].forEach(function(rule) {
        element = element || document.querySelector(rule);
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
