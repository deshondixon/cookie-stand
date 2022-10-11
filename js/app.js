'use strict'


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
  },
  calcHourlySales: function () {
    for (let i = 0; i < hours.length; i++) {
      let randNum = this.getRandomCustomers();
      let cookiesSoldThisHour = Math.ceil(this.avg * randNum);
      this.cookiesSoldEachHourArray.push(cookiesSoldThisHour)
      this.dailyTotal += cookiesSoldThisHour;
    }
  },
  renderList: function() {
  this.calcHourlySales();
  for (let i = 0; i < hours.length; i++) {
  let listItemsea = document.createElement('li');
  listItemsea.textContent = `${hours[i]}: ${this.cookiesSoldEachHourArray[i]} cookies`;
  seattleList.appendChild(listItemsea);
  }
  let totalLi = document.createElement('li');
  totalLi.textContent = `Total: ${this.dailyTotal}`;
  seattleList.appendChild(totalLi);
 }
}
seattle.renderList();

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
  },
  calcHourlySales: function () {
    for (let i = 0; i < hours.length; i++) {
      let randNum = this.getRandomCustomers();
      let cookiesSoldThisHour = Math.ceil(this.avg * randNum);
      this.cookiesSoldEachHourArray.push(cookiesSoldThisHour)
      this.dailyTotal += cookiesSoldThisHour;
    }
  },
  renderList: function() {
  this.calcHourlySales();
  for (let i = 0; i < hours.length; i++) {
  let listItemsea = document.createElement('li');
  listItemsea.textContent = `${hours[i]}: ${this.cookiesSoldEachHourArray[i]} cookies`;
  tokyoList.appendChild(listItemsea);
  }
  let totalLi = document.createElement('li');
  totalLi.textContent = `Total: ${this.dailyTotal}`;
  tokyoList.appendChild(totalLi);
  }
}
  tokyo.renderList();

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
  },
  calcHourlySales: function () {
    for (let i = 0; i < hours.length; i++) {
      let randNum = this.getRandomCustomers();
      let cookiesSoldThisHour = Math.ceil(this.avg * randNum);
      this.cookiesSoldEachHourArray.push(cookiesSoldThisHour)
      this.dailyTotal += cookiesSoldThisHour;
    }
  },
  renderList: function() {
  this.calcHourlySales();
  for (let i = 0; i < hours.length; i++) {
  let listItemsea = document.createElement('li');
  listItemsea.textContent = `${hours[i]}: ${this.cookiesSoldEachHourArray[i]} cookies`;
  dubaiList.appendChild(listItemsea);
  }
  let totalLi = document.createElement('li');
  totalLi.textContent = `Total: ${this.dailyTotal}`;
  dubaiList.appendChild(totalLi);
 }
}
dubai.renderList();

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
  },
  calcHourlySales: function () {
    for (let i = 0; i < hours.length; i++) {
      let randNum = this.getRandomCustomers();
      let cookiesSoldThisHour = Math.ceil(this.avg * randNum);
      this.cookiesSoldEachHourArray.push(cookiesSoldThisHour)
      this.dailyTotal += cookiesSoldThisHour;
    }
  },
  renderList: function() {
  this.calcHourlySales();
  for (let i = 0; i < hours.length; i++) {
  let listItemsea = document.createElement('li');
  listItemsea.textContent = `${hours[i]}: ${this.cookiesSoldEachHourArray[i]} cookies`;
  parisList.appendChild(listItemsea);
  }
  let totalLi = document.createElement('li');
  totalLi.textContent = `Total: ${this.dailyTotal}`;
  parisList.appendChild(totalLi);
 }
}
paris.renderList();

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
  },
  calcHourlySales: function () {
    for (let i = 0; i < hours.length; i++) {
      let randNum = this.getRandomCustomers();
      let cookiesSoldThisHour = Math.ceil(this.avg * randNum);
      this.cookiesSoldEachHourArray.push(cookiesSoldThisHour)
      this.dailyTotal += cookiesSoldThisHour;
    }
  },
  renderList: function() {
  this.calcHourlySales();
  for (let i = 0; i < hours.length; i++) {
  let listItemsea = document.createElement('li');
  listItemsea.textContent = `${hours[i]}: ${this.cookiesSoldEachHourArray[i]} cookies`;
  limaList.appendChild(listItemsea);
  }
  let totalLi = document.createElement('li');
  totalLi.textContent = `Total: ${this.dailyTotal}`;
  limaList.appendChild(totalLi);
 }
}
lima.renderList();
