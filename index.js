const data = require('./data');

allocateDevices(data);

function allocateDevices(data) {
  if(checkValidateData(data) && checkValidateFieldData(data)) {
    try {
      const schedule = allocateByTime(data.devices, data.maxPower);
      const rates = allocateRates(data.rates);

      console.log(schedule);

      const totalEnergy = schedule.reduce((prev, {power}, index) => {
        return prev + power * rates[index] / 1000;
      }, 0);

      console.log(totalEnergy);
    } catch(e) {
      console.log(e.mesage);
    }
  }
}

function allocateRates(rates) {
  let arr = [...new Array(24)].fill(0);
  rates.forEach((it) => {
    if(it.from === it.to) {
      for(let i = 0; i < 24; i++) {
        arr[i] = it.value
      }
    } else {
      for(let i = it.from; i !== it.to; i++) {
        if(i === 24) {
          i = 0;
        }
        arr[i] = it.value;
      }
    }
  });
  const shift = arr.splice(0,7);
  arr.push(...shift);
  return arr;
}

function checkValidateData(data) {
  if(data === null || data === undefined) {
    console.log('Данные об устройствах не переданы');
    return false;
  }
  if(typeof data !== 'object') {
    try {
      const data = JSON.parse(data);
      console.log('Данные пришли в JSON формате');
      allocateDevices(data);
    } catch (e) {
      console.log('Неизвестный формат данных')
    }
    return false;
  }
  if(!('devices' in data)) {
    console.log('Поле devices отсутствует');
    return false;
  }
  if(!('rates' in data)) {
    console.log('Поле rates отсутствует');
    return false;
  }
  if(!('maxPower' in data)) {
    console.log('Поле maxPower отсутствует');
    return false;
  }
  return true;
}

function checkValidateFieldData(data) {
  return checkFieldMaxPower(data.maxPower) && checkFieldRates(data.rates) && checkFieldDevices(data.devices);
}

function checkFieldMaxPower(maxPower) {
  if(isNumber(maxPower)) {
    if(maxPower === 0 || maxPower <= 0) {
      console.log('Поле maxPower не может быть < или = 0');
      return false;
    }
    return true;
  } else {
    console.log('Поле maxPower не число');
    return false;
  }
}

function isNumber(number) {
  return !isNaN(parseFloat(number)) && isFinite(number);
}

function checkFieldRates(rates) {
  if(Array.isArray(rates)) {
    if(rates.length === 0) {
      console.log('массив rates пустой');
      return false;
    }
    return rates.every((it, index )=> {
      if(typeof it === 'object') {
        if(it.from && it.to && it.value) {
          if(!isNumber(it.from)) {
            console.log(`Значение поля from элемента ${index} массива rates не число`);
            return false;
          }
          if(!isNumber(it.to)) {
            console.log(`Значение поля to элемента ${index} массива rates не число`);
            return false;
          }
          if(!isNumber(it.value)) {
            console.log(`Значение поля to элемента ${index} массива rates не число`);
            return false;
          }
          if(it.from < 0 || it.from > 23) {
            console.log(`Значение поля from элемента ${index} массива rates не может быть меньше 0 или больше 23 `);
            return false;
          }
          if(it.to < 0 || it.to > 23) {
            console.log(`Значение поля to элемента ${index} массива rates не может быть меньше 0 или больше 23 `);
            return false;
          }
        } else {
          console.log(`Каждый элемент rates должен иметь поле from, to, value : ${index}`);
          return false;
        }
        return true;
      } else {
        console.log(`Каждый элемент rates должен быть объектом : ${index}`);
        return false;
      }
    });
  } else {
    console.log('Поле rates не массив');
    return false;
  }
}

