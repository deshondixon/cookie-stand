'use strict'

let allocations = [];

let hours = ['6 a.m', '7 a.m', '8 a.m', '9 a.m', '10 a.m', '11 a.m', '12 p.m', '1 p.m', '2 p.m', '3 p.m', '4 p.m', '5 p.m', '6 p.m', '7 p.m'];

const cookieContainer = document.getElementById("locationNames");

console.log(cookieContainer);

const cookieTable = document.querySelector('table');
console.log(cookieTable);
const cookieBody = document.querySelector('table tbody');
const cookieFoot = document.getElementById('tableFoot');
//const cookieHead = document.getElementById('tableHead');

function Cookie(name,min,max, avg) {
  this.name = name;
  this.min = max;
  this.avg = avg;
  this.dailyTotal = 0;
  allocations.push(this);
  this.cookiesSoldPerHourArray = [];
  this.getRandomCustomers = function () {
    let cookieMath = Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
    console.log(cookieMath);
    return cookieMath;
  };
}
Cookie.prototype.renderTable = function () {
  let tr = document.createElement('tr');
  cookieBody.appendChild(tr);
  let tdName = document.createElement('tr');
  tdName.textContent = this.name;
  tr.appendChild(tdName);

  for (let i=0; i < hours.length; i++) {
    let cookiesThisHour = Math.ceil(this.getRandomCustomers() * this.avg);
    this.cookiesSoldPerHourArray.push(cookiesThisHour);
    this.dailyTotal = this.dailyTotal + cookiesThisHour;

    console.log(cookiesThisHour, this.dailyTotal);

    let td = document.createElement('td');
    td.textContent = cookiesThisHour;
    tr.appendChild(td);
  }
    let tdTotal = document.createElement('td');
    tdTotal.textContent = this.dailyTotal;
    tr.appendChild(tdTotal);
  };

//  function renderHeader() {
//    let tr = document.createElement('tr');
//    cookieHead.appendChild(tr);
//    let tdHours = document.createElement('td');
//    tdHours.textContent = 'Hours';
//    tr.appendChild(tdHours);
//    let tdHours = 0;
//    for (let i = 0; i < hours.length; i++) {
//      tdHours += (hours[i]);
//    }
//    let tdHours = document.createElement('td');
//    td.textContent = tdHours;
//    td.appendChild(td);
//  }
  function renderFooter() {
    let tr = document.createElement('tr');
    cookieFoot.appendChild(tr);
    let tdName = document.createElement('td');
    tdName.textContent = 'Totals';
    tr.appendChild(tdName);
    let totalTotals = 0;
    for (let i = 0; i < hours.length; i++) {
      let hourlyTotals = 0;
      for (let j = 0; j < alllocations.length; j++) {
        hourlyTotals += (allocations[j].cookiesSoldPerHourArray[i]);
        totalTotals += (allocations[j].cookiesSoldPerHourArray[i]);
      }
      let td = document.createElement('td');
      td.textContent = hourlyTotals;
      tr.appendChild(td);
    }
    let grandTotalTD = document.createElement('td');
    grandTotalTD.textContent = totalTotals;
    tr.appendChild(grandTotalTd);
  }
  let seattle = new Cookie (
  'Seattle',
  23,
  65,
  6.3
);
  seattle.renderTable();

  let tokyo = new Cookie (
  'Tokyo',
  3,
  24,
  1.2
);
tokyo.renderTable();

let dubai = new Cookie (
  'Dubai',
  11,
  38,
  3.7
);
dubai.renderTable();

let paris = new Cookie (
  'Paris',
  20,
  38,
  2.3
);
paris.renderTable();

let lima = new Cookie (
  'Lima',
  2,
  16,
  4.6
);
lima.renderTable();




//-------------------------------------------------------LAB 6-------------------------------------------------------------------------

// seattle ----------------------------------------------------------------------------------------------------------------------------
//let seattleList = document.getElementById('seattleList');

//console.log(seattleList);

//let hours = ['6 a.m', '7 a.m', '8 a.m', '9 a.m', '10 a.m', '11 a.m', '12 p.m', '1 p.m', '2 p.m', '3 p.m', '4 p.m', '5 p.m', '6 p.m', '7 p.m'];


//let seattle = {
//  name: 'Seattle',
//  min: 23,
//  max: 65,
//  avg: 6.3,
//  dailyTotal: 0,
//  cookiesSoldEachHourArray: [],
//  getRandomCustomers: function() {
//    return Math.floor(Math.random() * (this.max - this.min + 1) + this.min); 
//  },
//  calcHourlySales: function () {
//    for (let i = 0; i < hours.length; i++) {
//      let randNum = this.getRandomCustomers();
//      let cookiesSoldThisHour = Math.ceil(this.avg * randNum);
//      this.cookiesSoldEachHourArray.push(cookiesSoldThisHour)
//      this.dailyTotal += cookiesSoldThisHour;
//    }
//  },
//  renderList: function() {
//  this.calcHourlySales();
//  for (let i = 0; i < hours.length; i++) {
//  let listItemsea = document.createElement('li');
//  listItemsea.textContent = `${hours[i]}: ${this.cookiesSoldEachHourArray[i]} cookies`;
//  seattleList.appendChild(listItemsea);
//  }
//  let totalLi = document.createElement('li');
//  totalLi.textContent = `Total: ${this.dailyTotal}`;
//  seattleList.appendChild(totalLi);
// }
//}
//seattle.renderList();

// tokyo -----------------------------------------------------------------------------------------------------------------------------------

