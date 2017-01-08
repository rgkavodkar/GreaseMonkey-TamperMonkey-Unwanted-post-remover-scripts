// ==UserScript==
// @name         Gosugamers Sponsored Ads remover
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Removes sponsored ads from Gosugamers website
// @author       You
// @match        http://www.gosugamers.net/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Your code here...
    // START Code corresponding to GreaseMonkey
    console.log("TamperMonkey: Attempting to remove the Sponsored post");
    document.getElementById("horizontal-holder").setAttribute("style","display:none");
    document.getElementById("box-holder").setAttribute("style","display:none");
    // END Code corresponding to GreaseMonkey
})();