function checkFieldDevices(devices) {
  if(Array.isArray(devices)) {
    if(devices.length === 0) {
      console.log('массив devices пустой');
      return false;
    }
    return devices.every((it, index )=> {
      if(typeof it === 'object') {
        if(it.id && it.name && it.power && it.duration) {
          if(typeof it.id !== 'string') {
            console.log(`Значение поля id элемента ${index} массива devices не строка`);
            return false;
          }
          if(typeof it.name !== 'string') {
            console.log(`Значение поля name элемента ${index} массива devices не строка`);
            return false;
          }
          if(!isNumber(it.power)) {
            console.log(`Значение поля power элемента ${index} массива devices не число`);
            return false;
          }
          if(!isNumber(it.duration)) {
            console.log(`Значение поля duration элемента ${index} массива devices не число`);
            return false;
          }
        } else {
          console.log(`Каждый элемент devices должен иметь поле id, name, power, duration : ${index}`);
          return false;
        }
        return true;
      } else {
        console.log(`Каждый элемент devices должен быть объектом : ${index}`);
        return false;
      }
    });
  } else {
    console.log('Поле devices не массив');
    return false;
  }
}

function allocateByPower(devices, arr, hour, index) {
  const id = hour.devices.shift();
  const device = devices.find(el => el.id === id);
  const shiftIndex = index - device.duration;
  if(shiftIndex >= 0 ) {
    const powerDevice = device.power;
    hour.power -= powerDevice;
    let i =0;
    while(powerDevice < arr[shiftIndex].devices[i+1]){
      i++;
    }
    arr[shiftIndex].devices.splice(i,0,id);
    arr[shiftIndex].power+=powerDevice;
  } else {
    hour.devices.push(id);
  }
}

function allocateDevicesMode(dayDevices, devices, maxPower, durationOfTime, mode = 'allDay') {
  dayDevices.sort((a, b) => {
    return a.power - b.power;
  });

  dayDevices.forEach(device => {
    let duration = device.duration;
    for (let i = durationOfTime.length - 1; duration > 0; duration--, i--) {
      if (i < 0) throw {
        name: 'ошибка распределения',
        message: `продолжительность работы прибора ${device.name} больше, чем диапозон mode: ${mode}`
      };
      durationOfTime[i].devices.push(device.id);
      durationOfTime[i].power += device.power;
    }
  });

  for (let i = durationOfTime.length - 1; i >= 0; i--) {
    let amount = durationOfTime[i].devices.length;

    while (durationOfTime[i].power > maxPower[i]) {
      if (amount >= 0) {
        allocateByPower(devices, durationOfTime, durationOfTime[i], i);
        amount--;
      } else {
        throw {name: 'ошибка распределения', message: `невозможно распределить mode: ${mode}`};
      }
    }
  }
}

function getArrayDuration(duration) {
  return [...(new Array(duration))].map(it => {
    it = {};
    it['power'] = 0;
    it['devices'] = [];
    return it;
  });
}

function allocateByTime(devices = [], maxPower = 2100) {

  const durationOfMorn = getArrayDuration(14);
  const durationOfNight = getArrayDuration(10);
  const durationOfDay = getArrayDuration(24);
  const otherDevices = [];
  const hourPower = [...new Array(24)].fill(maxPower);
  {
    const nightDevices = [];
    const mornDevices = [];
    devices.forEach(it => {
      switch (it.mode) {
        case 'day':
          mornDevices.push(it);
          break;
        case 'night':
          nightDevices.push(it);
          break;
        default:
          otherDevices.push(it);
      }
    });

    allocateDevicesMode(mornDevices, devices, hourPower, durationOfMorn, 'day');
    allocateDevicesMode(nightDevices, devices, hourPower, durationOfNight, 'night');

    durationOfMorn.forEach(({power}, index) => {
      if (power) {
        hourPower[index] -= power;
      }
    });

    durationOfNight.forEach(({power}, index) => {
      if (power) {
        hourPower[index + 14] -= power;
      }
    });
  }

  allocateDevicesMode(otherDevices, devices, hourPower, durationOfDay);

  durationOfMorn.forEach((hour, index) => {
    if (hour.devices.length) {
      durationOfDay[index].devices.push(...hour.devices);
      durationOfDay[index].power +=  hour.power;
    }
  });

  durationOfNight.forEach((hour, index) => {
    if (hour.devices.length) {
      durationOfDay[index + 14].devices.push(...hour.devices);
      durationOfDay[index + 14].power +=  hour.power;
    }
  });

  return durationOfDay;
}

module.exports = {
  allocateDevices
};
