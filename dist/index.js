'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var $ = require('jquery');
var EventEmitter = require('events');

var Activator = (function () {
  function Activator(el) {
    _classCallCheck(this, Activator);

    this.active = false;
    this.el = el;
    this.$el = $(el);

    this.EventEmitter = new EventEmitter();
  }

  _createClass(Activator, [{
    key: 'setActive',
    value: function setActive() {
      this.active = true;
      this.EventEmitter.emit('active');
    }
  }, {
    key: 'setInactive',
    value: function setInactive() {
      this.active = false;
      this.EventEmitter.emit('inactive');
    }
  }]);

  return Activator;
})();

module.exports = Activator;