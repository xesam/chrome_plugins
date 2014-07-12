/**
 * Created by xe [xesamguo@gmail.com|416249980@qq.com] on 14-7-12.
 */
chrome.runtime.onMessage.addListener(
    function (request, sender, sendResponse) {
        chrome.downloads.download({
            'url': request['download_url'],
            'filename': request['file_name'] + '.' + request['file_extension']
        }, function (downloadId) {

        });

        sendResponse({
            'resp': 'download ' + request['file_name']
        })
    }
);