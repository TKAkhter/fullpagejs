$(document).ready(function () {
    $('#fullpage').fullpage({
        sectionsColor: ['#1bbc9b', '#4BBFC3', '#7BAABE', 'whitesmoke', '#ccddff'],
        anchors: ['firstPage', 'secondPage', '3rdPage', '4thpage', 'lastPage'],
        menu: '#menu',
    });
});

$(document).ready(function () {
    $("#demosMenu").change(function () {
        window.location.href = './vendor/fullpagejs/v2-9-7/examples/' + $(this).find("option:selected").attr("id") + '.html';
    });
});