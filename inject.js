var FCG_attempt = 0;

console.log("[FUCK CHZZK GRID] script inject!");
const qualityObserver = new MutationObserver(callback);
const observeConfig = {
    childList: true,
    subtree: true,
};

(function () {
    "use strict";

    // Intercept fetch requests
    const origFetch = window.fetch;
    window.fetch = function (...args) {
        if (args[0].match(/naverliveconnector/g)) console.log(args[0]);
        if (args[0].match(/http:\/\/127\.0\.0\.1\:[0-9]{5}\/auth/g))
            args[0] = "";
        if (
            args[0].match(/[A-z0-9]+\/480p\/hdntl=.+\/chunklist.m3u8/g) ||
            args[0].match(/chunklist_480p.m3u8/g)
        )
            args[0] = args[0].replace("480p", "1080p");

        return origFetch.apply(this, args);
    };

    // Intercept XHR requests
    const origXHR = window.XMLHttpRequest.prototype.open;
    window.XMLHttpRequest.prototype.open = function (method, url, ...args) {
        if (url.match(/naverliveconnector/g)) console.log(url);
        if (url.match(/http:\/\/127\.0\.0\.1\:[0-9]{5}\/auth/g)) url = "";
        if (
            url.match(/[A-z0-9]+\/480p\/hdntl=.+\/chunklist.m3u8/g) ||
            url.match(/chunklist_480p.m3u8/g)
        )
            url = url.replace("480p", "1080p");
        return origXHR.apply(this, [method, url, ...args]);
    };
})();

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
        // 화질 선택 리스트 텍스트
        qualityElement.querySelector(
            "li > div:nth-child(2) > span > div"
        ).innerHTML =
            '<span class="pzp-pc-ui-setting-quality-item__prefix">1080p&nbsp;<div class="pzp-ui-track-badge"><em style="vertical-align:super;" class="pzp-ui-track-badge__badge">with FUCK GRID™</em> <!----></div></span>';
        qualityObserver.observe(
            document.querySelector(
                "div[role=menu] > div:nth-child(1) > div > div:last-child > span"
            ),
            observeConfig
        );
        console.log("[FUCK CHZZK GRID] inject complete!");
    } else setTimeout(changeText, 500);
}

function callback(mutationList) {
    console.log("[FCG] !!!CHANGE DETECT!!!");
    console.log(mutationList);
    let text = document
        .querySelector(
            "div[role=menu] > div:nth-child(1) > div > div:last-child > span"
        )
        .innerText.trim();

    if (text == "480p")
        document.querySelector(
            "div[role=menu] > div:nth-child(1) > div > div:last-child > span"
        ).innerHTML =
            '1080p&nbsp;<div class="pzp-ui-track-badge"><em style="vertical-align:super;" class="pzp-ui-track-badge__badge">with FUCK GRID™</em> <!----></div>';
}

changeText();
