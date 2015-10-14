<<<<<<< HEAD
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
=======
$(document).ready(function() {
   $('.start').click(function(){
        renderQuestion();
        //alert("Test");
       //window.addEventListener("load", renderQuestion, false);
        $(this).hide();
        $('footer').hide();
        $('#test').show();
        $('#test_status').show();
      // $('.footer').hide();
  });
});

$(document).ready(function(){
>>>>>>> gh-pages

});

var pos = 0, test, test_status, question, choice, choices, chA, chB, chC, correct = 0;

var questions = [
    ["The city of Megaton is built inside the crater of an unexploded nuclear bomb. What abundant vehicle is used in its construction?", "Tractors", "Pre-War Airplanes", "Cars",  "B"],
    ["What vault contains all the clones of Gary?","Vault 108",  "Vault 101", "Vault 112", "A"], 
    ["In Fallout 3, Project Purity is housed in what Washington, D.C. landmark?", "Jefferson Memorial", "Lincoln Memorial", "The White House", "A"],
    ["Roger Maxson, the founder of the Brotherhood of Steel, was a member of what military branch?", "Marines","Air Force", "Army", "C"],
    ["The character of Robert House was based on what real life titan of business?", "Henry Ford","Thomas Edison", "Howard Hughes", "C"], 
    ["Jane, Mr. Houses’ lady securitron was based on Jane Russell. What other sex symbol of the 1950s would have been used as Mr. Houses’ second lady securitron?", "Marilyn Monroe", "Ava Gardner", "Rita Hayworth", "A"]
  ];

function _(x){
    return document.getElementById(x);
}

<<<<<<< HEAD
var q1 = {
      a: "Tractors";
      b: "Cars";
      c: "Pre-War Airplanes";
      d: "Vertibirds";
}

=======
function renderQuestion(){
    test = _("test");
    if(pos >= questions.length){
        test.innerHTML = "<h2>You got " + correct + " of "+questions.length+" questions correct</h2>";
        _("test_status").innerHTML = "Test Completed";
        pos = 0;
        correct = 0;
        return false;
    }
    _("test_status").innerHTML = "Question "+(pos+1)+" of "+questions.length;
    question = questions[pos][0];
    chA = questions[pos][1];
    chB = questions[pos][2];
    chC = questions[pos][3];
    test.innerHTML = "<h3>"+question+"</h3>";
    test.innerHTML += "<input type='radio' name='choices' class='anws' value='A'> "+chA+"<br>";
    test.innerHTML += "<input type='radio' name='choices' class='anws' value='B'> "+chB+"<br>";
    test.innerHTML += "<input type='radio' name='choices' class='anws' value='C'> "+chC+"<br><br>";
    test.innerHTML += "<button onclick='checkAnswer()'>Submit Answer</button>";
}
>>>>>>> gh-pages

function checkAnswer(){
    choices = document.getElementsByName("choices");
    for(var i=0; i<choices.length; i++){
        if(choices[i].checked){
            choice = choices[i].value;
        }
    }
    if(choice == questions[pos][4]){
        correct++;
    }
<<<<<<< HEAD
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
=======
    pos++;
    renderQuestion();
}
>>>>>>> gh-pages
