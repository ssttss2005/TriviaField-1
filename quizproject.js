let currentQuestion = 0;
let score = 0;
let fiftyleft = 0;
let hintleft = 0; 
let haveAsk = false; 
let used = false;
let questions = [
   {//1
	"question": "How many countries are there in the world?",
	"a": "200",
	"b": "195",
	"c": "113",
	"d": "78",
	"image": "quizimages/q1.jpg",
	"answer": "b",
   "hint" : "There is 44 countries in Europe"
   },
   {//2
	"question": "Which is not the one of the member of funding father",
	"a": "Aaron Burr",
	"b": "Geroge Washinton",
	"c": "Alxander Hamilton",
	"d": "James Madison",
	"image":"quizimages/q2.jpg",
	"answer": "a",
   "hint" : "The man who is Villan in musical Hamilton "
   },
   {//3
      "question": "How many planet in our solar system",
      "a": "20",
      "b": "1000+",
      "c": "7",
      "d": "8",
      "image":"quizimages/q3.jpg",
      "answer": "d",
      "hint" : "Pluto is not a planet"
   },

   {//4
         "question": "Who is the most fastest man so far",
         "a": "Michael Johnson",
         "b": "Usain Bolt",
         "c": "Carl Lewis",
         "d": "Bob Dylan",
         "image":"quizimages/q4.jpg",
         "answer": "b",
         "hint" : "He is from Jamaica"
    },
    {//5
            "question": "What the title of this paint??",
            "a": "Sun Flower",
            "b": " &ldquo;    &rdquo;  ",
            "c": " 1836 ",
            "d": "Taitan",
            "image":"quizimages/q5.jpg",
            "answer": "b",
            "hint" : "The painter's name is not Van Gogh"
    },
    {//6
      "question": "Solve !!!",
      "a": "19",
      "b": "96",
      "c": "88",
      "d": "56",
      "image":"quizimages/q6.jpg",
      "answer": "b",
      "hint" : "Find the pattern"
    },
    { //7
      "question": "What is the title of this movie?",
      "a": "1999",
      "b": "Star wars",
      "c": "E.T.",
      "d": "Back to the future 2",
      "image":"quizimages/q7.jpg",
      "answer": "c",
      "hint" : "This movie is about Alian"
      },

      {//8
         "question": "Which country is not part of G7?",
         "a": "Japan",
         "b": "U.K.",
         "c": "Thai Land",
         "d": "Canada",
         "image":"quizimages/q8.jpg",
         "answer": "c",
         "hint" : "Which is in Asia"
         },

    {//9
      "question": "Which one is bigger?",
      "a": "",
      "b": "",
      "c": "Equal",
      "d": "No Answer",
      "image":"quizimages/q9.jpg",
      "answer": "b",
      "hint" : "Negative x Negative make positive"
      },

      {
         "question": "How many suare you can find?",
      "a": "40",
      "b": "39",
      "c": "54",
      "d": "10",
      "image":"quizimages/q10.jpg",
      "answer": "a",
      "hint" : "Don't forget biggest square"
      }
 ];
 
 if ('serviceWorker' in navigator) {
   navigator.serviceWorker.register('/sw.js');
 }
 
 function loadQuestion() {
     
    // close light box for first question
    if (currentQuestion == 0) {
       closeLightBox();

    }
      // load the image
      let img = document.getElementById("image");
    img.src = questions[currentQuestion].image;
    img.style.maxWidth = "70vh";
	img.style.maxHeight = "80vh";
    
     
    // load the image
    
    
      // load the question and answers and all reset info
    document.getElementById("question").innerHTML = (currentQuestion +1) + ". " + questions[currentQuestion].question;
    document.getElementById("a").innerHTML = "A. " + questions[currentQuestion].a;
    document.getElementById("b").innerHTML = "B. " + questions[currentQuestion].b;
    document.getElementById("c").innerHTML = "C. " + questions[currentQuestion].c;
    document.getElementById("d").innerHTML = "D. " + questions[currentQuestion].d;
    document.getElementById("n" + currentQuestion).style.fontSize = "30px";
    document.getElementById("n" + currentQuestion).style.color = "blue";
    document.getElementById("a").disabled = false;
    document.getElementById("b").disabled = false;
    document.getElementById("c").disabled = false;
    document.getElementById("d").disabled = false;
    haveAsk = false;
    used = false; 

 } // loadQuestion
 
 
 function markIt(ans) {
     
    let message = "";
    document.getElementById("message").style.backgroundColor = "red";
    if (ans == questions[currentQuestion].answer) {
        
       // add 1 to score
       score++;
       document.getElementById("n" + currentQuestion).style.color = "green";
       document.getElementById("n" + currentQuestion).style.fontSize = "25px";
       
       // display score 
       document.getElementById("score").innerHTML = score + " / " + questions.length;
       
       message = "Correct!!!! Your score is <br>" + score + " / " + questions.length;
    } else {
      document.getElementById("n" + currentQuestion).style.color = "red";
      document.getElementById("n" + currentQuestion).style.fontSize = "25px";
      
       message = "Incorrect :< Your score is <br>" + score + " / " + questions.length; 
    } // else
        
   
    
    // move to the next question
    currentQuestion++;
    if (currentQuestion >= questions.length) {
       // create a special message
       document.getElementById("miss").innerHTML = (10-score); 
       document.getElementById("correct").innerHTML = score; 
       document.getElementById("result").style.display = "block";
       message = "You are awesome or not ,or whatever, part of your mark is to give a good message based what the user's score is";
       if(score<5){
         document.getElementById("comment").innerHTML= "Good Try You almost there, Let's try again. I give you one extra hint and 50/50"
       }else if(score>= 5 && score < 10){
         document.getElementById("comment").innerHTML= "Yo are almost perfect, Let's try again!!"

       }else{
         document.getElementById("comment").innerHTML= "Wow you got perfect!! Let's try again without any hitns."
       }
    } else {
      document.getElementById("a").style.backgroundColor = null;
      document.getElementById("b").style.backgroundColor = null;
      document.getElementById("c").style.backgroundColor = null;
      document.getElementById("d").style.backgroundColor = null;
     
       loadQuestion();
    }
    
    // show the lightbox
    document.getElementById("lightbox").style.display = "block";
    document.getElementById("message").innerHTML = message;
  
 }  // markIt
 
 function closeLightBox() {
    document.getElementById("lightbox").style.display = "none";
 } // closeLightbox
 
 
 // end of page show score and ask retry 
 function retry(){
   //if score was 1-4 and press retry get bonus hints 
   if(score <5){
      fiftyleft = -1; 
      hintleft = -1; 
      document.getElementById("fifty").style.backgroundColor = "goldenrod"
      document.getElementById("hintbox").style.backgroundColor = "goldenrod"
      document.getElementById("fifty").innerHTML = "50/50+"
      document.getElementById("hintbox").innerHTML = "Hint+"
      // if perfected first round retry with out hints
   }else if(score == 10){
      fiftyleft = 3;
      hintleft = 3;
      document.getElementById("fifty").style.background = "#2f414475"
      document.getElementById("fifty").innerHTML = "No More 50/50"
      document.getElementById("hintbox").style.background = "#2f414475"
      document.getElementById("hintbox").innerHTML = "No More Hint"
   }else{
      document.getElementById("fifty").style.background = "#6dd8eb"
      document.getElementById("hintbox").style.background = "#6dd8eb"
      fiftyleft = 0; 
      hintleft = 0; 
    
   }
   currentQuestion = 0; 
   score = 0; 
  for(let i =0; i< 10; i++){
   document.getElementById("n"+ i).style.color = "black";
  } 
   document.getElementById("result").style.display = "none";
   loadQuestion();
   document.getElementById("score").innerHTML = score + " / " + questions.length;
 }
 //50/50 
 function fifty(){
   //for dont use 50/50 on same question and waste its remain 
if(used == false){
   used = true; 
   if(fiftyleft < 2){
      fiftyleft++;
      if(questions[currentQuestion].answer == "a" || questions[currentQuestion].answer == "b"){
         document.getElementById("c").style.backgroundColor = "#000000cc";
         document.getElementById("d").style.backgroundColor = "#000000cc";
         document.getElementById("c").disabled =true;
         document.getElementById("d").disabled =true;
         
      }else{
         document.getElementById("a").style.backgroundColor = "#000000cc";
         document.getElementById("b").style.backgroundColor = "#000000cc";
         document.getElementById("a").disabled =true;
         document.getElementById("b").disabled =true;
      }


      document.getElementById("message").innerHTML = questions[currentQuestion].hint;
      if(fiftyleft == 1){
         document.getElementById("fifty").style.background = "linear-gradient(to right, #6dd8eb 50% ,#2f414475 50%)";
      }else if(fiftyleft == 2){
      document.getElementById("fifty").style.background = "#2f414475"
      document.getElementById("fifty").innerHTML = "Sold Out"
      //when have bonus hint
     }else if(fiftyleft == 0){
      document.getElementById("fifty").style.background = "#6dd8eb"
     }
   }
}
  
 }
  


function hint(){
   //dont waste hintleft on same question if you see once you can see anyamout
if(haveAsk == true ){
   haveAsk = false; 
   hintleft -= 1;
   hint();
}else{
   hintleft++;
   if(hintleft < 3){
      document.getElementById("lightbox").style.display = "block";
   document.getElementById("message").style.backgroundColor = "green";
   document.getElementById("message").innerHTML = questions[currentQuestion].hint;

   if(hintleft == 1){
      document.getElementById("hintbox").style.background = "linear-gradient(to right, #6dd8eb 50% ,#2f414475 50%)";
   }else if(hintleft == 2){
   document.getElementById("hintbox").style.background = "#2f414475"
   document.getElementById("hintbox").innerHTML = "Sold Out"
  }else if(hintleft == 0){
   document.getElementById("hintbox").style.background = "#6dd8eb"
  }
   }
   haveAsk = true; 
}
   
   
}
 
 
 
 
 
 
   
