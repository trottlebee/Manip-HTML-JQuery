$(document).ready(function(){

    function getRandomColor() {
        let r = Math.floor((Math.random() * 255) + 1);
        let g = Math.floor((Math.random() * 255) + 1);
        let b = Math.floor((Math.random() * 255) + 1);
        return 'rgb(' + r + ', ' + g + ', ' + b +')';
    };


    $('body').append('<button id=\'greetingBtn\'>Howdy-do!</button>');


    $('#greetingBtn').click(function(){
       alert('I am Foghorn Leghorn---fly me to Holly Pond!'); 
    });


    $('#textboxBtn').click(function(){
        alert('Dom de-dom-dom!');
    });


    let $colorDiv = $('#color-swap-div');
    $colorDiv.css('min-height', '75px');


    $colorDiv.mouseenter(function() {
        $colorDiv.css('background-color', getRandomColor());
    });


    $colorDiv.mouseleave(function() {
        $colorDiv.css('background-color', '');
    });


    $('body').append('<p>jQuery saves us coders a lot of time---YAAAY!</p>');

    $('p').click(function() {
        $(this).css('color', getRandomColor());
    });


    $('body').append('<button id=\'myNameButton\'>My Name</button>');
    $('body').append('<div id=\'myNameDiv\'></div>');


    $('#myNameButton').click(function(){
        $('#myNameDiv').append('<span>Tracy</span>');
    });


    let friendArr = ['Fannie','Ben','Teresa','Alicia','LaDonna','Erica','Janie','Kelley','Vickie','Jaronda'];

    $('#friendButton').click(function(){

        friendArr.forEach(function(friendo){

            $('#friendList').append('<li>'+friendo+'</li>');

        });

    });

});