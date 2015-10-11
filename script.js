/*

var correctAnswers = 0;
var question, response, counter;

var quiz = {
      question:["The city of Megaton is built inside the crater of an unexploded nuclear bomb. What abundant vehicle is used in its construction?",
      choices: ["Tractors", "Cars", "Pre-War Airplanes", "Vertibirds"]
    }

  {
      question: "What vault contains all the clones of Gary?", 
      choices: ["Vault 101", "Vault 108", "Vault 112", "Vault 13"]
    },
  {
      question: "In Fallout 3, Project Purity is housed in what Washington, D.C. landmark?",
      choices: ["Jefferson Memorial", "Lincoln Memorial", "The White House", "The Smithsonian Building" ]
    },
  {
      question: "Roger Maxson, the founder of the Brotherhood of Steel, was a member of what military branch?", 
      choices: ["Marines", "Navy", "Air Force", "Army"]
    },
  {
      question: "The character of Robert House was based on what real life titan of business?",
      choices: ["Henry Ford","Andrew Carnegie","Thomas Edison", "Howard Hughes"]
    },
  {
      questions: "Jane, Mr. Houses’ lady securitron was based on Jane Russell. What other sex symbol of the 1950s would have been used as Mr. Houses’ second lady securitron?", 
      choices: ["Marilyn Monroe", "Ava Gardner", "Rita Hayworth", " Lauren Bacall"]
    }
  ]
*/

/*
$(document).ready(function(){
  $('.start').click(function(){
    $(this).hide();
    $('.footer').hide();
    $('.quiz').show(function(){
      quizDisplay();
    });


 
function quizDisplay() {
  for (var i = 0; i < 6; i++) {
    //print question to screen
    $('questionTitle').text('<p>' + quiz.question[i] + '<input type="radio" name="" value=""></p>');
    //print answer one [0]
      for (k = 0; k < 4; k++) {
    $(.num[k]).text('<p>' + quiz.question.choices[k] + '<input type="radio" name="" value=""></p>');
  }
    response = $('$(.num[k]).text('<p>' + quiz.question.choices[k] + '<input type="radio" name="" value=""></p>');').val();
    return response;
  }

}
function responseCheck() {
  //if loop for answers
if (response = quiz.question[0].choices[2] ||
    response = quiz.question[1].choices[1] ||
    )
  //save score if correct

  //else 
  //no point next qyestions
}

*/



/*

$(function() {
   $('.start').click(function(){
      count = 0;
      $(this).hide();
      $('.footer').hide();
      //$('.score').show();
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
   });
 });

function scoreCount () {
  counter++;
   score = (counter / 6) * 100;
   $('.score').text(score);
   //return score;
}

var q1 = {
      a: "Tractors";
      b: "Cars";
      c: "Pre-War Airplanes";
      d: "Vertibirds";
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
*/


/*
function questionDisplay() {
  for (var i = 0; i < questions.length; i++) { 
      $('.question').text('<h1>' + questions[i] + '</h1>');
      $('.num1').text('<p>1. ' + questions[i].choice[0] + '</p>');
      $('.num2').text('<p>2. ' + questions[i].choice[1] + '</p>');
      $('.num3').text('<p>3. ' + questions[i].choice[2] + '</p>');
      $('.num4').text('<p>4. ' + questions[i].choice[3] + '</p>');
      answer = $('input')
      counter = 0;
      counter = counter++;

  }
}
function questionCheck() {
  if (answer == $(questions[0].choices[2]).val() ||
      answer == $(questions[1].choices[1]).val() ||
      answer == $(questions[2].choices[]).val() ||

      )
}
*/