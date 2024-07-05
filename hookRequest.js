const requestFilter = {
    urls: ["<all_urls>"],
    types: ["xmlhttprequest"]
}

const extraInfoSpec = ['blocking']

let handler = function(details) {
    let url = details.url;    
    if(url.includes('chunklist_480p.m3u8'))
        return {redirectUrl: url.replace('chunklist_480p.m3u8', 'chunklist_1080p.m3u8')}
};

browser.webRequest.onBeforeRequest.addListener(handler, requestFilter, extraInfoSpec);