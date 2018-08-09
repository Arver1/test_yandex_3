const data = require('./data');

function allocateByPower(devices, arr, hour, power) {
  debugger;
  const id = hour.device.shift();
  if(arr[hour - devices.id - 1] >=0 ) {
    arr[hour - devices.id - 1].devices.push(id);
  }
}

function allocateByTime(devices = [], maxPower = 2100, duration = 24) {

  const durationOfTime = [...(new Array(duration))].map(it => {
    it = {};
    it['power'] = 0;
    it['devices'] = [];
    return it;
  });

  devices.sort((a, b) => {
    return b.power - a.power;
  });

  // ideal arrangement of devices without regard to power
  devices.forEach(device => {
    durationOfTime.reduceRight((prev, item)=>{
      if(!prev) {
        return;
      }
      item.devices.push(device.id);
      item.power+=device.power;
      return --prev;
    },device.duration)
  });

  //

  durationOfTime.forEach(hour => {
    while (hour.power > maxPower) {
      allocateByPower(devices, durationOfTime, hour, maxPower);
    }
  });


}

allocateByTime(data.devices, data.maxPower);