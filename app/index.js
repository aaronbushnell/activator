const $ = require('jquery');
const EventEmitter = require('events');

class Activator {

  constructor (el) {
    this.active = false;
    this.el = el;
    this.$el = $(el);

    this.events = new EventEmitter();
  }

  setActive () {
    this.active = true;
    this.events.emit('active');
  }

  setInactive () {
    this.active = false;
    this.events.emit('inactive');
  }

}

module.exports = Activator;
