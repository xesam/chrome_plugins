/**
 * Created by xe [xesamguo@gmail.com|416249980@qq.com] on 14-7-12.
 */

[document.getElementById('list1'), document.getElementById('list2')].forEach(function (item, index, lst) {

    if (!item) {
        return;
    }

    item.addEventListener('click', function (ev) {
        var target = ev.target;
        if (!target.className.match(/\bdownbtn\b/)) {
            return;
        }
        ev.preventDefault();
        ev.stopPropagation();
        var file_name = target.parentNode.parentNode.getElementsByClassName('u-ctitle')[0].innerText.replace(/\s/g, '');
        var download_url = target.href;
        var file_extension = download_url.substring(download_url.lastIndexOf('.') + 1);
        console.log(file_name, file_extension, download_url);
        chrome.runtime.sendMessage(
            {
                'file_name': file_name,
                'file_extension': file_extension,
                'download_url': download_url
            },
            function (response) {
//            console.log(response)
            }
        );

    }, false)
})
