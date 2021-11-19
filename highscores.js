var highscores = [];


function loadPage() {
    console.log("page loaded");
    var highScores = JSON.parse(localStorage.getItem("highscores")) || [];
   
    var myStudents = document.getElementById("list-of-students");
    for(let i=0; i < highScores.length; i++) {
        var li = document.createElement("li");
        var h1 = document.createElement('h1');
        var p = document.createElement("p");
        h1.innerText = "Name:" + highScores[i].username;
        p.innerText = "Score:" + highScores[i].score;
        myStudents.appendChild(li).appendChild(h1).appendChild(p);
    }
}










//it is after the page is loaded 
document.addEventListener("DOMContentLoaded", loadPage);