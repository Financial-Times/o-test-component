'use strict';

module.exports = class Test {
  constructor(initialValue) {
    this.value = initialValue;
  }

  add(x) {
    this.value = this.value + x;
  }
}
