// ===== script injection =====
const extenstion = typeof browser === "undefined" ? chrome : browser;

extenstion.tabs.onUpdated.addListener(async (tabId, changeInfo, tab) => {
    if ((await extenstion.runtime.getPlatformInfo())["os"] != "win") {
        console.log(
            "[FUCK CHZZK GRID] F.C.G Detected platform is not windows. Bypass disabled",
        );
        browser.declarativeNetRequest.updateEnabledRulesets({
            disableRulesetIds: ["ruleset_1"],
        });
        return;
    } else {
        browser.declarativeNetRequest.updateEnabledRulesets({
            enableRulesetIds: ["ruleset_1"],
        });
    }
    let urlRegex = /(http|https):\/\/chzzk.naver.com\/live\/[A-z0-9]+/g;
    console.log(changeInfo.url);

    if (!!!changeInfo.url) return;
    console.log(changeInfo.url);
    if (changeInfo.url.match(urlRegex)) {
        console.log("[FUCK CHZZK GRID] url changed!");
        await injectScript(tabId);
    }
});

async function injectScript(tabId) {
    console.log("[FUCK CHZZK GRID] try to inject script");
    extenstion.scripting.executeScript({
        target: { tabId: tabId },
        files: ["inject.js"],
        world: "MAIN",
    });
}

// ===== bypass grid system =====
// declarativeNetRequest를 사용하여 480p를 1080p로 리다이렉트
// rules.json에서 정의된 규칙이 자동으로 적용됩니다.
