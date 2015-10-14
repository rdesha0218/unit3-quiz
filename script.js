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
    pos++;
    renderQuestion();
}