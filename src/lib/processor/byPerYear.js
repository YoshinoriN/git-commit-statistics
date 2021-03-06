'use strict';

const sortBy = require('lodash.sortby');
const aggregate = require('../aggregate');
const BaseProcessor = require('./baseProcessor');
const command = require('../command');

class ByPerYear extends BaseProcessor {
  constructor(path, options) {
    super(path, command.type.byPerYear, options);
  }

  createResult() {
    return this.sort(aggregate.groupBy(this.createObjects(), 'year'));
  }

  sort(list) {
    return sortBy(list, 'year');
  }

  parseGitLog(line) {
    const arr = line.match(/\S+/g);
    return {
      year: parseInt(arr[4])
    };
  }
}

module.exports = ByPerYear;
