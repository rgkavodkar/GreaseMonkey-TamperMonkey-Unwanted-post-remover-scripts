// ==UserScript==
// @name         Youtube Recommendations Remover
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Removes the "Recommended videos/channels" from Youtube homepage
// @author       You
// @match        https://www.youtube.com/
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Your code here...
    var ELEMENT_ID = "feed-main-what_to_watch";
    var TITLE_ID = "branded-page-module-title-text";

    console.log("[YouTube Recommendations Remover] Javascript loaded");

    // Run only for YouTube
    if(document.URL.toLowerCase().indexOf("www.youtube.com") > -1) {
        // get the div containing the list
        var list_parent = document.getElementById(ELEMENT_ID);

        if(list_parent != null) {
            console.log("[YouTube Recommendations Remover] " + ELEMENT_ID + " found!");
            // Get the OL object, that is the list of channels shown
            // Get the child OL
            var ol = null;
            for(var i = 0; i < list_parent.children.length; i++) { 
                if(list_parent.children[i].tagName == "OL") { 
                    ol = list_parent.children[i]; 
                    break; 
                }
            }

            // If an ordered list does exists
            if(ol != null) {
                // Loop through each item
                // Check if the innerHTML contains the dreaded words
                // If so, hide the item
                for(var i = 0; i < ol.children.length; i++) {
                    if(ol.children[i].innerHTML.indexOf("Recommended channel for you") > -1 || ol.children[i].innerHTML.indexOf("Recommended videos") > -1) {
                        ol.children[i].style.display = "none";
                        console.log("[YouTube Recommendations Remover] Removed " + ol.children[i].getElementsByClassName(TITLE_ID)[0].innerHTML);
                    }
                }
            }
        } else {
            console.error("[YouTube Recommendations Remover] " + ELEMENT_ID + " not found!");
        }
    }
})();