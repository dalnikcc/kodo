import './vendor';

//get data-event-position and set value like left position
$('.event').each(function(){
    let eventPosition = $(this).attr('data-event-position')
    $(this).css('left', eventPosition + '%')
});