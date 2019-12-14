'use strict';
console.log('js online');

// global variable //
var cookieArray = [];

// this function is used to bundle parameters passed to it, as well as adding an empty array called 'cookiesPerHour' that will store the number of 'cookies per hour', and returning an object //
function newPlace(location, minCust, maxCust, avgCookieSale){
  this.location = location;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookieSale = avgCookieSale;
  this.cookiesPerHour = [];
}

// each line below is calling 'function newPlace' and passing along the parameters listed to bundle into an object that can be passed to cookieArray //
cookieArray.push(new newPlace("Seattle",23, 65, 6.3));
cookieArray.push(new newPlace("Tokyo", 3, 24, 1.2));
cookieArray.push(new newPlace("Dubai", 11, 38, 3.7));
cookieArray.push(new newPlace("Paris", 20, 38, 2.3));
cookieArray.push(new newPlace("Lima", 2, 16, 4.6));

