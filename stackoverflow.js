// ==UserScript==
// @name         Stackoverflow Sponsored Ads remover
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Removes the job/newletter advertisements from the SO sidebar
// @author       You
// @match        http://stackoverflow.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Your code here...
    console.log("Attempting to remove the Job Ads");
    document.getElementById("hireme").setAttribute("style", "display:none");
    console.log("Attempting to remove the newsletter-ads");
    document.getElementById("newsletter-ad").setAttribute("style", "display:none");
})();