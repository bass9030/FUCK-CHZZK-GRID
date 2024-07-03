// Intercept fetch requests

// window.addEventListener('load', overrideFetch);

// function overrideFetch() {
//     const origFetch = window.fetch;
//     window.fetch = function(...args) {
//         if (/nlive-streaming.navercdn.com|livecloud.pstatic.net/.test(args[0])) {
//             args[0] = args[0].replace('chunklist_480p.m3u8', 'chunklist_1080p.m3u8');
//         }
//         return origFetch.apply(this, args);
//     };
    
//     // Intercept XHR requests
//     const origXHR = window.XMLHttpRequest.prototype.open;
//     window.XMLHttpRequest.prototype.open = function(method, url, ...args) {
//         if (/nlive-streaming.navercdn.com|livecloud.pstatic.net/.test(url) && url.includes('chunklist_480p.m3u8')) {
//             url = url.replace('chunklist_480p.m3u8', 'chunklist_1080p.m3u8');
//         }
//         return origXHR.apply(this, [method, url, ...args]);
//     }
// }

function changeText() {
    let item = document.querySelector('li.pzp-pc-ui-setting-quality-item:nth-child(3) > div:nth-child(2) > div:nth-child(1)');
    if(!!item)
        item.innerHTML = '<span class="pzp-pc-ui-setting-quality-item__prefix">1080p <div class="pzp-pc-ui-track-badge"><em style="vertical-align:super;" class="pzp-pc-ui-track-badge__badge">with FUCK GRID™</em> <!----></div></span>' 
    else setTimeout(changeText, 500);
}

changeText();
// (async () => {
// })()
//.innerHTML = '1080p <em class="pzp-pc-ui-track-badge__badge" style="vertical-align:super;">with FUCK GRID™</em>' 