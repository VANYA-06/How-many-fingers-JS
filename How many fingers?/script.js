
    document.getElementById("guess").onclick = function(){
          
          var myNumber =  document.getElementById("myNumber").value ;
          var gotIt = false;
          var numberOfGuesses = 1;

          while(gotIt == false){
          var guess = Math.random();
          guess = guess*6;
          guess = Math.floor(guess);

          if(guess == myNumber){
              //computer is right
               gotIt = true ;
               alert("Got it! It was a " + guess + ". It took me " + numberOfGuesses + " guesses.");

          }else{
              //computer is wrong
              numberOfGuesses++;
          }
        }

        
    }
    
 