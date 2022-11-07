var readlineSync= require("readline-sync")
var user = readlineSync.question("what is your name ?")
console.log("welcome to the game "+ user)
var score=0;
// function
function play(question,answer)
  {
    var userAnswer=readlineSync.question(question)
    if(userAnswer.toUpperCase() === answer.toUpperCase())
    {
      console.log('right')
      score=score+1;
    }
    else
    {
      console.log('wrong')
      
    }
  }
var highscore= [{
  name:"shalini",
  score:5,
},{
  name:"priya",
  score:4,
},]


var questions = [{
  question : "where do i live",
  answer: "chaibasa"
  
},{
  question : "what is my fav food ",
  answer: "pizza"
},{
question : "what is my fav color ",
  answer: "pink"
},{
  question : "what is my fav cartoon ",
  answer: "shinchan"
},{
  question : "what is my zodiac ",
  answer: "scorpio"
}]
  
for(var i=0;i<questions.length;i++)
  {
    var current=questions[i]
    play(current.question,current.answer)
    
  }
    
console.log("you score is " +score)
console.log("high scores are:")
for(var i=0;i<highscore.length;i++)
  { var current=highscore[i]
    console.log(current.name)
    console.log(current.score)
  }
