<?php



?>
<!doctype html>
<html>
    <head>
        <meta charset = "UTF-8">
        <meta name = "description" content = "vault">
        <link rel = "stylesheet" type = "text/css" href = "css/style.css">
        <title> online Vault </title>
    </head>
    <body>
        <div id = "Vault-container">
            <div id = "redlight"></div>
            <div id = "greenlight"></div>
            <div id = "button-container">
                <h1> Enter the Code</h1>
                <h2> ...</h2>
                <button value = "1" onclick = "buttonNumberClick('1')" class = "button"> 1 </button>
                <button value = "2" onclick = "buttonNumberClick('2')" class = "button"> 2 </button>
                <button value = "3" onclick = "buttonNumberClick('3')" class = "button"> 3 </button>
            </div>    
        </div>

        <script type ="text/javascript" src = "javascript/vault.js"></script>
    </body>
</html>