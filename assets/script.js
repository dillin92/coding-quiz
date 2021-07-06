var body = document.querySelector('body');

var scoresContainer = document.querySelector('high-scores-container');
var questions= [
    {
            question: "When referencing a style sheet on your HTML page which attribute do you use?",
            answers: {
            a: "alt=",
            b: "href=",
            c: "url()",
            d: "style=",
        },
            correctAnswer: "b"
    },


    {
            question: "What does CRUD mean?",
            answers: {
            a: "Control Return Update Delete",
            b: "Create Replace Update Delete",
            c: "Control Read Update Delete",
            d: "Create Retrieve Update Delete",
        },
            correctAnswer: "d"
    },

    {
        question: "What is an example of a semantic element?",
        answers: {
        a: "<div>",
        b: "</div>",
        c: "<!---->",
        d: "<main></main>",
    },
        correctAnswer: "d"
    },

    {
        question: "How do you connect a style sheet to your html page?",
        answers: {
        a: "a link element with an href attribute",
        b: "a div element with a link element",
        c: "include your CSS url in the main element",
        d: "style=",
    },
        correctAnswer: "a"
    },

    {
        question: "What is the command to create a new branch in your Github repository?",
        answers: {
        a: "git branch new",
        b: "git commit new branch",
        c: "git checkout -n new-branch",
        d: "git checkout -b new-branch",
    },
        correctAnswer: "d"
    },

    {
        question: "How do you access a third-party API using Javascript?",
        answers: {
        a: "By putting the url to the API in a link element",
        b: "return API method",
        c: "a fetch request",
        d: "an api request",
    },
        correctAnswer: "c"
    }, 
    
    {
        question: "Which is a proper example of a link to a style sheet?",
        answers: {
        a: "<link rel='stylesheet' href='style.css>'",
        b: "<section url='style.css'></section>",
        c: "<link url='style.css' rel='stylesheet'>",
        d: "url() = style.css",
    },
        correctAnswer: "a"
    }, 
    
    {
        question: "What does DOM mean?",
        answers: {
        a: "Domain Object Model",
        b: "Document Object Manual",
        c: "Document Object Model",
        d: "Declared Object Model",
    },
        correctAnswer: "c"
    }, {
        question: "What does CSS stand for?",
        answers: {
        a: "Control Style Sheets",
        b: "Cascading Style Sheets",
        c: "Computer Style Sheets",
        d: "none of the above",
    },
        correctAnswer: "b"
    }, {
        question: "What method do you use to initiate another function with the click of a button element?",
        answers: {
        a: "button.submit()",
        b: "button.initiate(*call function here*)",
        c: "button () => ('click', *call function here*)",
        d: "button.addEventListner('click', *call function here*)",
    },
        correctAnswer: "d"
    },


]; 
var currentQuestion = questions[0];
var scores = [];
var id = 1;
var highScoresArr = [];




// Create Lobby Page
function displayLobby () {
 


    //lobby page 
    var lobbyCard = document.createElement('section');
    lobbyCard.setAttribute("id", "lobby-card");
    var h1El = document.createElement('h1');
    h1El.setAttribute('id', 'lobby');    
    h1El.textContent = "Coding Quiz";
    var pEl = document.createElement('p');
    pEl.textContent = "This is a 10 question coding quiz. You have 60 seconds to complete the quiz. You will recieve points based off of the amount of correct answers that you provide. Press Start to begin!";
    h1El.appendChild(pEl);
    lobbyCard.appendChild(h1El);
    


    //start button
    var startBtn = document.createElement("button");
    startBtn.textContent = "Start";
    startBtn.setAttribute('id', 'start')
    startBtn.addEventListener('click', startQuiz);
    lobbyCard.appendChild(startBtn);

    
    body.appendChild(lobbyCard);

};

function startTimer() {

        // timer variables
    var totalTime = 60;
    var currentTime = totalTime;
    var firstTap = true;
    var timerDisplay = document.getElementById("seconds");
    timerDisplay.setAttribute('style', 'display: flex; flex-direction: row; flex:auto; color: red;');

    if (firstTap == true){
        firstTap = false
        timer = setInterval(function(){
            currentTime--
            document.getElementById("seconds").innerHTML = ( " Time: " + currentTime);
            if (currentTime < 0){
                currentTime = totalTime
                document.getElementById("seconds").innerHTML = (" Time: " + currentTime);
                clearInterval(timer);
                alert("Time is up");
                endQuiz();
                firstTap = true
            }
        }, 1000)
    }
};

function clearLobby() {
    let lobbyCard = document.querySelector('#lobby-card');
   

    lobbyCard.innerHTML = "";
};

function startQuiz () {

    clearLobby();
    displayQuestions();
 
    startTimer();


};

