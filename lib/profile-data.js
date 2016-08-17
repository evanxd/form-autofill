'use strict';

(function(window) {

  function ProfileData() {
    this._data = [];
    // Hardcode the fake data.
    this._data.push({
      firstName: 'Evan',
      lastName: 'Tseng',
      phone: '0933123456',
      email: 'evan@tseng.io',
      address: 'Evan\'s Address',
      city: 'Evan\'s City',
      country: 'Evan\'s Country',
      postalCode: '12345'
    });
  }

  ProfileData.prototype = {
    _data: null

    add: function(profile) {
      this._data.push(profile);
    },

    /**
     * Get profile data.
     * @param {String} selector The selector to get specific profile data.
     */
    get: function(selector) {
      return data[0];
    }
  };

  window.ProfileData = ProfileData;
})(window);
