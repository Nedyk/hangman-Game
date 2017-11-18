
<script type="text/javascript">
    $(document).ready(function() {


 var alphabet = [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
        'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
        't', 'u', 'v', 'w', 'x', 'y', 'z'];


    // Array holds all the singer options
    var singers= ["Justin", "usher", "Beyonce", "Kanye", "Gaga", "Rihanna"
                    ];
    //counters
var randompick = singers[Math.floor(Math.random()*singers.length)];
console.log(randompick);
var chosensinger= ""
var chosen = chosensinger + randompick;
var chances = 0;
var wrongletter=[];
var progressword=[];
var rightguess=0;

// every letter in the word is symbolized by an underscore in the guessfield

for (var i = 0; i < chosen.length; i++){
  var progressword=[];
  progressword.push("_ ");
 
}

// current word
function Showcurrentword(){
  for (var i = 0; i < chosen.length; i++){
  var currentword = document.getElementById("currentword");
  var neword = document.createTextNode(chosen[i]);
  currentword.appendChild(neword);
  $("currentword").text("neword");
  }
}

    //compareletter with characters in random string
function compareletter{
  var getform = document.mygame; 
  var getuserguesses = getform.elements["userguess"]; 
  var guessedletter = getuserguesses;
  var checkletter = singers.includes(chosen[i]);
  
  
  console.log(getuserguesses);
  
  
  var currentword= document.getElementById("currentword");
  $("currentword").innerHTML(""); 
  Showcurrentword();
  
  //check if letter matches
  if(match = false){
    var yourguess= document.getElementById("youguessed");
    var neword = document.createTextNode(" " + guessedletter);
    yourguess.appendChild(neword); 
    chances++;
   
  }
  
  
  var alletters = true;
  for (var i = 0; i < chosen.length; i++){
    if(chosen[i] !== "_ "){
      alletters = false;
    }
  }
  if(alletters){
  alert("You win!");
  }
  
  //lose
  if(chances === 10){
    alert("You didn't get all the letters");
  }
}

function init(){
  Showcurrentword();
}

window.onload = init;
