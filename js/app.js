'use strict'


// seattle ----------------------------------------------------------------------------------------------------------------------------
let seattleList = document.getElementById('seattleList');
console.log(seattleList);

let hours = ['6 a.m', '7 a.m', '8 a.m', '9 a.m', '10 a.m', '11 a.m', '12 p.m', '1 p.m', '2 p.m', '3 p.m', '4 p.m', '5 p.m', '6 p.m', '7 p.m']


let seattle = {
  name: 'Seattle',
  min: 23,
  max: 65,
  avg: 6.3,
  dailyTotal: 0,
  getRandomCustomers: function() {
    return Math.floor(Math.random() * (this.max - this.min + 1) + this.min); 
  },
   render: function () {
       
     for (let i = 0; i < hours.length; i++) {
       let everyHour = this.getRandomCustomers();
       let li = document.createElement('li');
       li.textContent = (`${hours[i]}: ${everyHour} Cookies`);
       seattleList.appendChild(li);
       this.dailyTotal += everyHour;
  }
   let finalTotalElement=document.createElement('li')
   finalTotalElement.textContent=(`Total: ${this.dailyTotal}`)
   seattleList.appendChild(finalTotalElement)
  
}

}
seattle.render();
//console.log(seattle.getRandomCustomers());

// tokyo -----------------------------------------------------------------------------------------------------------------------------------

let tokyoList = document.getElementById('tokyoList');

console.log(tokyoList);


let tokyo = {
  name: 'Tokyo',
  min: 3,
  max: 24,
  avg: 1.2,
  dailyTotal: 0, 
  getRandomCustomers: function() {
    return Math.floor(Math.random() * (this.max - this.min + 1) + this.min); 
  },
render: function () {
       
  for (let i = 0; i < hours.length; i++) {
    let everyHour = this.getRandomCustomers();
    let li = document.createElement('li');
    li.textContent = (`${hours[i]}: ${everyHour} Cookies`);
    tokyoList.appendChild(li);
    this.dailyTotal += everyHour;
}
let finalTotalElement=document.createElement('li')
finalTotalElement.textContent=(`Total: ${this.dailyTotal}`)
tokyoList.appendChild(finalTotalElement)

}

}
tokyo.render();

//console.log(tokyo.getRandomCustomers());

// dubai -----------------------------------------------------------------------------------------------------------------------------------

let dubaiList = document.getElementById('dubaiList');

console.log(dubaiList);


let dubai = {
  name: 'Dubai',
  min: 11,
  max: 38,
  avg: 3.7,
  dailyTotal: 0, 
  getRandomCustomers: function() {
    return Math.floor(Math.random() * (this.max - this.min + 1) + this.min); 
  },
render: function () {
       
  for (let i = 0; i < hours.length; i++) {
    let everyHour = this.getRandomCustomers();
    let li = document.createElement('li');
    li.textContent = (`${hours[i]}: ${everyHour} Cookies`);
    dubaiList.appendChild(li);
    this.dailyTotal += everyHour;
}
let finalTotalElement=document.createElement('li')
finalTotalElement.textContent=(`Total: ${this.dailyTotal}`)
dubaiList.appendChild(finalTotalElement)

}

}
dubai.render();

//console.log(dubai.getRandomCustomers());

// paris -----------------------------------------------------------------------------------------------------------------------------------

let parisList = document.getElementById('parisList');

console.log(parisList);


let paris = {
  name: 'Paris',
  min: 20,
  max: 38,
  avg: 2.3,
  dailyTotal: 0, 
  getRandomCustomers: function() {
    return Math.floor(Math.random() * (this.max - this.min + 1) + this.min); 
  },
render: function () {
       
  for (let i = 0; i < hours.length; i++) {
    let everyHour = this.getRandomCustomers();
    let li = document.createElement('li');
    li.textContent = (`${hours[i]}: ${everyHour} Cookies`);
    parisList.appendChild(li);
    this.dailyTotal += everyHour;
}
let finalTotalElement=document.createElement('li')
finalTotalElement.textContent=(`Total: ${this.dailyTotal}`)
parisList.appendChild(finalTotalElement)

}

}
paris.render();

//console.log(paris.getRandomCustomers());

// lima ------------------------------------------------------------------------------------------------------------------------------------

let limaList = document.getElementById('limaList');

console.log(limaList);


let lima= {
 name: 'Lima',
  min: 2,
  max: 16,
  avg: 4.6,
  dailyTotal: 0,
  getRandomCustomers: function() {
    return Math.floor(Math.random() * (this.max - this.min + 1) + this.min); 
  },
render: function () {
       
  for (let i = 0; i < hours.length; i++) {
    let everyHour = this.getRandomCustomers();
    let li = document.createElement('li');
    li.textContent = (`${hours[i]}: ${everyHour} Cookies`);
    limaList.appendChild(li);
    this.dailyTotal += everyHour;
}
let finalTotalElement=document.createElement('li')
finalTotalElement.textContent=(`Total: ${this.dailyTotal}`)
limaList.appendChild(finalTotalElement)

}

}
lima.render();

//console.log(lima.getRandomCustomers());
