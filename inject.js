(() => {
    const LOG = {
        log: (...args) => {
            let defaultArgs = ["[FUCK CHZZK GRID]"];
            defaultArgs.push(...args);
            return console.log.apply(this, defaultArgs);
        },
        error: (...args) => {
            let defaultArgs = ["[FUCK CHZZK GRID]"];
            defaultArgs.push(...args);
            return console.error.apply(this, defaultArgs);
        },
    };

    function changeText() {
        // 선택 리스트에서의 텍스트 변경
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
        }

        // 설정 클릭했을때 처음 뜨는 표시 텍스트
        let current_quality_text_el = document.querySelector(
            "div.pzp-setting-intro-quality > div > div:last-child > span.pzp-ui-setting-home-item__value"
        );

        // 화질 리스트 선택 요소
        let selected_quality_text_el = document.querySelector(
            "li.pzp-ui-setting-quality-item.pzp-ui-setting-pane-item--checked"
        );

        if (selected_quality_text_el.innerText.trim().includes("FUCK GRID")) {
            // 이미 변경된경우 무시
            if (
                !current_quality_text_el.innerText.trim().includes("FUCK GRID")
            ) {
                current_quality_text_el.innerHTML =
                    '1080p <div class="pzp-ui-track-badge"><em style="vertical-align:super;" class="pzp-ui-track-badge__badge">with FUCK GRID™</em> <!----></div>';
                prevText = current_quality_text_el.innerText;
            }
        } else {
            if (prevText != current_quality_text_el.innerText) {
                current_quality_text_el.innerText =
                    selected_quality_text_el.innerText.trim();
                prevText = current_quality_text_el.innerText;
            }
        }
    }

    let delay = 1000;
    let prevTry = 0;
    function restoreQuality() {
        if (new Date().getTime() - prevTry < delay) return;
        prevTry = new Date().getTime();
        let qualityText = localStorage.getItem("quality-text");
        let qualityLists = document.querySelectorAll(
            `div.pzp-setting-quality-pane__list-container > ul > li`
        );
        if (!!!qualityLists?.length) return;

        if (qualityText == null) qualityText = "360p"; // 미선택시 자동 360p 선택

        let currentQuality = document.querySelector(
            "div.pzp-setting-quality-pane__list-container > ul > li.pzp-ui-setting-pane-item--checked"
        );

        if (currentQuality.innerText.trim() == qualityText) return;
        let videoElement = document.querySelector(
            "video.webplayer-internal-video"
        );

        if (!!!videoElement || videoElement.readyState < 3) return;

        document.querySelector("button.pzp-setting-button").click();
        document.querySelector("div.pzp-setting-intro-quality").click();

        for (let el of qualityLists) {
            if (el.innerText.trim() == qualityText) {
                el.dispatchEvent(
                    new KeyboardEvent("keydown", { key: "Enter" })
                );
                changeText();
                break;
            }
        }
    }

    function saveQuality() {
        let qualityList = document.querySelector(
            "div.pzp-setting-quality-pane__list-container > ul > li.pzp-ui-setting-pane-item--checked"
        );

        localStorage.setItem("quality-text", qualityList.innerText.trim());
    }

    let prevText = "";
    let qualityListElement = null;
    function callback(mutationList) {
        // ignore unloaded state
        if (document.readyState != "complete") return;

        // ignore when not live page
        if (
            !!!location.href.match(
                /https:\/\/chzzk\.naver\.com\/live\/[0-9a-z]+/g
            )
        )
            return;

        changeText();
        restoreQuality();
        if (
            !!document.querySelector(
                "div.pzp-setting-quality-pane__list-container"
            )
        ) {
            if (qualityListElement == null) {
                qualityListElement = document.querySelector(
                    "div.pzp-setting-quality-pane__list-container"
                );

                qualityListElement.addEventListener("click", saveQuality);
                qualityListElement.addEventListener("keydown", saveQuality);
            }
        }
    }

    LOG.log("script inject!");

    const qualityObserver = new MutationObserver(callback);
    const observeConfig = {
        childList: true,
        subtree: true,
        attributes: true,
        attributeFilter: ["class"],
    };
    qualityObserver.observe(document.body, observeConfig);
})();
