const assert = require('assert');
const { allocateDevices, allocateByTime } = require('./index');
const { notValidPowerDay, notValidPowerNight, notValidDayDuration, extremDayDuration } = require('./test/index');

describe('function allocateDevices',() => {
  it('without params', () => {
    assert.doesNotThrow(() => {
      allocateDevices();
    });
  });
  it('if test === null', () => {
    assert.doesNotThrow(() => {
      allocateDevices(null);
    });
  });
  it('if test is empty object', () => {
    assert.doesNotThrow(() => {
      allocateDevices({});
    });
  });
  it('if test is array', () => {
    assert.doesNotThrow(() => {
      allocateDevices([]);
    });
  });
  it('test without field devices', () => {
    assert.doesNotThrow(() => {
      allocateDevices({rates: '', maxPower: 0})
    });
  });
  it('test without field rates', () => {
    assert.doesNotThrow(() => {
      allocateDevices({devices: '', maxPower: 0})
    });
  });
  it('test without field maxPower', () => {
    assert.doesNotThrow(() => {
      allocateDevices({devices: '', rates: ''})
    });
  });
  it('test field rates string', () => {
    assert.doesNotThrow(() => {
      allocateDevices({devices: {}, maxPower: 100, rates: ''})
    });
  });
  it('test field rates empty object', () => {
    assert.doesNotThrow(() => {
      allocateDevices({devices: undefined, maxPower: 100, rates: {}})
    });
  });
  it('test field rates is empty array', () => {
    assert.doesNotThrow(() => {
      allocateDevices({devices: undefined, maxPower: 100, rates: []})
    });
  });
  it('test field rates is not valid', () => {
    assert.doesNotThrow(() => {
      allocateDevices({devices: undefined, maxPower: 100, rates: [1,2,3]})
    });
  });
  it('test field rates is not valid', () => {
    assert.doesNotThrow(() => {
      allocateDevices({devices: undefined, maxPower: 100, rates: [1,{"from": 23, "to": 7, "value": 1.79}]})
    });
  });
  it('test field devices empty object', () => {
    assert.doesNotThrow(() => {
      allocateDevices({devices: {}, maxPower: 100, rates: [{"from": 23, "to": 7, "value": 1.79}]})
    });
  });
  it('test field devices is empty array', () => {
    assert.doesNotThrow(() => {
      allocateDevices({devices: [], maxPower: 100, rates: [{"from": 23, "to": 7, "value": 1.79}]})
    });
  });
  it('test field devices is not valid', () => {
    assert.doesNotThrow(() => {
      allocateDevices({devices: [{},2,3], maxPower: 100, rates: [{"from": 23, "to": 7, "value": 1.79}]})
    });
  });
  it('test field devices is not valid', () => {
    assert.doesNotThrow(() => {
      allocateDevices({devices: [{id: 'test', name: 'test', power: '200', duration: 4}], maxPower: 0, rates: [{"from": 23, "to": 7, "value": 1.79}]})
    });
  });
  it('test notValidPowerDay', () => {
    assert.doesNotThrow(() => {
      allocateDevices(notValidPowerDay)
    });
  });
  it('test notValidPowerNight', () => {
    assert.doesNotThrow(() => {
      allocateDevices(notValidPowerNight)
    });
  });
  it('test notValidDurationDay', () => {
    assert.doesNotThrow(() => {
      allocateDevices(notValidDayDuration)
    });
  });
});

describe('function allocateByTime', () => {
  it('test extremDurationDay', () => {
    assert.doesNotThrow(() => {
      allocateByTime(extremDayDuration.devices, extremDayDuration.maxPower)
    });
  })
});

