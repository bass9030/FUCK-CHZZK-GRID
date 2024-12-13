console.log("[FUCK CHZZK GRID] script inject!");

function changeText() {
    let item = document.querySelector(
        "li.pzp-pc-ui-setting-quality-item:nth-child(3) > div:nth-child(2) > div:nth-child(1)"
    );
    let video = document.querySelector(
        "div[class^='live_information_details']"
    );
    if (!!video && !!item) {
        item.innerHTML =
            '<span class="pzp-pc-ui-setting-quality-item__prefix">1080p <div class="pzp-pc-ui-track-badge"><em style="vertical-align:super;" class="pzp-pc-ui-track-badge__badge">with FUCK GRID™</em> <!----></div></span>';
        console.log("[FUCK CHZZK GRID] inject complete!");
    } else setTimeout(changeText, 500);
}

changeText();
