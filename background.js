// ===== script injection =====
browser.tabs.onUpdated.addListener(async (tabId, changeInfo, tab) => {
    let urlRegex = /(http|https):\/\/chzzk.naver.com\/live\/[A-z0-9]+/g;
    if (!!!changeInfo.url) return;
    console.log(changeInfo.url);
    if (changeInfo.url.match(urlRegex)) {
        console.log("[FUCK CHZZK GRID] url changed!");
        await injectScript(tabId);
    }
});

async function injectScript(tabId) {
    console.log("[FUCK CHZZK GRID] try to inject script");
    browser.scripting.executeScript({
        target: { tabId: tabId },
        files: ["inject.js"],
        world: "MAIN",
    });
}

// ===== bypass grid system =====
const requestFilter = {
    urls: ["<all_urls>"],
    types: ["xmlhttprequest"],
};

const URL_MATCH_PATTERN = [
    /chunklist_480p.m3u8/g,
    /[A-z0-9]+\/480p\/hdntl=.+\/chunklist.m3u8/g,
    /[A-z0-9]+\/480p\/hdntl=.+\/.+chunklist.m3u8/g,
    /[0-9A-z]+\/480p\/chunklist.m3u8/g,
];

const extraInfoSpec = ["blocking"];

let handler = function (details) {
    let url = details.url;
    for (let i = 0; i < URL_MATCH_PATTERN.length; i++) {
        if (url.match(URL_MATCH_PATTERN[i])) {
            return {
                redirectUrl: url.replace("480p", "1080p"),
            };
        }
    }
};

browser.webRequest.onBeforeRequest.addListener(
    handler,
    requestFilter,
    extraInfoSpec
);
