//The css() method sets or returns one or more style properties for the selected elements.
$(document).ready(function(){
    $("li").on('mouseenter', function() {
        $(this).css({"color": "red","font-size": "200%"});
    });
});    