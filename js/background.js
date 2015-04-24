/**
 * Created by PRADATTA on 19-Apr-15.
 */
var toggle = false;
chrome.browserAction.onClicked.addListener(function (tab) {
    toggle = !toggle;
    setIcon(toggle, tab.id);
    toggleMirrorPage(toggle, tab.id);
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
        chrome.tabs.executeScript(tabId, {file: "js/mirrorScript.js"});
    else
        chrome.tabs.executeScript(tabId, {file: "js/deMirrorScript.js"});
}
