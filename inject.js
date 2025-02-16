var FCG_attempt = 0;

console.log("[FUCK CHZZK GRID] script inject!");

function changeText() {
    if (FCG_attempt > 5) {
        console.log("[FUCK CHZZK GRID] Failed to inject - element not found");
        return;
    }
    FCG_attempt++;
    let qualitys = document.querySelectorAll(
        "div.pzp-setting-quality-pane > div:nth-child(2) > ul > li"
    );
    let qualityElement;
    // 480p 텍스트 찾기
    for (let i = 0; i < qualitys.length; i++) {
        let e = qualitys[i];
        if (e.innerText.trim().includes("480p")) {
            qualityElement = e;
            break;
        }
    }
    let video = document.querySelector(
        "div[class^='live_information_details']"
    );

    if (!!video && !!qualityElement) {
        qualityElement.querySelector(
            "li > div:nth-child(2) > span > div"
        ).innerHTML =
            '<span class="pzp-pc-ui-setting-quality-item__prefix">1080p&nbsp;<div class="pzp-ui-track-badge"><em style="vertical-align:super;" class="pzp-ui-track-badge__badge">with FUCK GRID™</em> <!----></div></span>';
        console.log("[FUCK CHZZK GRID] inject complete!");
    } else setTimeout(changeText, 500);
}

changeText();
