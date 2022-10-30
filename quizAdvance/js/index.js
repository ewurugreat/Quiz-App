
(function () {
    var counter = document.getElementById("counter"),
        answered = document.getElementById("answered"),
        answeredLimit = document.getElementById("answeredLimit"),
        get_num = document.getElementById("get_num"),
        fail_num = document.getElementById("fail_num"),
        dumm_img = document.querySelector(".dumm_img"),
        header = document.querySelector("header"),
        design = document.querySelector(".design"),
        scoretTIme_container = document.querySelector(".scoretTIme_container"),
        total = document.querySelector(".total"),
        start = document.querySelector(".start"),
        mainanswer = document.querySelector(".mainanswer"),
        back = document.querySelector(".back"),
        sliderContainer = document.querySelector(".sliderContainer"),
        mainhow = document.querySelectorAll(".mainhow");

    var QuestionGroupCounting = - 1,
        timer = 5,
        answeredNo = 1,
        correct = 0,
        incorrect = 0;


    var question_group, QuestionContainerIndex, question, questionRandom, qusetion_container, check, getResult;

    counter.innerText = timer;
    answered.innerText = answeredNo;
    get_num.innerText = correct;
    fail_num.innerText = incorrect;
    myQuestionCon();

    function myCounter() {
        timer--;
        counter.innerText = timer
        if (timer === 0) {
            timer = 5
            answeredNo++;
            answered.innerText = answeredNo;
            myQuestion()
        }

        if (QuestionGroupCounting !== question_group.length - 1) {
            setTimeout(myCounter, 1000)
        }

    }


    function myQuestionCon() {
        qusetion_container = document.querySelectorAll(".qusetion_container")
        var questionContainerRandom = Math.floor(Math.random() * qusetion_container.length);
        QuestionContainerIndex = questionContainerRandom;
        for (var i = 0; i < qusetion_container.length; i++) {
            qusetion_container[i].classList.remove("showing")
        }
        qusetion_container[QuestionContainerIndex].classList.add("showing");
        myQuestion();
    }


    function myQuestion() {
        QuestionGroupCounting++;
        question_group = qusetion_container[QuestionContainerIndex].querySelectorAll(".question_group");
        question = question_group[QuestionGroupCounting].querySelectorAll(".question");
        questionRandom = Math.floor(Math.random() * question.length)

        for (var i = 0; i < question.length; i++) {
            question[i].classList.remove("show")
        }
        for (var i = 0; i < question_group.length; i++) {
            question_group[i].classList.remove("showing")
        }
        question[questionRandom].classList.add("show")
        question_group[QuestionGroupCounting].classList.add("showing");

        answeredLimit.innerText = question_group.length - 1;
        var options = document.querySelectorAll(".main");
        options.forEach(function (opt) {
            opt.addEventListener("click", myOption)
        })

        dumm_img.classList.remove("hey")
        if (QuestionGroupCounting == question_group.length - 1) {
            dumm_img.remove();
            header.remove();
            design.remove();
            scoretTIme_container.remove();

        }
        qusetion_container[QuestionContainerIndex].querySelectorAll(".question_group")[question_group.length - 1].querySelector(".question").children[1].children[1].querySelector(".finalFail").innerText = incorrect;
        qusetion_container[QuestionContainerIndex].querySelectorAll(".question_group")[question_group.length - 1].querySelector(".question").children[1].children[1].querySelector(".finalCorrect").innerText = correct;
        qusetion_container[QuestionContainerIndex].querySelectorAll(".question_group")[question_group.length - 1].querySelector(".question").children[1].children[1].querySelector(".total").innerText = correct;
        qusetion_container[QuestionContainerIndex].querySelectorAll(".question_group")[question_group.length - 1].querySelector(".question").querySelector(".button_con").addEventListener("click", myReview);
        check = qusetion_container[QuestionContainerIndex].querySelectorAll(".q")
        getResult = document.querySelectorAll(".question.show");


    }

    function myReview() {
        var slideIndex = 0;
        mainanswer.style.display = "block";
        qusetion_container[QuestionContainerIndex].style.display = "none";
        var leftArrow = document.querySelector(".arro_container .leftArrow"),
            rightArrow = document.querySelector(".arro_container .rightArrow"),
            of = document.querySelector(".chekNum > *:first-child");

        leftArrow.onclick = function () { myArrow(-1) }
        rightArrow.onclick = function () { myArrow(1) }
        if (QuestionGroupCounting >= check.length) {
            for (var i = 0; i < getResult.length - 1; i++) {
                sliderContainer.innerHTML += getResult[i].innerHTML
            }
            function myArrow(n) {
                myFunction(slideIndex += n)
            }

            function myFunction() {
                var sliderContainerHeading = sliderContainer.querySelectorAll(".qusetion_heading");

                if (slideIndex > sliderContainerHeading.length - 1) {
                    slideIndex = sliderContainerHeading.length - 1;

                    rightArrow.setAttribute("style", "opacity: 0.5; cursor: no-drop; pointer-events:none")
                } else {
                    rightArrow.setAttribute("style", "opacity: 1; ")
                }
                if (slideIndex < 1) {
                    slideIndex = 0;
                    leftArrow.setAttribute("style", "opacity: 0.5; cursor: no-drop;")
                } else {
                    leftArrow.setAttribute("style", "opacity: 1; ")
                }
                for (var i = 0; i < sliderContainerHeading.length; i++) {
                    sliderContainerHeading[i].style.display = "none";
                }
                sliderContainerHeading[slideIndex].style.display = "block";
                console.log(sliderContainerHeading[slideIndex])
                of.innerText = slideIndex + 1;
                console.log(slideIndex)

            }

            myFunction()

            var lastCorrect = sliderContainer.querySelectorAll(".right");
            for (var i = 0; i < lastCorrect.length; i++) {
                lastCorrect[i].style.background = "green"
            }
            console.log(document.querySelectorAll(".question .show"))

        }

    }
    function myOption(e) {
        e.target.parentElement.parentElement.parentElement.parentElement.parentElement.classList.add("hey")
        if (e.target.matches("input")) {
            if (QuestionGroupCounting !== question_group.length + 1) {
                timer = 5;
                correct++;
                get_num.innerText = correct;
                e.target.nextElementSibling.classList.add("hello")
                setTimeout(function () {
                    answeredNo++;
                    answered.innerText = answeredNo;
                    e.target.nextElementSibling.classList.add("correcting")
                    myQuestion()
                }, 500)

            }
        }

        if (e.target.classList.contains("fail")) {
            e.target.classList.add("incorrect");
            e.target.style.background = "pink"
            var my = question[questionRandom].querySelector(".right");
            my.classList.add("hello")

            if (QuestionGroupCounting !== question_group.length + 1) {
                timer = 5;
                incorrect++;
                fail_num.innerText = incorrect;
                setTimeout(function () {
                    answeredNo++;
                    answered.innerText = answeredNo;
                    my.classList.add("correcting");
                    e.target.classList.add("failling")
                    myQuestion()
                }, 400)
            }
        }
    }
    dumm_img.addEventListener("click", myHelp);
    function myHelp() {
        var randomOption = question_group[QuestionGroupCounting].querySelectorAll(".question")[questionRandom].querySelectorAll(".randomOption");
        var random = Math.floor(Math.random() * randomOption.length)
        for (var i = 0; i < randomOption.length; i++) {
            randomOption[i].style.display = "none"
        }
        randomOption[random].style.display = "block";
        dumm_img.classList.add("hey")
    }

    start.addEventListener("click", NewGame)
    function NewGame() {
        location.reload()
    }
    back.addEventListener("click", function () {
        qusetion_container[QuestionContainerIndex].style.display = "block";
        mainanswer.style.display = "none";
    })

    myCounter()
}())
