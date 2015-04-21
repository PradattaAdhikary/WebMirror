/**
 * Created by PRADATTA on 19-Apr-15.
 */
var toggle = false;
chrome.browserAction.onClicked.addListener(function (tab) {
    toggle = !toggle;
    setIcon(toggle, tab.id);
    chrome.tabs.reload(tab.id);
});

chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
    setIcon(toggle, tabId);
    if (changeInfo.status == 'complete' && tab.active && toggle) {
        chrome.tabs.executeScript(null, {file: "js/content_script.js"});

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
