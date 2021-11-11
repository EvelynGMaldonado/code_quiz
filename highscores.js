var highscores = [];


function loadPage() {
    console.log("page loaded");
    var highScores = localStorage.getItem("highscores");
    if(highScores) {
        var myScores = JSON.parse(highScores);
        highscores = myScores.concat(highscores);
        var myStudents = document.getElementById("list-of-students");
        for(let i=0; i<highscores.length -1; i++) {
            var li = document.createElement("li");
            var h1 = document.createElement('h1');
            var p = document.createElement("p");
            h1.innerText = "Name:" + highscores[0].username;
            p.innerText = "Score:" + highscores[0].score;
            myStudents.appendChild(li).appendChild(h1).appendChild(p);
        }
    }
}










//it is after the page is loaded 
document.addEventListener("DOMContentLoaded", loadPage);