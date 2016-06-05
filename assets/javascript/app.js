//TIMER//
$( document ).ready(function() {
   
    var counter = 30;    
    var results = "correctAnswer";   
    
      $("#startButton").on("click", function() {
          var self = this;
          $(this).addClass('btn-success');

          var intervalId = setInterval(function() {              
              
              counter--;

              $(self).html('number of seconds remaining: ' + counter);
              
              if (counter === 0) {
                  alert("Quiz Over!");
                  $('#results').show();
                  clearInterval(intervalId);     
              }
          }, 800);    

   $('#button').on('click', function() {
              //increase the friend counter by 1
              questionsAnsweredCounter++;
              //show the friend counter to the click-count 
              $('#click-count').html(questionsAnsweredCounter);
          
              $(this).prop('disabled', true);

              var questionsAnsweredCounter = 0;
          });     
});

//QUESTIONS//

var questions = [{
    question: "What name is Chandler's TV Guide addressed to?",
    choices: ["Miss Chanandler Bong", "Chandy Binger", "Chandler Bing"],
    correctAnswer: 0
}, {
    question: "What soap opera does Joey act in?",
    choices: ["General Hospital", "Days of Our Lives", "All My Children"],
    correctAnswer: 1
}, {
    question: "What does Phoebe legally change her name to?",
    choices: ["Crapbag", "Princess Consuela Banana ", "Nestle Tollhouse"],
    correctAnswer: 1
}, {
    question: "How many years apart are Monica and Richard?",
    choices: ["5", "18","21"],
    correctAnswer: 2
}, {
    question: "Which cast member did Ross talk to on the phone when he couldn't get his leather pants back on?",
    choices: ["Chandler", "Joey", "Monica"],
    correctAnswer: 1
}, {
    question: "Why did Joey carry a murse (a man purse)?",
    choices: ["To impress a girl", "To land an acting gig", "To annoy Chandler"],
    correctAnswer: 1
}];

var wrongAnswers = 0;
var correctAnswers = 0;
var quizOver = true;

//RESULTS//

$(document).ready(function () {

value = $('#button').on('click', function() {
if (value == questions.correctAnswer) {
            correctAnswers++;
                
  //else (value == questions.wrongAnswers) {
            wrongAnswers++;
 // }
      
// if {
            quizOver = true;
            showResults();
        }
    });
});

function resetQuiz() {
    currentQuestion = 0;
    correctAnswers = 0;
    show();
}

function showResults() {
    $(document).find("#result").show();

}








});