const factory = require('../../src/lib/processor/processorFactory');
const statisticsTypes = require('../../src/lib/types/statisticsTypes');
const ByPerDayOfMonth = require('../../src/lib/processor/byPerDayOfMonth');
const ByPerMonth = require('../../src/lib/processor/byPerMonth');
const ByPerWeekDay = require('../../src/lib/processor/byPerWeekDay');
const ByPerYear = require('../../src/lib/processor/byPerYear');
const ByPerDayHour = require('../../src/lib/processor/byPerDayHour');
const ByPerDayHourOfWeekDay = require('../../src/lib/processor/byPerDayHourOfWeekDay');

test('Repositry required Exception', () => {
  expect(ex = () => {
    factory.createInstance(999);
  }).toThrowError('Unknown statistics type.');
});

test('Create instance of ByPerDayOfMonth', () => {
  expect(factory.createInstance('test', statisticsTypes.BY_PER_DAY_OF_MONTH)).toBeInstanceOf(ByPerDayOfMonth);
});

test('Create instance of ByPerMonth', () => {
  expect(factory.createInstance('test', statisticsTypes.BY_PER_MONTH)).toBeInstanceOf(ByPerMonth);
});

test('Create instance of ByPerWeekDay', () => {
  expect(factory.createInstance('test', statisticsTypes.BY_PER_WEEK_DAY)).toBeInstanceOf(ByPerWeekDay);
});

test('Create instance of ByPerYear', () => {
  expect(factory.createInstance('test', statisticsTypes.BY_PER_YEAR)).toBeInstanceOf(ByPerYear);
});

test('Create instance of ByPerDayHour', () => {
  expect(factory.createInstance('test', statisticsTypes.BY_PER_DAY_HOUR)).toBeInstanceOf(ByPerDayHour);
});

test('Create instance of ByPerDayHourOfWeekDay', () => {
  expect(factory.createInstance('test', statisticsTypes.BY_PER_DAY_HOUR_OF_WEEK_DAY)).toBeInstanceOf(ByPerDayHourOfWeekDay);
});

