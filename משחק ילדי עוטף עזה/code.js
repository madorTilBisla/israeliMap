var strKiryatShmona;
var strHaifa;
var strHadera;
var strTelAviv;
var strJerus;
var strAshdod;
var strBeerSheva;
var strMizpaRamon;
var strEilat;
var strCorrectAnswer;
var kid;
var kidLeft = sessionStorage.getItem("left");
var kidTop = sessionStorage.getItem("top");
var counter = sessionStorage.getItem("counter");

window.addEventListener("load", function() {
    var vh = window.innerHeight * 0.01;
    this.document.documentElement.style.setProperty('--vh', `${vh}px`);
    if (window.location.href.includes("startGame.html")) {
        document.getElementById("startBtn").addEventListener("click", function() {
            window.location.href = "menu.html";
            counter = sessionStorage.setItem("counter", 1);
            kidLeft = sessionStorage.setItem("left", "70vw");
            kidTop = sessionStorage.setItem("top", "1vh");
            kidTop = sessionStorage.setItem("top", "calc(var(--vh, 1vh) * 1)");
            kid.style.top = kidTop;
            kid.style.left = kidLeft;
        });
    } else if (window.location.href.includes("kiryatShmona.html") ||
            window.location.href.includes("haifa.html") || 
            window.location.href.includes("hadera.html") || 
            window.location.href.includes("telaviv.html") || 
            window.location.href.includes("mitzpeRamon.html") || 
            window.location.href.includes("eilat.html") || 
            window.location.href.includes("jerusalem.html") || 
            window.location.href.includes("beerSheva.html") ||
            window.location.href.includes("ashdod.html")) {
                document.getElementById("answer1correct").addEventListener("click", checkCorrectAnswer);
                document.getElementById("answer2").addEventListener("click", checkCorrectAnswer);
                document.getElementById("answer3").addEventListener("click", checkCorrectAnswer);
                document.getElementById("answer4").addEventListener("click", checkCorrectAnswer);
    } else if (window.location.href.includes("menu.html")) {
        loadElements();
    } else if (window.location.href.includes("endGame.html")) {
        document.getElementById("playAgainBtn").addEventListener("click", function() {
            window.location.href = "startGame.html";
        });
    }
});

function loadElements() {
    strKiryatShmona = document.getElementById("kiriatSmona");
    strHaifa = document.getElementById("haifa");
    strHadera = document.getElementById("hadera");
    strTelAviv = document.getElementById("telaviv");
    strJerus = document.getElementById("jerusalem");
    strAshdod = document.getElementById("ashdod");
    strBeerSheva = document.getElementById("beersheva");
    strMizpaRamon = document.getElementById("mizpeRamon");
    strEilat = document.getElementById("eilat");
    kid = document.getElementById("kid");
    if (sessionStorage.getItem("counter") === "1") {
        strKiryatShmona.addEventListener("click", function() {
            kidLeft = sessionStorage.setItem("left", "43vw");
            kidTop = sessionStorage.setItem("top", "6vh");
            kidTop = sessionStorage.setItem("top", "calc(var(--vh, 1vh) * 6)");
           setTimeout(function() { window.location.href = "kiryatShmona.html"}, 500);
    });
    } else if (sessionStorage.getItem("counter") === "2") {
        strHaifa.addEventListener("click", function() {
            kidLeft = sessionStorage.setItem("left", "47vw");
            kidTop = sessionStorage.setItem("top", "23vh");
            kidTop = sessionStorage.setItem("top", "calc(var(--vh, 1vh) * 23)");
           setTimeout(function() { window.location.href = "haifa.html"}, 500);
        });
    } else if (sessionStorage.getItem("counter") === "3") {
        strHadera.addEventListener("click", function() {
            kidLeft = sessionStorage.setItem("left", "47vw");
            kidTop = sessionStorage.setItem("top", "32vh");
            kidTop = sessionStorage.setItem("top", "calc(var(--vh, 1vh) * 32)");
           setTimeout(function() { window.location.href = "hadera.html"}, 500);
        });
    } else if (sessionStorage.getItem("counter") === "4") {
        strTelAviv.addEventListener("click", function() {
            kidLeft = sessionStorage.setItem("left", "60vw");
            kidTop = sessionStorage.setItem("top", "32vh");
            kidTop = sessionStorage.setItem("top", "calc(var(--vh, 1vh) * 32)");
           setTimeout(function() { window.location.href = "telaviv.html"}, 500);
        });
    } else if (sessionStorage.getItem("counter") === "5") {
        strJerus.addEventListener("click", function() {
            kidLeft = sessionStorage.setItem("left", "44vw");
            kidTop = sessionStorage.setItem("top", "41vh");
            kidTop = sessionStorage.setItem("top", "calc(var(--vh, 1vh) * 41)");
           setTimeout(function() { window.location.href = "jerusalem.html"}, 500);
        });
    } else if (sessionStorage.getItem("counter") === "6") {
        strAshdod.addEventListener("click", function() {
            kidLeft = sessionStorage.setItem("left", "41vw");
            kidTop = sessionStorage.setItem("top", "49vh");
            kidTop = sessionStorage.setItem("top", "calc(var(--vh, 1vh) * 49)");
           setTimeout(function() { window.location.href = "ashdod.html"}, 500);
        });
    } else if (sessionStorage.getItem("counter") === "7") {
        strBeerSheva.addEventListener("click", function() {
            kidLeft = sessionStorage.setItem("left", "50vw");
            kidTop = sessionStorage.setItem("top", "55vh");
            kidTop = sessionStorage.setItem("top", "calc(var(--vh, 1vh) * 55)");
           setTimeout(function() { window.location.href = "beerSheva.html"}, 500);
        });
    } else if (sessionStorage.getItem("counter") === "8") {
        strMizpaRamon.addEventListener("click", function() {
            kidLeft = sessionStorage.setItem("left", "45vw");
            kidTop = sessionStorage.setItem("top", "70vh");
            kidTop = sessionStorage.setItem("top", "calc(var(--vh, 1vh) * 70)");
           setTimeout(function() { window.location.href = "mitzpeRamon.html"}, 500);
        });
    } else if (sessionStorage.getItem("counter") === "9") {
        strEilat.addEventListener("click", function() {
            window.location.href = "eilat.html";
        });
    } 
    kid.style.top = kidTop;
    kid.style.left = kidLeft;
}

function checkCorrectAnswer(event) {
    strCorrectAnswer = document.getElementById("answer1correct");
    if(event.currentTarget.id === "answer1correct") {
        document.getElementById("true").style.visibility = "visible";
        counter++;
        sessionStorage.setItem("counter", counter);
        if (sessionStorage.getItem("counter") === "10") {
            setTimeout(function() { 
                window.location.href = "endGame.html"
                document.getElementById("true").style.visibility = "hidden";
            }, 1000);
        } else {
            setTimeout(function() { 
                window.location.href = "menu.html"
                document.getElementById("true").style.visibility = "hidden";
            }, 1000);
        }
    } else {        
        document.getElementById("false").style.visibility = "visible";    
        setTimeout(function() { 
           document.getElementById("false").style.visibility = "hidden";
        }, 1000);

    }
}