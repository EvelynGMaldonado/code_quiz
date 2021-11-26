var highscores = [];


function loadPage() {
    console.log("page loaded");
    var highScores = JSON.parse(localStorage.getItem("highscores")) || [];

    var myStudents = document.getElementById("list-of-students");
    for(let i=0; i < highScores.length; i++) {
        var li = document.createElement("li");
        var h4 = document.createElement('h4');
        var p = document.createElement("p");
        h4.innerText = "Name:" + highScores[i].username;
        p.innerText = "Score:" + highScores[i].score;
        myStudents.appendChild(li).appendChild(h4).appendChild(p);
    }
}










//it is after the page is loaded 
document.addEventListener("DOMContentLoaded", loadPage);