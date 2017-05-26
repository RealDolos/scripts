// ==UserScript==
// @name         Unnotify reports
// @namespace    http://volafile.org
// @version      1
// @description  because it's annoying
// @author       Me
// @match        https://volafile.org/r/*
// @grant        none
// @require      https://cdn.rawgit.com/spencinator/scripts/232620aaad8abff7d49258f85a495f652d80f3ca/dry.js
// @run-at       document-start
// ==/UserScript==

dry.once("dom", () => {
    "use strict";
    console.log("running", GM_info.script.name, GM_info.script.version, dry.version);
    const BLACK = /\.(txt|html?|rtf|docx?|xlsx?|exe|rar|zip) @|periscopefollower/;

    new class extends dry.MessageFilter {
        showMessage(orig, nick, message, options) {
            if (nick === "Report" && options.staff) {
                options.notify = options.highlight = false;
                if (message[1] && message[1].value) {
                    let text = message[1].value;
                    if (text.includes("BLACKLIST") && BLACK.test(text)) {
                        console.error(message);
                        return false;
                    }
                }
                return;
            }
            if (nick === "Log" && options.staff) {
                options.notify = options.highlight = false;
            }
        }
    }();
});
