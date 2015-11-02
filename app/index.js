let $ = require('jquery');
let EventEmitter = require('events');

class Activator extends EventEmitter {

  constructor (el) {
    super(el);

    this.active = false;
    this.el = el;
    this.$el = $(el);
  }

  setActive () {
    this.active = true;
    this.emit('active');
  }

  setInactive () {
    this.active = false;
    this.emit('inactive');
  }

}

module.exports = Activator;
