
var questions = $('.question').length; 
var total = 0; //store the sum of the answers the user selected
var avg = 0; //store the avg of the answers the user selected
var myQuestions = $('section.q-n-a');

shuffle(myQuestions);
console.log(myQuestions);

function shuffle(array){

    for(let i = array.length-1; i >0; i--){
        let j = Math.floor( Math.random() * (i+1))
        [array[i], array[j]] = [array[j], array[i]];
    }
}


$('.answer').on('click', function(){
    if($(this).parent().find('.selected').length > 0) {
        total -= $(this).parent().find('.selected').data('value');
        $(this).parent().find('.selected').removeClass('selected');
    }


    $(this).addClass('selected');
    total += $(this).data('value');

    console.log(total);


})

$('finish').on('click', function(){
    avg = total / questions;
    var message = ' ';
    
    if($('selected').length === questions){
        //an answer for every question
     if(avg < 1.5){
        message = 'You are a 1 type';
    } else if(avg < 2.5){
        message = 'You are a 2 type';
    } else if(avg < 3.5){
        message = 'You are a 3 type';
    }else {
        message = 'You are a 4 type';
    }

} else{
    message = 'You missed at least one question';
}

   
  alert(message);

})


