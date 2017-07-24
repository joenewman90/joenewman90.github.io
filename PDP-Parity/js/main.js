$('.v1').show();
$('.trigger').click(function () {
    $('.content').hide();
    $('.' + $(this).data('rel')).show();
});
$('.dateTrigger').click(function () {
    $('.dateSwitch').hide();
    $('.' + $(this).data('rel')).show();
});