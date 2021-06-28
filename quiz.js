
var questions = $('.question').length; 
var total = 0; //store the sum of the answers the user selected
var avg = 0; //store the avg of the answers the user selected

$('.answer').on('click', function(){
    $(this).addClass('selected');
    total += $(this).data('value');

    console.log(total);
 


})


