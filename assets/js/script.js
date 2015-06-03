jQuery(document).ready(function($) {
    console.info($('.timeline-members img'));
    $('.timeline-members img').tooltip({
        placement: 'bottom',
        trigger: 'hover'
    });
});