function displayQuestions () {
    //questions variables
    let questionsObj = currentQuestion;

    let question = questionsObj.question;
    console.log(question);
    let answers = questionsObj.answers;
    console.log(answers);
    let answerA = questionsObj.answers.a;
    let answerB = questionsObj.answers.b;
    let answerC = questionsObj.answers.c;
    let answerD = questionsObj.answers.d;
    let correctAnswer = questionsObj.correctAnswer;


    console.log(answerA, answerB, answerC, answerD, correctAnswer);


            
    //create questions display
    var questionDisplay = document.createElement('section');
    questionDisplay.setAttribute('class', 'question-display');

    var questionEl =document.createElement('h1');
    questionEl.setAttribute('class', 'question');
    questionEl.innerText = "Question #" + id + ":" + question;
    questionDisplay.appendChild(questionEl);

    var answerAEl = document.createElement('button');
    answerAEl.setAttribute('class', 'answers');
    answerAEl.textContent = answerA;
    questionDisplay.appendChild(answerAEl);
    answerAEl.addEventListener('click',  function checkAnswer() {

            if(correctAnswer === 'a'){
                answerAEl.setAttribute('class', 'correct-answer');
                scores.push(20);
                console.log(scores);
        
            } else {
                answerAEl.setAttribute('class', 'wrong-answer');
                scores.push(-20);
                console.log(scores);
            }

          


    });

    var answerBEl = document.createElement('button');
    answerBEl.setAttribute('class', 'answers');
    answerBEl.textContent = answerB;
    questionDisplay.appendChild(answerBEl);
    answerBEl.addEventListener('click', function checkAnswer() {
        if(correctAnswer === 'b'){
            answerBEl.setAttribute('class', 'correct-answer');
            scores.push(20);
            console.log(scores);
        } else {
            answerBEl.setAttribute('class', 'wrong-answer');
            scores.push(-20);
            console.log(scores);
        }

    })

    var answerCEl = document.createElement('button');
    answerCEl.setAttribute('class', 'answers');
    answerCEl.textContent = answerC;
    questionDisplay.appendChild(answerCEl);
    answerCEl.addEventListener('click', function checkAnswer() {
        if(correctAnswer === 'c'){
            answerCEl.setAttribute('class', 'correct-answer');
            scores.push(20);
            console.log(scores);
        } else {
            answerCEl.setAttribute('class', 'wrong-answer');
            scores.push(-20);
            console.log(scores);;
        }
    })
    

    var answerDEl = document.createElement('button');
    answerDEl.setAttribute('class', 'answers');
    answerDEl.textContent = answerD;
    questionDisplay.appendChild(answerDEl);
    answerDEl.addEventListener('click', function checkAnswer() {
        if(correctAnswer === 'd'){
            answerDEl.setAttribute('class', 'correct-answer');
            scores.push(20);
                console.log(scores);
        } else {
            answerDEl.setAttribute('class', 'wrong-answer');
            scores.push(-20);
            console.log(scores);
        }

    })

    var submitEl = document.createElement('button');
    submitEl.setAttribute('class', 'submit-button');
    submitEl.textContent = "SUBMIT";
    questionDisplay.appendChild(submitEl);
    submitEl.addEventListener('click', function submit() {   
      
        questionDisplay.innerHTML = "";
    
        showNextQuestion();
 })

   
    body.appendChild(questionDisplay);
};


