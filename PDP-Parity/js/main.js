$('.v1').show();
$('.couponCode').show();
$('.trigger').change(function () {
    $('.content').hide();
    $('.' + $(this).data('rel')).show();
});
$('.dateTrigger').change(function () {
    $('.dateSwitch').hide();
    $('.' + $(this).data('rel')).show();
});
$('.couponTrigger').change(function () {
    $('.couponSwitch').hide();
    $('.' + $(this).data('rel')).show();
});
$(".couponCode").hide();
$(".coupon_question").click(function () {
    if ($(this).is(":checked")) {
        $(".couponCode").show();
    }
    else {
        $(".couponCode").hide();
    }
});
$(".planned").hide();
$(".planned_question").click(function () {
    if ($(this).is(":checked")) {
        $(".planned").show();
    }
    else {
        $(".planned").hide();
    }
});