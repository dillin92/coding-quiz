var questionsArr = [
    {
        q: "When referencing a style sheet on your HTML page which attribute do you use?",

        a: {
            a: "alt=",
            b: "href=",
            c: "url()",
            d: "style="
        },
    }
];

// When you click start the the first question is presented

//Question #1

var generateQuiz= function generateQuiz(questions, quizContainer, resultsContainer) {

    function showQuestions(questions, quizContainer){
        var output = [];
        var answers;

        // for each question...
        for(var i=0; i<questions.length; i++){
            answers = [];
            // for each available answer to this question...
            for(letter in questions[i].answers) {
                answers.push(
                    <label>
                        + '<input type='button' name="question' + i +'"value=" + 'letter'" >'
                        + letter + ': '
                        + questions[i].answers[letter]
                        +'</label>'
                    );

    function showResults(questions,quizContainer, resultsContainer){
        //code
    }

    // show the questions
    showQuestions(questions, quizContainer);

    // when the user clicks submit show results

    submitButton.onclick = function() {
        showResults(questions, quizContainer, resultsContainer);
    }

}