function showNextQuestion () {

    console.log(scores);
    id++

    if(id === 1){
        currentQuestion = questions[0];
    }
    
    if(id === 2){
        currentQuestion = questions[1];
    }
    if(id === 3){
        currentQuestion = questions[2];
     
    }
    if(id === 4){
        currentQuestion = questions[3];
    }
    if(id === 5){
        currentQuestion = questions[4];
    }
    if(id === 6){
        currentQuestion = questions[5];
    }
    if(id === 7){
        currentQuestion = questions[6];
    } if(id === 8) {
        currentQuestion = questions[7];
    } if(id === 9){
        currentQuestion = questions[8];
    } if(id === 10){
        currentQuestion = questions[9];
    } if(id === 11){
        currentQuestion = "";
        endQuiz();
    }

    let questionsObj = currentQuestion;

    let question = questionsObj.question;
    console.log(question);
    let answers = questionsObj.answers;
    console.log(answers);
    let answerA = questionsObj.answers.a;
    let answerB = questionsObj.answers.b;
    let answerC = questionsObj.answers.c;
    let answerD = questionsObj.answers.d;
    let correctAnswer = questionsObj.correctAnswer;


    console.log(answerA, answerB, answerC, answerD, correctAnswer);


            
    //create questions display
    var questionDisplay = document.createElement('section');
    questionDisplay.setAttribute('class','question-display');

    var questionEl =document.createElement('h1');
    questionEl.setAttribute('class', 'question');
    questionEl.innerText = "Question #" + id + ":" + question;
    questionDisplay.appendChild(questionEl);

    var answerAEl = document.createElement('button');
    answerAEl.setAttribute('class', 'answers');
    answerAEl.textContent = answerA;
    questionDisplay.appendChild(answerAEl);
    answerAEl.addEventListener('click',  function checkAnswer() {

            if(correctAnswer === 'a'){
                answerAEl.setAttribute('class', 'correct-answer');
                scores.push(20);
                console.log(scores);
        
            } else {
                answerAEl.setAttribute('class', 'wrong-answer');
                scores.push(-20);
                console.log(scores);
            }

           
          


    });

    var answerBEl = document.createElement('button');
    answerBEl.setAttribute('class', 'answers');
    answerBEl.textContent = answerB;
    questionDisplay.appendChild(answerBEl);
    answerBEl.addEventListener('click', function checkAnswer() {
        if(correctAnswer === 'b'){
            answerBEl.setAttribute('class', 'correct-answer');
            scores.push(20);
            console.log(scores);
        } else {
            answerBEl.setAttribute('class', 'wrong-answer');
            scores.push(-20);
            console.log(scores);
        }

    })

    var answerCEl = document.createElement('button');
    answerCEl.setAttribute('class', 'answers');
    answerCEl.textContent = answerC;
    questionDisplay.appendChild(answerCEl);
    answerCEl.addEventListener('click', function checkAnswer() {
        if(correctAnswer === 'c'){
            answerCEl.setAttribute('class', 'correct-answer');
            scores.push(20);
            console.log(scores);
        } else {
            answerCEl.setAttribute('class', 'wrong-answer');
            scores.push(-20);
            console.log(scores);
        }
    })
    

    var answerDEl = document.createElement('button');
    answerDEl.setAttribute('class', 'answers');
    answerDEl.textContent = answerD;
    questionDisplay.appendChild(answerDEl);
    answerDEl.addEventListener('click', function checkAnswer() {
        if(correctAnswer === 'd'){
            answerDEl.setAttribute('class', 'correct-answer');
            scores.push(20);
            console.log(scores);
        } else {
            answerDEl.setAttribute('class', 'wrong-answer');
            scores.push(-20);
            console.log(scores);
        }

    })

    var submitEl = document.createElement('button');
    submitEl.setAttribute('class', 'submit-button');
    submitEl.textContent = "SUBMIT";
    questionDisplay.appendChild(submitEl);
    submitEl.addEventListener('click', function submit() {

       questionDisplay.innerHTML = "";
        showNextQuestion();
    });



    body.appendChild(questionDisplay);

};

function add() {
    return scores.reduce((a,b) => a + b, 0);
};

function endQuiz () {
        body.innerHTML = "";

        highScorePage();
}

function highScorePage () {

    let highScore = add(scores);
    console.log(highScore)

    //high score page
    var hsCard = document.createElement('section');
    hsCard.setAttribute("id", "hs-card");
    var h1El = document.createElement('h1');
    h1El.setAttribute('id', 'hs');    
    h1El.textContent = "The quiz is over!!!";
    var pEl = document.createElement('p');
    pEl.textContent = "Your score is " + highScore + "! Enter your initials to save your score!";
    h1El.appendChild(pEl);
    hsCard.appendChild(h1El);

    var initInput = document.createElement('input');
    initInput.setAttribute('type', 'text');
    initInput.setAttribute('placeholder', 'Enter Your Initials Here');
    initInput.setAttribute('id', 'initials');

    hsCard.appendChild(initInput);



    //start button
    var submitBtn = document.createElement("button");
    submitBtn.textContent = "Submit";
    submitBtn.setAttribute('id', 'submit')
    submitBtn.addEventListener('click', function saveHighScore () {


        let highScore = add(scores);
        console.log(highScore);
        let initInputData = document.querySelector('#initials');
        let userInitials = initInputData.value.trim();
        
    
        let highScoreObj = {
    
            initials: userInitials,
            highScore: highScore
    
        };
    
        highScoresArr.push(highScoreObj);
        localStorage.setItem('high-scores', JSON.stringify(highScoresArr));
        alert("Your high score has been saved!");
        body.innerHTML= "";
        

    });

    submitBtn.addEventListener('click', function displayHighScores () {
       
        var hsTitleEl = document.createElement("h1");
        hsTitleEl.setAttribute('id', 'hstitle');
        hsTitleEl.innerText = "HIGH SCORES";
        body.appendChild(hsTitleEl);

        for(let i = 0; i < highScoresArr.length; i++) {
    
        var savedHs = localStorage.getItem('high-scores');
        console.log(savedHs);
        var savedHsJson = JSON.parse(savedHs);
        console.log(savedHsJson);
        var scoreObj = savedHsJson[i];
        var initials = scoreObj.initials;
        var score = scoreObj.highScore;
        console.log(initials, score);
    
        var highScoreEl = document.createElement('div');
        highScoreEl.setAttribute('id', 'high-score');
    
        var initialsEl = document.createElement('h1');
        initialsEl.textContent = initials;
        highScoreEl.appendChild(initialsEl);
    
        var scoreEl = document.createElement('h2');
        scoreEl.textContent = score;
        highScoreEl.appendChild(scoreEl);
    
    
        body.appendChild(highScoreEl);
    
        };
        
    });

    hsCard.appendChild(submitBtn);

    
    body.appendChild(hsCard);
};
    



displayLobby();