'use strict'

console.log('Welcome');

// seattle ----------------------------------------------------------------------------------------------------------------------------
let seattleList = document.getElementById('seattleList');
console.log(seattleList);

let hours = ['6 a.m', '7 a.m', '8 a.m', '9 a.m', '10 a.m', '11 a.m', '12 p.m', '1 p.m', '2 p.m', '3 p.m', '4 p.m', '5 p.m', '6 p.m', '7 p.m'];

let seattle = {
  name: 'Seattle',
  min: 23,
  max: 65,
  avg: 6.3,
  dailyTotal: 0, 
  cookiesSoldEachHourArray: [],
  getRandomCustomers: function() {
    return Math.floor(Math.random() * (this.max - this.min + 1) + this.min); 
  }
}

console.log(seattle.getRandomCustomers());

// tokyo -----------------------------------------------------------------------------------------------------------------------------------

let tokyoList = document.getElementById('tokyoList');

console.log(tokyoList);


let tokyo = {
  name: 'Tokyo',
  min: 3,
  max: 24,
  avg: 1.2,
  dailyTotal: 0, 
  cookiesSoldEachHourArray: [],
  getRandomCustomers: function() {
    return Math.floor(Math.random() * (this.max - this.min + 1) + this.min); 
  }
}

console.log(tokyo.getRandomCustomers());

// dubai -----------------------------------------------------------------------------------------------------------------------------------

let dubaiList = document.getElementById('dubaiList');

console.log(dubaiList);


let dubai = {
  name: 'Dubai',
  min: 11,
  max: 38,
  avg: 3.7,
  dailyTotal: 0, 
  cookiesSoldEachHourArray: [],
  getRandomCustomers: function() {
    return Math.floor(Math.random() * (this.max - this.min + 1) + this.min); 
  }
}

console.log(dubai.getRandomCustomers());

// paris -----------------------------------------------------------------------------------------------------------------------------------

let parisList = document.getElementById('parisList');

console.log(parisList);


let paris = {
  name: 'Paris',
  min: 20,
  max: 38,
  avg: 2.3,
  dailyTotal: 0, 
  cookiesSoldEachHourArray: [],
  getRandomCustomers: function() {
    return Math.floor(Math.random() * (this.max - this.min + 1) + this.min); 
  }
}

console.log(paris.getRandomCustomers());

// lima ------------------------------------------------------------------------------------------------------------------------------------

let limaList = document.getElementById('limaList');

console.log(limaList);


let lima= {
  name: 'Lima',
  min: 2,
  max: 16,
  avg: 4.6,
  dailyTotal: 0, 
  cookiesSoldEachHourArray: [],
  getRandomCustomers: function() {
    return Math.floor(Math.random() * (this.max - this.min + 1) + this.min); 
  }
}

console.log(lima.getRandomCustomers());
