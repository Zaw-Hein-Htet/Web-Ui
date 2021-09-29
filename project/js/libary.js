$(document).ready(function(){
    $('.venobox').venobox({
        framewidth : '550px',                            // default: ''
        frameheight: 'auto',                            // default: ''
        border     : 'none',                             // default: '0'
        bgcolor    : '#ffffff60',                          // default: '#fff'
        titleattr  : 'data-title',                       // default: 'title'
        numeratio  : true,                               // default: false
        infinigall : true,                               // default: false
        share      : ['facebook', 'twitter', 'download'] // default: []
    });
});

$('.count').counterUp({
    delay: 500,
    time: 2000,
});

wow = new WOW({
    boxClass:     'wow',      // default
    animateClass: 'animate__animated', // default
    offset:       0,          // default
    mobile:       true,       // default
    live:         true        // default
})
wow.init();