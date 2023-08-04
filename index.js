
var playerName1 = prompt("What's your name? ");
var playerName2 = prompt("What's your opponent name? ");

playerName1 = playerName1.toUpperCase();
playerName2 = playerName2.toUpperCase();

    var playername1 = document.querySelectorAll("h2")[0].innerHTML = playerName1;  
    var playername2 = document.querySelectorAll("h2")[1].innerHTML = playerName2;    

    function diceGame(){
        var randomNumber1 = Math.floor((Math.random() * 6) + 1);
        // console.log(randomNumber);
        var randomImage =  "dice" + randomNumber1 +".png";
        var randomImageSource ="images/" + randomImage ;
        var image1 = document.querySelectorAll("img")[0];
        image1.setAttribute("src" , randomImageSource);
    
        var randomNumber2 = Math.floor((Math.random() *6) + 1);
    
        var randomImage2="dice" + randomNumber2 + ".png";
        var randomImageSource2 = "images/" + randomImage2;
        var image2 = document.querySelectorAll("img")[1];
        image2.setAttribute("src" , randomImageSource2);

      
        

        if(randomNumber1 > randomNumber2){
            document.querySelector(".result").innerHTML = playerName1 + " is the winner.";
        }
        else if(randomNumber1 < randomNumber2){
            document.querySelector(".result").innerHTML = playerName2 + " is the winner.";
        }
        else{
            document.querySelector(".result").innerHTML = "It's a Draw";
        }
    }

    
    
