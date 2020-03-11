const chainMaker = {
  result: [],

  getLength() {
    return this.result.length;
  },

  addLink(value) {
    if (typeof value == 'undefined') {
    this.result.push('~( )~');
    return this;
    }
    if (typeof value == 'function') {
      value = 'function() {}';
    }
    this.result.push('~' + '(' + ' ' + value + ' ' + ')' + '~');
    return this;
  },

  removeLink(position) {
    if (position <= 0 || typeof position !== 'number' || position > this.result.length || !Number.isInteger(position)) {
      this.result = [];
      throw new Error();
    }
    this.result.splice(position - 1, 1);
    return this;
  },

  reverseChain() {
    this.result = this.result.reverse();
    return this;
  },

  finishChain() {
    let result = this.result.join('').slice(1,-1)
    this.result = [];
    return result;
  }
};
module.exports = chainMaker;
