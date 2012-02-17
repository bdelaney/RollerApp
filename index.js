//global variables
var hTotal = 0,
    rTotal = 0,
    allRolls=[];

// $('#slider-0').bind( "keypress", function(e){    //nothing seemed to work to add events to the slider
$(document).keypress(function(e) {
    if(e.which == 13  ) {rollDice()};
})

$('#clearButton').click(function () {
    clear();
    $('select').val('off').slider('refresh');
})

function clear() {
    $('input').val('');
    $('#slider-0').val($('#slider-0').attr('min')).slider('enable');
    hTotal = 0;
    rTotal = 0;
    allRolls.length = 0;
}

$('#rollButton').click(function(){
    rollDice();
})



$('#flip6').bind( "change", function () {
    if($('#flip6').val()=='on')
        $('#flipX').val('off').slider('refresh');
    clear();
})

$('#flipX').bind( "change", function () {
    if($('#flipX').val()=='on')
        $('#flip6').val('off').slider('refresh');
    clear();
})