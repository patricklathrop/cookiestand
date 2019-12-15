'use strict';
console.log('js online');

// global variable cookieArray will stor the objects pushed to it in the format cookieArray[#].<object> //
var cookieArray = [];
var shopHour = 14;
var totalCookiesSold = [];

/** number randomizer */
function randomNum(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

/** zero out total cookies sold per hour row*/
for (var i=0; i < shopHour; i++){
  totalCookiesSold.push(0);
}

/**
 * this function is used to bundle parameters passed to it, as well as adding an empty array called 'cookiesPerHour' that will store the number of 'cookies per hour', and returning an object.
 * @param {string} location this is the city location
 * @param {number} minCust this is the minimum customers per hour
 * @param {number} maxCust this is the maximum customers per hour
 * @param {number} avgCookieSale average cookies per customer per hour
 */
function NewPlace(location, minCust, maxCust, avgCookieSale){
  this.location = location;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookieSale = avgCookieSale;
  this.cookiesPerHour = [];
  this.totalCookies = 0;
}

/**
 * each line below is calling 'function newPlace' and passing along the parameters listed to bundle into an object that can be passed to cookieArray
 */
function coreLocation() {
  cookieArray.push(new NewPlace('Seattle', 23, 65, 6.3));
  cookieArray.push(new NewPlace('Tokyo', 3, 24, 1.2));
  cookieArray.push(new NewPlace('Dubai', 11, 38, 3.7));
  cookieArray.push(new NewPlace('Paris', 20, 38, 2.3));
  cookieArray.push(new NewPlace('Lima', 2, 16, 4.6));
}
coreLocation();

/** function is called to populate the cookiesPerHour array */
function calcSales (){
  for (i=0; i < cookieArray.length; i++){
    for (var j=0; j < shopHour; j++){
      var n=randomNum( cookieArray[i].minCust, cookieArray[i].maxCust) * cookieArray[i].avgCookieSale;

      cookieArray[i].cookiesPerHour.push(n);

      cookieArray[i].totalCookies+=n;

      totalCookiesSold[j]+=n;

    }
  }
}
calcSales();

/** create tables function */
function createTable (){
  var table = document.getElementById('cookieSales');

  for (i=0; i < cookieArray.length; i++){
    var row=document.createElement('tr');

    var col = document.createElement('td');
    var x = document.createTextNode(cookieArray[i].location);
    col.appendChild(x);
    row.appendChild(col);

    for (var j = 0; j < shopHour; j++) {
      var amount = parseInt(cookieArray[i].cookiesPerHour[j]);
      col = document.createElement('td');
      x = document.createTextNode(amount);
      col.appendChild(x);
      row.appendChild(col);
    }

    col = document.createElement('td');
    x = document.createTextNode(parseInt(cookieArray[i].totalCookies));
    col.appendChild(x);
    row.appendChild(col);

    table.appendChild(row);
  }
}
createTable();


/** Create footer  */
function createFoot() {
  var foot = document.getElementById('foot');

  var row = document.createElement('tr');

  var col = document.createElement('td');
  var x = document.createTextNode('Total');
  col.appendChild(x);
  row.appendChild(col);

  var total_amount = 0;
  for (i = 0; i < shopHour; i++) {
    var amount = parseInt(totalCookiesSold[i]);
    col = document.createElement('td');
    x = document.createTextNode(amount);
    col.appendChild(x);
    row.appendChild(col);
    total_amount += amount;
  }

  col = document.createElement('td');
  x = document.createTextNode(total_amount);
  col.appendChild(x);
  row.appendChild(col);


  foot.appendChild(row);

}
createFoot();





