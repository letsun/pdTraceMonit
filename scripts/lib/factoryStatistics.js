$(function () {

    // 初始化日期
    setDateControl('#date');

    // 点击班次显示班次弹窗
    $('.table .js-area-item').on('click',function () {
        $('.shift-win').fadeIn();
    });

    // 点击关闭班次弹窗
    $('.shift-win').on('click',function () {
        $('.shift-win').fadeOut();
    })
});