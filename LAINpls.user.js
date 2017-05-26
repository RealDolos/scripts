// ==UserScript==
// @name         Lain, pls
// @namespace    https://volafile.org/
// @version      2
// @author       topkuk productions
// @match        https://volafile.org/r/*
// @grant        unsafeWindow
// @require      https://cdn.rawgit.com/spencinator/scripts/232620aaad8abff7d49258f85a495f652d80f3ca/dry.js
// @run-at       document-start
// @icon         https://volafile.org/favicon.ico
// ==/UserScript==

dry.once("dom", () => {
    "use strict";
    function unannoy() {}

    dry.replaceEarly("messages", "showAdultWarning", unannoy);
    dry.replaceEarly("messages", "showOldRoom", unannoy);
});
