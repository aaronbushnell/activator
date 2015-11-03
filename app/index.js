const $ = require('jquery');
const EventEmitter = require('events');

class Activator {

  constructor (el) {
    this.active = false;
    this.el = el;
    this.$el = $(el);

    this.EventEmitter = new EventEmitter();
  }

  setActive () {
    this.active = true;
    this.EventEmitter.emit('active');
  }

  setInactive () {
    this.active = false;
    this.EventEmitter.emit('inactive');
  }

}

module.exports = Activator;
