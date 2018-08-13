const notValidPowerDay = {
  "devices": [
    {
      "id": "F9",
      "name": "Посудомоечная машина",
      "power": 950,
      "duration": 3,
      "mode": "night"
    },
    {
      "id": "C5",
      "name": "Духовка",
      "power": 2000,
      "duration": 2,
      "mode": "day"
    },
    {
      "id": "02",
      "name": "Холодильник",
      "power": 50,
      "duration": 24
    },
    {
      "id": "1E",
      "name": "Термостат",
      "power": 50,
      "duration": 24
    },
    {
      "id": "7D",
      "name": "Кондиционер",
      "power": 850,
      "duration": 1,
      "mode": "day"
    }
  ],
  "rates": [
    {
      "from": 7,
      "to": 10,
      "value": 6.46
    },
    {
      "from": 10,
      "to": 17,
      "value": 5.38
    },
    {
      "from": 17,
      "to": 21,
      "value": 6.46
    },
    {
      "from": 21,
      "to": 23,
      "value": 5.38
    },
    {
      "from": 23,
      "to": 7,
      "value": 1.79
    }
  ],
  "maxPower": 2100
};

const notValidPowerNight = {
  "devices": [
    {
      "id": "F9",
      "name": "Посудомоечная машина",
      "power": 3950,
      "duration": 3,
      "mode": "night"
    },
    {
      "id": "C5",
      "name": "Духовка",
      "power": 2000,
      "duration": 2,
      "mode": "day"
    },
    {
      "id": "02",
      "name": "Холодильник",
      "power": 50,
      "duration": 24
    },
    {
      "id": "1E",
      "name": "Термостат",
      "power": 50,
      "duration": 24
    },
    {
      "id": "7D",
      "name": "Кондиционер",
      "power": 3000,
      "duration": 1,
      "mode": "day"
    }
  ],
  "rates": [
    {
      "from": 7,
      "to": 10,
      "value": 6.46
    },
    {
      "from": 10,
      "to": 17,
      "value": 5.38
    },
    {
      "from": 17,
      "to": 21,
      "value": 6.46
    },
    {
      "from": 21,
      "to": 23,
      "value": 5.38
    },
    {
      "from": 23,
      "to": 7,
      "value": 1.79
    }
  ],
  "maxPower": 2100
};

const notValidDayDuration = {
  "devices": [
    {
      "id": "F9",
      "name": "Посудомоечная машина",
      "power": 950,
      "duration": 3,
      "mode": "night"
    },
    {
      "id": "C5",
      "name": "Духовка",
      "power": 2000,
      "duration": 2,
      "mode": "day"
    },
    {
      "id": "02",
      "name": "Холодильник",
      "power": 50,
      "duration": 24
    },
    {
      "id": "1E",
      "name": "Термостат",
      "power": 50,
      "duration": 24
    },
    {
      "id": "7D",
      "name": "Кондиционер",
      "power": 850,
      "duration": 1
    },
    {
      "id": "5D",
      "name": "Test ",
      "power": 650,
      "duration": 4,
      "mode": "day"
    },
    {
      "id": "3D",
      "name": "Test 2",
      "power": 550,
      "duration": 6,
      "mode": "day"
    },
    {
      "id": "4D",
      "name": "Test 3",
      "power": 2000,
      "duration": 2,
      "mode": "day"
    },
    {
      "id": "6D",
      "name": "Test 4",
      "power": 2000,
      "duration": 3,
      "mode": "day"
    },
    {
      "id": "7D",
      "name": "Test 5",
      "power": 900,
      "duration": 2,
      "mode": "day"
    },
    {
      "id": "8D",
      "name": "Test 6",
      "power": 1900,
      "duration": 13,
      "mode": "day"
    },
    {
      "id": "9D",
      "name": "Test 6",
      "power": 300,
      "duration": 13,
      "mode": "day"
    }
  ],
  "rates": [
    {
      "from": 7,
      "to": 10,
      "value": 6.46
    },
    {
      "from": 10,
      "to": 17,
      "value": 5.38
    },
    {
      "from": 17,
      "to": 21,
      "value": 6.46
    },
    {
      "from": 21,
      "to": 23,
      "value": 5.38
    },
    {
      "from": 23,
      "to": 7,
      "value": 1.79
    }
  ],
  "maxPower": 2100
};

const extremDayDuration = {
  "devices": [
    {
      "id": "F9",
      "name": "Посудомоечная машина",
      "power": 950,
      "duration": 3,
      "mode": "night"
    },
    {
      "id": "C5",
      "name": "Духовка",
      "power": 2000,
      "duration": 2,
      "mode": "day"
    },
    {
      "id": "02",
      "name": "Холодильник",
      "power": 50,
      "duration": 24
    },
    {
      "id": "1E",
      "name": "Термостат",
      "power": 50,
      "duration": 24
    },
    {
      "id": "7D",
      "name": "Кондиционер",
      "power": 850,
      "duration": 1
    },
    {
      "id": "5D",
      "name": "Test ",
      "power": 750,
      "duration": 3,
      "mode": "day"
    },
    {
      "id": "3D",
      "name": "Test 2",
      "power": 550,
      "duration": 4,
      "mode": "day"
    },
    {
      "id": "4D",
      "name": "Test 3",
      "power": 2000,
      "duration": 2,
      "mode": "day"
    },
    {
      "id": "6D",
      "name": "Test 4",
      "power": 2000,
      "duration": 5,
      "mode": "day"
    },
    {
      "id": "8D",
      "name": "Test 5",
      "power": 900,
      "duration": 1,
      "mode": "day"
    }
  ],
  "rates": [
    {
      "from": 7,
      "to": 10,
      "value": 6.46
    },
    {
      "from": 10,
      "to": 17,
      "value": 5.38
    },
    {
      "from": 17,
      "to": 21,
      "value": 6.46
    },
    {
      "from": 21,
      "to": 23,
      "value": 5.38
    },
    {
      "from": 23,
      "to": 7,
      "value": 1.79
    }
  ],
  "maxPower": 2100
};
module.exports = {
  notValidPowerDay,
  notValidPowerNight,
  notValidDayDuration,
  extremDayDuration
};
