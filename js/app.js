'use strict'

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
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

let everyCityStore = [];

let storeHours = ['6 AM', '7 AM', '8 AM', '9 AM', '10 AM', '11 AM', '12 AM', '1 PM', '2 PM', '3 PM', '4 PM', '5 PM', '6 PM', '7 PM'];

function StoreConstructor(name, min, max, avg) {
  this.name = name;
  this.min = min;
  this.max = max;
  this.avg = avg;
  this.cookiesEveryHour = [];
  this.storeTotal = 0;
  this.createTable();
  everyCityStore.push(this);
}

function averageAmountCookies(min, max) {
  return Math.trunc(Math.random() * (max - min + 1)) + min;
}

StoreConstructor.prototype.calThemValues = function () {
  for (let i = 0; i < storeHours.length; i++) {
    let rngNum = averageAmountCookies(this.min, this.max);
    let cookiesPerHour = Math.trunc(rngNum * this.avg);
    this.cookiesEveryHour.push(cookiesPerHour);
    this.storeTotal +=cookiesPerHour;
  }
};

StoreConstructor.prototype.createTable = function () {
  this.calThemValues();
  let section = document.querySelector('tbody');
  let head = document.createElement('th');
  let row = document.createElement('tr');
  head.textContent = this.name;
  row.appendChild(head);
  section.appendChild(row);
  for (let i = 0; i < this.cookiesEveryHour.length; i++) {
    let cell = document.createElement('td');
    row.appendChild(cell);
    cell.textContent = this.cookiesEveryHour[i];
  }
  let cellTotal = document.createElement('td');
  row.appendChild(cellTotal);
  cellTotal.textContent = this.storeTotal;
};

let createHeader = function () {
  let section = document.querySelector('thead');
  let head = document.createElement('th');
  let row = document.createElement('tr');
  head.textContent = '';
  row.appendChild(head);
  section.appendChild(row);

  for(let i = 0; i < storeHours.length; i++) {
    let cell = document.createElement('th');
    cell.textContent = storeHours[i];
    row.appendChild(cell);
  }
  let headerTotal = document.createElement('th');
  headerTotal.textContent = 'Total';
  row.appendChild(headerTotal);
};

let createFooter = function () {
  let section = document.querySelector('tfoot');
  let head = document.createElement('th');
  let row = document.createElement('tr');
  head.textContent = 'Total';
  row.appendChild(head);
  section.appendChild(row);
  for (let i = 0; i < storeHours.length; i++) {
    let salesAtHour = 0;
    let cell = document.createElement('td');
    for (let j = 0; j < everyCityStore.length; j++) {
      let currentStore = everyCityStore[j];
      let currentSales = currentStore.cookiesEveryHour[i];
      salesAtHour += currentSales;
    }
    cell.textContent = salesAtHour;
    row.append(cell);
  }
  let cell = document.createElement('td');
  let grandTotal = 0;
  for (let i = 0; i < everyCityStore.length; i++) {
    grandTotal += parseInt(everyCityStore[i].storeTotal);
  }
  cell.textContent = grandTotal;
  row.appendChild(cell);
};
createHeader();
new StoreConstructor('SEATTLE', 23, 65, 6.3);
new StoreConstructor('TOKYO', 3, 24, 1.2);
new StoreConstructor('DUBAI', 11, 38, 3.7);
new StoreConstructor('PARIS', 20, 38, 2.3);
new StoreConstructor('LIMA', 2, 16, 4.6);
createFooter();
