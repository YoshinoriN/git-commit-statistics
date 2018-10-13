'use strict';

const _ = require('lodash');
const aggregate = require('../aggregate');
const BaseProcessor = require('./baseProcessor');
const command = require('../command');
const monthTypes = require('../types/monthsTypes');
const util = require('../utils');

class ByPerMonth extends BaseProcessor {
  constructor(path, commandType, options) {
    super(path, command.type.byPerMonth, options);
  }

  createResult() {
    return this.sort(aggregate.groupBy(this.createObjects(), 'month'));
  }

  sort(list) {
    const mappedList = util.typeMapper(list, 'month', monthTypes.months);
    return _.sortBy(mappedList, 'id');
  }

  parseGitLog(line) {
    const arr = line.match(/\S+/g);
    return {
      month: arr[1]
    };
  }
}

module.exports = ByPerMonth;
