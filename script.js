// ==UserScript==
// @name         Upwork Profile Refresher
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Automatically hard refreshes the Upwork profile every 5 minutes.
// @author       Maaz
// @match        https://www.upwork.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    function refreshProfile() {
        window.location.href = window.location.href;
    }

    // Set the interval to 5 minutes (300,000 milliseconds)
    setInterval(refreshProfile, 300000);
})();
