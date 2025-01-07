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

const extraInfoSpec = ["blocking"];

let handler = function (details) {
    let url = details.url;
    if (url.includes("chunklist_480p.m3u8"))
        return {
            redirectUrl: url.replace(
                "chunklist_480p.m3u8",
                "chunklist_1080p.m3u8"
            ),
        };
};

browser.webRequest.onBeforeRequest.addListener(
    handler,
    requestFilter,
    extraInfoSpec
);
