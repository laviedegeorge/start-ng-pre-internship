<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Php testing</title>
    <link rel="stylesheet" href="php.css">
</head>
<body>
    <div class="main_php">

            <div class="php_cont">
            <p>Thanks for reaching out <?php echo $_POST["name"]; ?> </p>
            </div>
        
    </div>
    <?php 
    $name = $_POST["name"];
    $e_mail = $_POST["e_mail"];
    $title = $_POST["title"];
    $message = $_POST["message"];

    $file = fopen("php.md", "a");

    fwrite($file,$name);
    fwrite($file,$e_mail);
    fwrite($file, $title);
    fwrite($file,$message);
    
    fclose($file);
    ?>
</body>
</html>
    