//let tokyoList = document.getElementById('tokyoList');

//console.log(tokyoList);


//let tokyo = {
//  name: 'Tokyo',
//  min: 3,
//  max: 24,
//  avg: 1.2,
//  dailyTotal: 0, 
//  cookiesSoldEachHourArray: [],
//  getRandomCustomers: function() {
//    return Math.floor(Math.random() * (this.max - this.min + 1) + this.min); 
//  },
//  calcHourlySales: function () {
//    for (let i = 0; i < hours.length; i++) {
//      let randNum = this.getRandomCustomers();
//      let cookiesSoldThisHour = Math.ceil(this.avg * randNum);
//      this.cookiesSoldEachHourArray.push(cookiesSoldThisHour)
//      this.dailyTotal += cookiesSoldThisHour;
//    }
//  },
//  renderList: function() {
//  this.calcHourlySales();
//  for (let i = 0; i < hours.length; i++) {
//  let listItemsea = document.createElement('li');
//  listItemsea.textContent = `${hours[i]}: ${this.cookiesSoldEachHourArray[i]} cookies`;
//  tokyoList.appendChild(listItemsea);
//  }
//  let totalLi = document.createElement('li');
//  totalLi.textContent = `Total: ${this.dailyTotal}`;
//  tokyoList.appendChild(totalLi);
//  }
//}
//tokyo.renderList();

// dubai -----------------------------------------------------------------------------------------------------------------------------------

//let dubaiList = document.getElementById('dubaiList');

//console.log(dubaiList);


//let dubai = {
//  name: 'Dubai',
//  min: 11,
//  max: 38,
//  avg: 3.7,
//  dailyTotal: 0, 
//  cookiesSoldEachHourArray: [],
//  getRandomCustomers: function() {
//    return Math.floor(Math.random() * (this.max - this.min + 1) + this.min); 
//  },
//  calcHourlySales: function () {
//    for (let i = 0; i < hours.length; i++) {
//      let randNum = this.getRandomCustomers();
//      let cookiesSoldThisHour = Math.ceil(this.avg * randNum);
//      this.cookiesSoldEachHourArray.push(cookiesSoldThisHour)
//      this.dailyTotal += cookiesSoldThisHour;
//    }
//  },
//  renderList: function() {
//  this.calcHourlySales();
//  for (let i = 0; i < hours.length; i++) {
//  let listItemsea = document.createElement('li');
//  listItemsea.textContent = `${hours[i]}: ${this.cookiesSoldEachHourArray[i]} cookies`;
//  dubaiList.appendChild(listItemsea);
//  }
//  let totalLi = document.createElement('li');
//  totalLi.textContent = `Total: ${this.dailyTotal}`;
//  dubaiList.appendChild(totalLi);
// }
//}
//dubai.renderList();

// paris -----------------------------------------------------------------------------------------------------------------------------------

//let parisList = document.getElementById('parisList');

//console.log(parisList);


//let paris = {
//  name: 'Paris',
//  min: 20,
//  max: 38,
//  avg: 2.3,
//  dailyTotal: 0, 
//  cookiesSoldEachHourArray: [],
//  getRandomCustomers: function() {
//    return Math.floor(Math.random() * (this.max - this.min + 1) + this.min); 
//  },
//  calcHourlySales: function () {
//    for (let i = 0; i < hours.length; i++) {
//      let randNum = this.getRandomCustomers();
//      let cookiesSoldThisHour = Math.ceil(this.avg * randNum);
//      this.cookiesSoldEachHourArray.push(cookiesSoldThisHour)
//      this.dailyTotal += cookiesSoldThisHour;
//    }
//  },
//  renderList: function() {
//  this.calcHourlySales();
//  for (let i = 0; i < hours.length; i++) {
//  let listItemsea = document.createElement('li');
//  listItemsea.textContent = `${hours[i]}: ${this.cookiesSoldEachHourArray[i]} cookies`;
//  parisList.appendChild(listItemsea);
//  }
//  let totalLi = document.createElement('li');
//  totalLi.textContent = `Total: ${this.dailyTotal}`;
//  parisList.appendChild(totalLi);
// }
//}
//paris.renderList();

// lima ------------------------------------------------------------------------------------------------------------------------------------

//let limaList = document.getElementById('limaList');

//console.log(limaList);


//let lima= {
//  name: 'Lima',
//  min: 2,
//  max: 16,
//  avg: 4.6,
//  dailyTotal: 0,
//  cookiesSoldEachHourArray: [],
//  getRandomCustomers: function() {
//    return Math.floor(Math.random() * (this.max - this.min + 1) + this.min); 
//  },
//  calcHourlySales: function () {
//    for (let i = 0; i < hours.length; i++) {
//      let randNum = this.getRandomCustomers();
//      let cookiesSoldThisHour = Math.ceil(this.avg * randNum);
//      this.cookiesSoldEachHourArray.push(cookiesSoldThisHour)
//      this.dailyTotal += cookiesSoldThisHour;
//    }
//  },
//  renderList: function() {
//  this.calcHourlySales();
//  for (let i = 0; i < hours.length; i++) {
//  let listItemsea = document.createElement('li');
//  listItemsea.textContent = `${hours[i]}: ${this.cookiesSoldEachHourArray[i]} cookies`;
//  limaList.appendChild(listItemsea);
//  }
//  let totalLi = document.createElement('li');
//  totalLi.textContent = `Total: ${this.dailyTotal}`;
//  limaList.appendChild(totalLi);
// }
//}
//lima.renderList();
