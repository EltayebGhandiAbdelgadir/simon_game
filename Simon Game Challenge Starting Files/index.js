// Variables and arraies
gamePattern = []
userclickedPattern = []
buttonColours = ["red","blue","green","yellow"];
flag = true

level = 0

// To check it's first time or not 
$("body").on("keypress",function(){
        
    if(flag === true){
        $("h1").text("Level "+level)
        nextSequence();
        flag = false
    }
})


// Animated when someone pressed the keybored
$(".btn").click(function(){
    
    var userChosenColour = $(this).attr("id");
    userclickedPattern.push(userChosenColour);

    playSound(userChosenColour);
    animate(userChosenColour);

    checkAnswer(userclickedPattern.length-1)
})

function checkAnswer(currentLevel){
    if(gamePattern[currentLevel] === userclickedPattern[currentLevel]){
        if(userclickedPattern.length === gamePattern.length){
            // wo = true
            // for(let i = 0;i<gamePattern.length;i++){
            //     if(userclickedPattern[i]!==gamePattern[i]){
            //         wo = false
            //         break
            //     }
            // }
            //if (wo){
                setTimeout(function(){
                nextSequence()
                },1000)}}
            //}
            else{
                playSound("wrong")
                $("body").addClass("game-over")
                setTimeout(function(){
                    $("body").removeClass("game-over")
                },200)
                $("h1").text("Game Over, Press Any Key to Restart")
                startOver()
            }
        }
    
    
 


// next function
function nextSequence(){
    userclickedPattern = []

    level++;
    $("h1").text("Level "+level)

    var randomNumber = Math.floor(Math.random()*4);
    var randomChosenColours = buttonColours[randomNumber]
    gamePattern.push(randomChosenColours);

    playSound(randomChosenColours);
    animate(randomChosenColours);
}



// play audio function
function playSound(name){
    
        var audio = new Audio(`sounds/${name}.mp3`);
        audio.play();

}

// animated function
function animate(currentColor){
    $("#"+currentColor).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
    $("#"+currentColor).addClass("pressed");
    setTimeout(function(){
        $("#"+currentColor).removeClass("pressed");
    },100)
}
  
function startOver(){
    userclickedPattern = []
    level = 0
    gamePattern = []
    flag = true
}









// The main function for the Game:

// function check(){
//     areEqual =gamePattern.every((value,index)=> value === userclickedPattern[index]);
//     if(areEqual!==true){
//         userclickedPattern = []
//         gamePattern = []
//         star()
//     }
//     else{
//         userclickedPattern =[]
//         nextSequence()
//     }

// }

//
// function game(){
//     user()
//     setTimeout(function(){
//         if (gamePattern.length === userclickedPattern.length) {
            
//             alert("dd")
//             check()
//         }
//         else{
//             star()
//         }
//     },gamePattern.length *100)
   
// }

