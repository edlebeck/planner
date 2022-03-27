var today = moment().format("dddd, MMMM Do")

var date = document.getElementById("currentDay");
date.innerText = today;

for (i=9; i<17; i++) {
    var elID = "text" + i;
    var now = moment().format("H");
    var temp = document.getElementById(elID);
    var content = "content" + i;
    if (now == i) {
        temp.classList.add("present");
        temp.value = localStorage.getItem(content);
    } else if (now < i) {
        temp.classList.add("future");
        temp.value = localStorage.getItem(content);
    } else if (now > i) {
        temp.classList.add("past");
        temp.value = localStorage.getItem(content);
    }
};

var btn9 = document.getElementById("btn9");
btn9.addEventListener("click", update9);

var btn10 = document.getElementById("btn10");
btn10.addEventListener("click", update10);

var btn11 = document.getElementById("btn11");
btn11.addEventListener("click", update11);

var btn12 = document.getElementById("btn12");
btn12.addEventListener("click", update12);

var btn13 = document.getElementById("btn13");
btn13.addEventListener("click", update13);

var btn14 = document.getElementById("btn14");
btn14.addEventListener("click", update14);

var btn15 = document.getElementById("btn15");
btn15.addEventListener("click", update15);

var btn16 = document.getElementById("btn16");
btn16.addEventListener("click", update16);

function update9() {
    var elID = "text9";
    var temp = document.getElementById(elID);
    localStorage.setItem("content9", temp.value);
}

function update10() {
    var elID = "text10";
    var temp = document.getElementById(elID);
    localStorage.setItem("content10", temp.value);
}

function update11() {
    var elID = "text11";
    var temp = document.getElementById(elID);
    localStorage.setItem("content11", temp.value);
}

function update12() {
    var elID = "text12";
    var temp = document.getElementById(elID);
    localStorage.setItem("content12", temp.value);
}

function update13() {
    var elID = "text13";
    var temp = document.getElementById(elID);
    localStorage.setItem("content13", temp.value);
}
function update14() {
    var elID = "text14";
    var temp = document.getElementById(elID);
    localStorage.setItem("content14", temp.value);
}
function update15() {
    var elID = "text15";
    var temp = document.getElementById(elID);
    localStorage.setItem("content15", temp.value);
}
function update16() {
    var elID = "text16";
    var temp = document.getElementById(elID);
    localStorage.setItem("content16", temp.value);
}