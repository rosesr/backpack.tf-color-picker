// ==UserScript==
// @name         backpack.tf color picker
// @namespace    https://steamcommunity.com/id/tomboyish/
// @version      0.1
// @description  Custom color picker for bptf tagging
// @author       rose
// @include      /^https?:\/\/(.*\.)?backpack\.tf(:\d+)?\/(?:id|profiles)\/.*/
// @icon         https://www.google.com/s2/favicons?sz=64&domain=backpack.tf
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    const callback = function(mutations){
        let itemTagColorPanes = document.querySelectorAll("div[id='item-tag-color-pane']");

        itemTagColorPanes.forEach((pane) => {
            if (pane.getAttribute("x-processed") == null) {
                pane.setAttribute("x-processed", "1");

                let newPaneButton = pane.querySelector("a").cloneNode();

                let hexColorInput = document.createElement("input");
                hexColorInput.oninput = function () {
                    newPaneButton.setAttribute("style", "background-color:" + hexColorInput.value + ";width:24px;height:24px;");
                    newPaneButton.setAttribute("data-color", hexColorInput.value);
                    newPaneButton.click();
                };

                pane.append(newPaneButton);
                pane.append(hexColorInput);
            }
        });

        console.log(itemTagColorPanes);
    };


    const observer = new MutationObserver(callback);
    observer.observe(document, {
        childList: true,
        subtree:true
    })
})();