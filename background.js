// ===== script injection =====
chrome.webNavigation.onDOMContentLoaded.addListener(function (details) {
    let urlRegex = /(http|https):\/\/chzzk.naver.com\/live\/[A-z0-9]+/g;
    if (!!!details.url) return;
    console.log(details.url);
    if (details.url.match(urlRegex)) {
        console.log("[FUCK CHZZK GRID] url changed!");
        injectScript(details.tabId);
    }
});
chrome.tabs.onUpdated.addListener(async (tabId, changeInfo, tab) => {
    let urlRegex = /(http|https):\/\/chzzk.naver.com\/live\/[A-z0-9]+/g;
    if (!!!changeInfo.url) return;
    console.log(changeInfo.url);
    if (changeInfo.url.match(urlRegex)) {
        console.log("[FUCK CHZZK GRID] url changed!");
        await injectScript(tabId);
    }
});

async function injectScript(tabId) {
    console.log("[FUCK CHZZK GRID] script inject");
    chrome.scripting.executeScript({
        target: { tabId: tabId },
        files: ["inject.js"],
        world: "MAIN",
    });
}
