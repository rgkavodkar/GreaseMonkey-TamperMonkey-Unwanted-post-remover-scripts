// ==UserScript==
// @name         Facebook Sponsored Ads remover
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Removes the Sponsored Ads from the Sidebar
// @author       You
// @match        https://www.facebook.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Your code here...
    // START Code corresponding to GreaseMonkey
    document.getElementById("pagelet_ego_pane").setAttribute("style", "display:none");
    // END Code corresponding to GreaseMonkey

})();