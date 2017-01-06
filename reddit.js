// ==UserScript==
// @name         Remove Sponsored post on Reddit
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Removes the Sponsored post on Subreddits (usually the first item in the list)
// @author       You
// @match        https://www.reddit.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Your code here...
    // START Code corresponding to GreaseMonkey
    console.log("TamperMonkey: Attempting to remove the Sponsored post");
    document.getElementById("siteTable_organic").setAttribute("style", "display:none");
    // END Code corresponding to GreaseMonkey
})();