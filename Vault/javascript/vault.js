var numberButton = document.getElementById("button-number");
var guessedPassword = "";

function buttonNumberClick(clickedButton)
{
    guessedPassword = guessedPassword + clickedButton;
    console.log(guessedPassword);
    if(guessedPassword.length == 3)
    {
        disableInput();
        if(guessedPassword == 123)
        {
            var audio = new Audio('Sounds\\vaultOpen.mp3');
            audio.load();
            audio.play(); 
            alert("code is correct");
            Blink(1);
            
        }
        else
        {
            var audio = new Audio('Sounds\\vaultClose.mp3');
            audio.load();
            audio.play(); 
            alert("code is incorrect");
            Blink(0);
        }
        guessedPassword = "";
    } 
}


function Blink(correct)
{
    var timesBlinked = 1;
    var blinkElement;
    var defaultColor;
    var blinkColor;
    if(correct == 1)
    {
        blinkElement = document.getElementById("greenlight");
        blinkColor = "lightgreen";
        defaultColor = "green";
    }
    else
    {
        blinkElement = document.getElementById("redlight");
        blinkColor = "red";
        defaultColor = "darkred";
    }
    var Blinker = setInterval(function()
    { 
        if(timesBlinked == 1 || timesBlinked == 3 || timesBlinked == 5)
        {
            blinkElement.style.backgroundColor = blinkColor;   
        }
        else
        {
            blinkElement.style.backgroundColor = defaultColor;
        }
        if(timesBlinked == 6)
        {
            clearInterval(Blinker);
            disableInput();
        }
        timesBlinked++;
    }, 500);
}

function disableInput()
{
    var button1 = document.getElementById("button1");
    var button2 = document.getElementById("button2");
    var button3 = document.getElementById("button3");
    if(button1.disabled == false)
    {
        button1.disabled = true;
        button2.disabled = true;
        button3.disabled = true;
    }
    else
    {
        button1.disabled = false;
        button2.disabled = false;
        button3.disabled = false;
    }
    
}