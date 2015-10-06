var score, counter;
 
$(document).ready(function() {
   $('.start').click(function(){
      count = 0;
   		$(this).hide();
   		$('.footer').hide();
   		$('.score').show();
   		$('#q1').show();
      $('.next').click(function(){
        answerCheck();
        $('#q1').hide();
        $('#q2').show();
        $('.next').click(function(){
          answerCheck ();
          $('#q2').hide();
          $('#q3').show();
          $('.next').click(function(){
            answerCheck ();
            $('#q3').hide();
            $('#q4').show();
            $('.next').click(function(){
              answerCheck();
              $('#q4').hide();
              $('#q5').show();
              $('.next').click(function(){
                answerCheck();
                $('#q5').hide();
                $('#q6').show();
                $('.next').click(function(){
                  $('#q6').hide();
                  $('.score').hide();
                  $('.result').show();
                  $('.result').append('You got a ' + score + '% on this quiz! Thanks for playing.');
                });
              });
            });
          });
        });
      });
   		//$('#q1').hide();

   });
 });

function scoreCount () {
  counter++;
   score = (counter / 6) * 100;
   $('.score').text(score);
   //return score;
}


function answerCheck () {
    if ($('input[value="pre-war airplanes"]').val() ||
        $('input[value="vault 108"]').val() ||
        $('input[value="jefferson memorial"]').val() ||
        $('input[value="Army"]').val() ||
        $('input[value="Howard Hughes"]').val() ||
        $('input[value="Marilyn Monroe"]').val()) {
      scoreCount();
    //console.log(score);
    //console.log(counter);
    }
    else {
      counter = counter + 0;
      score = (counter / 6) * 100;
   $('.score').text(score);
    }
}
function test() {
  console.log(score);
  console.log(counter);
}