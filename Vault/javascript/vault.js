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
            alert("vault open");
            Blink(1);
        }
        else
        {
            alert("WRONG!");
            Blink(0);
        }
        guessedPassword = "";
    } 
}

function Blink(correct)
{
    var timesBlinked = 1;
    var blinkElement;
    var Blinker = setInterval(function()
    { 
        if(timesBlinked = 6)
        {
            clearInterval(Blinker);
        }
        timesBlinked++;
    }, 500);
}

function disableInput()
{
    var button = document.getElementsByClassName("button");
   if(button.disabled == false)
   {
    button.disabled = true;
   }
   else
   {
    button.disabled = false;
   }
    
}