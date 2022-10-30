var answered = document.querySelector("#answered"),
    get_num = document.querySelector("#get_num"),
    fail_num = document.querySelector("#fail_num"),
    counter = document.querySelector("#counter"),
    question = document.querySelectorAll(".question"),
    main = document.querySelectorAll(".main"),
    header = document.querySelector("header"),
    scoretTIme_container = document.querySelector(".scoretTIme_container"),
    design = document.querySelector(".design"),
    finalCorrect = document.querySelector(".finalCorrect"),
    sliderContainer = document.querySelector(".sliderContainer"),
    dumm_img = document.querySelector(".dumm_img"),
    finalFail = document.querySelector(".finalFail"),
    q = document.querySelectorAll(".q"),
    leftArrow = document.querySelector(".leftArrow"),
    rightArrow = document.querySelector(".rightArrow"),
    of = document.getElementById("of"),
    total = document.querySelector(".total"),
    back = document.querySelector(".back"),
    start = document.querySelector(".start")
    questionIndex = 0,
    numCount = 1,
    counting = 20,
    incorrect = 0,
    fifty = 0,
    correct = 0,
    textDiv = [],
    correctCounter = 1;
startCounting = '';

get_num.innerText = correct;

fail_num.innerText = incorrect;
function myCounter() {
    counting--;
    answered.innerText = numCount;
    if (counting < 1) {
        numCount++;
        counting = 20;
        myQuestion()
    }

    answered.innerText = numCount;

    counter.innerText = counting;
    if (numCount !== question.length - 1) {

        startCounting = setTimeout(myCounter, 1000);

    }
}

function myQuestion() {
    questionIndex++;
    for (var i = 0; i < question.length; i++) {
        question[i].style.display = "";
        question[i].classList.remove("show")
    }


    if (questionIndex !== q.length + 1) {
        while (sliderContainer.firstChild) {
            sliderContainer.firstChild.remove()
        }

        textDiv.push(question[questionIndex - 1].innerHTML)
   
    }
    question[questionIndex].classList.add("show");
    total.innerText = correct;

    sliderContainer.innerHTML = `
    ${textDiv.join(" ")}
    `
sliderContainer.classList.add("lastCheck")

    var correctCon = Array.from(sliderContainer.querySelectorAll(".qusetion_heading"));


    if (questionIndex > q.length) {

        rightArrow.onclick = function () { myRight(1) }
        leftArrow.onclick = function () { myRight(-1) }

        myHelping()
        function myRight(n) {
            myHelping(correctCounter += n)
        }

        function myHelping() {
            for (var i = 0; i < correctCon.length; i++) {
                correctCon[i].style.display = "none";
            }

            if (correctCounter < 1) {
                correctCounter = 1;
                leftArrow.setAttribute("style", "cursor:no-drop;opacity: 0.5")
            } else {
                leftArrow.setAttribute("style", "cursor:pointer;opacity: 1")
            }
            if (correctCounter > correctCon.length) {
                correctCounter = correctCon.length;
                rightArrow.setAttribute("style", "cursor:no-drop;opacity: 0.5")
            } else {
                rightArrow.setAttribute("style", "cursor:pointer;opacity: 1")

            }
            correctCon[correctCounter - 1].style.display = "block";
            of.innerText = correctCounter;
        }

    }


    fifty = 0;
    dumm_img.classList.remove("removes")
    console.log(fifty)
    if (numCount == question.length - 1) {
        header.remove();
        scoretTIme_container.remove();
        design.remove();
        dumm_img.remove()
        // dumm
    }
}
function myOption(e) {
    if (e.target.matches("input")) {
        if (numCount !== question.length) {
            for (var i = 0; i < question.length; i++) {
                question[i].classList.remove("hey")
            }

            e.target.nextElementSibling.style.background = "green";
            question[questionIndex].classList.add("hey");
            setTimeout(function () {
                correct++;
                get_num.innerText = correct;
                numCount++;
                fifty = 0;
                dumm_img.classList.remove("removes")
                console.log(fifty)
                counting = 20;
                finalCorrect.innerText = correct;
                e.target.nextElementSibling.classList.add("correcting");


                myQuestion();
                if (numCount > question.length - 1) {
                    numCount = 10;
                    counting = 20;
                }
            }, 500)
        }
    }
    if (e.target.classList.contains("fail")) {
        e.target.style.background = "red";
        var a = document.querySelectorAll(".right");
        for (var i = 0; i < question.length; i++) {
            question[i].classList.remove("hey")
        }
        question[questionIndex].classList.add("hey");
        a[numCount - 1].classList.add("hello")

        if (numCount !== question.length) {
            setTimeout(function () {
                a[numCount - 1].classList.add("correcting")
                incorrect++;
                fail_num.innerText = incorrect;
                numCount++;
                e.target.classList.add("failling")
                // a[numCount].classList.add("correcting")
                console.log(fifty)
                dumm_img.classList.remove("removes")
                counting = 20;
                finalFail.innerText = incorrect;

                myQuestion();
                if (numCount > question.length - 1) {
                    numCount = 10
                    counting = 20;
                }
            }, 500)
        }


    }
}
for (var i = 0; i < main.length; i++) {
    main[i].addEventListener("click", myOption)
}

function myHelp() {
    var randomOptionP = question[questionIndex].querySelectorAll(".randomOption")
    var random = Math.floor(Math.random() * randomOptionP.length)
    for (var i = 0; i < randomOptionP.length; i++) {
        randomOptionP[i].style.display = "none";
    }
    randomOptionP[random].style.display = "block";
    console.log(random);

    dumm_img.classList.add("removes")
    console.log(randomOptionP)
}
dumm_img.addEventListener("click", myHelp)
function myAnswer() {
    myQuestion()
}
back.onclick = function () { myBack() }
function myBack() {
    questionIndex--;
    question[questionIndex].classList.add("show");
    document.querySelector(".how").style.display = "none";
}
function myNewGame(){
  var randomOption = g
}
start.addEventListener("click", myNewGame)
myCounter()