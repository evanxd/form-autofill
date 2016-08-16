'use strict';

(function(window, document) {
  function FormField() {
    this._elements = [];
    this.interestingType.forEach(function(type) {
      this['_' + field] = this.getElement(field);
      this['_' + field] && this._elements.push(this['_' + field]);
    }.bind(this));
  }

  FormField.prototype = {
    interestingType: [
      'firstName', 'lastName', 'phone', 'email',
      'address', 'city', 'country','postalCode'
    ],
    _elements: null,
    _firstName: null,
    _lastName: null,
    _phone: null,
    _email: null,
    _address: null,
    _city: null,
    _country: null,
    _postalCode: null,
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

  window.FormField = FormField;
})(window, document);
