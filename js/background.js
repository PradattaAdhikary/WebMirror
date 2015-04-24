/**
 * Created by PRADATTA on 19-Apr-15.
 */
var toggle = false;
chrome.browserAction.onClicked.addListener(function (details) {
    if(details.url.indexOf("chrome")!==0) {
        toggle = !toggle;
        setIcon(toggle, details.id);
        toggleMirrorPage(toggle, details.id);
    } else{
        console.log("This Extension can not work on Chrome's Internal Page !!");
        alert("This Extension can not work on Chrome's Internal Page !!");
    }
});

chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
    setIcon(toggle, tabId);
    if (changeInfo.status == 'complete' && tab.active) {
        toggleMirrorPage(toggle, tabId);
    }
});

function setIcon(toggleState, tabId) {
    if (toggleState) {
        chrome.browserAction.setIcon({path: "assets/icon_16.png", tabId: tabId});
    }
    else {
        chrome.browserAction.setIcon({path: "assets/icon_16_off.png", tabId: tabId});
    }
}

function toggleMirrorPage(toggleState, tabId){
    if(toggleState)
        chrome.tabs.executeScript(tabId, {file: "js/mirrorScript.js"}, function() {
            console.log("WEb Page Mirrored ..");
        });
    else
        chrome.tabs.executeScript(tabId, {file: "js/deMirrorScript.js"}, function() {
            console.log("WEb Page De-Mirrored ..");
        });
}
