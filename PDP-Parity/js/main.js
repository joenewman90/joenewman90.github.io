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
$('.telTrigger').change(function () {
    $('.telSwitch').hide();
    $('.' + $(this).data('rel')).show();
});
$('.addTrigger').change(function () {
    $('.addSwitch').hide();
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
$(".urgency").hide();
$(".urgency_question").click(function () {
    if ($(this).is(":checked")) {
        $(".urgency").show();
    }
    else {
        $(".urgency").hide();
    }
});
$(".pin").hide();
$(".pin_question").click(function () {
    if ($(this).is(":checked")) {
        $(".pin").show();
    }
    else {
        $(".pin").hide();
    }
});
$(".vr").hide();
$(".vr_question").click(function () {
    if ($(this).is(":checked")) {
        $(".vr").show();
    }
    else {
        $(".vr").hide();
    }
});
$(".native_question").click(function () {
    if ($(this).is(":checked")) {
        $('body').addClass("native");
    }
    else {
        $('body').removeClass("native");
    }
});