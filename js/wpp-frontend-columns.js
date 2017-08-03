var $j = jQuery.noConflict();
$j(window).load(function() {
    $j('.wpp_columns-fill .portfolio-website-container>div:not(.website-thumbnail)').hide();
    $j('.wpp_columns-fill').each(function () {
        $j(this).width($j(this).width());
    });
    $j('.wpp_columns-fill .portfolio-website-container>div:not(.website-thumbnail)').show();
});