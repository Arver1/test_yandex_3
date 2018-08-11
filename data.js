const data = {
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

module.exports = data;
