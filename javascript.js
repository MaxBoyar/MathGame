var playing = false;
var score;
var action;
var timeremaining;
var correctAnswer;


document.getElementById("startreset").onclick = function() {
    if(playing==true){
        location.reload();//reload page
    }
    else{
        playing= true;
        score =0;
        document.getElementById("score_value").innerHTML=score;//sam be score_value et score
        show("timer");//mezig timer
             timeremaining=60;
             document.getElementById("timeval").innerHTML=timeremaining;
             hide("gameover");

        document.getElementById("startreset").innerHTML="Reset Game"
        startCount();
        generateQA();
        
    }
    
}

for(i=1;i<5;i++){
    document.getElementById("box"+i).onclick=function(){
        if(playing == true){
           if(this.innerHTML == correctAnswer){
               score++;
               document.getElementById("score_value").innerHTML=score;
               hide("wrong");
               show("correct");
               setTimeout(function(){
                   hide("correct");
               },1000)
               generateQA();
            }
            else{
                hide("correct");
                show("wrong");
                setTimeout(function(){ hide("wrong");},1000)
    
            }
        }
    }
}


function startCount(){
    action = setInterval(function(){
        timeremaining -= 1;
        document.getElementById("timeval").innerHTML=timeremaining;
        if(timeremaining==0){
            stopCountdown();
            show("gameover");
            document.getElementById("gameover").innerHTML="<p>game over! </p> <p>your score is "+ score +"</p>";
            hide("timer");
            hide("correct");
            hide("wrong");
            playing=false;
            document.getElementById("startreset").innerHTML="Start Game"
        }
    },1000)
}

function stopCountdown(){
    clearInterval(action);
}

function hide(Id){
    document.getElementById(Id).style.display="none";
}

function show(Id){
    document.getElementById(Id).style.display="block";

}

function generateQA(){
    var x=1+Math.round(9*Math.random());/* random 0-1 (eg 0.56), round  5.6 >6*/
    var y=1+Math.round(9*Math.random());
    correctAnswer= x*y;
    document.getElementById("question").innerHTML= x+ "x" + y;
    var correctPosition=1+Math.round(3*Math.random());
    document.getElementById("box"+correctPosition).innerHTML=correctAnswer;

    for(i=1;i<5;i++){
      
        if(i != correctPosition){
            
            var wrongAnswer;
            wrongAnswer=(1+Math.round(9*Math.random())) * (1+Math.round(9*Math.random()));
            while(wrongAnswer== correctAnswer){
                wrongAnswer=(1+Math.round(9*Math.random())) * (1+Math.round(9*Math.random()));
            }
            document.getElementById("box"+i).innerHTML=wrongAnswer;
        }
    }

    
}