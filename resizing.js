var time = 300;
var resizeDelay = 100;
function resize() {
    if ($(window).width() <= 450) {
        $('#dualsenseImg').mapster('resize', $(window).width() * 0.9, 0, time);
    }
    else if ($(window).width() <= 768) {
        $('#dualsenseImg').mapster('resize', $(window).width() * 0.70, 0);
    }
    else if ($(window).width() <= 1000) {
        $('#dualsenseImg').mapster('resize', $(window).width() * 0.60, 0);
    }
    else if ($(window).width() <= 1366) {
        $('#dualsenseImg').mapster('resize', $(window).width() * 0.50, 0);
    }
    else {
        $('#dualsenseImg').mapster('resize', $(window).width() * 0.40, 0);
    }
}
$(window).resize(function () {
    var curWidth = $(window).width(),
        curHeight = $(window).height(),
        checking = false;
    if (checking) {
        return;
    }
    checking = true;
    window.setTimeout(function () {
        var newWidth = $(window).width(),
            newHeight = $(window).height();
        if (newWidth === curWidth &&
            newHeight === curHeight) {
            resize();
        }
        checking = false;
    }, resizeDelay);
});
resize();
