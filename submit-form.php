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
            <p>NAME: <span><?php echo $_POST["name"]; ?></span></p>
            <p>E-MAIL: <span><?php echo $_POST["e_mail"]; ?></span> </p>
            <P>TITLE: <span><?php echo $_POST["title"]; ?></span></P>
            <P> MESSAGE: <span><?php echo $_POST["message"]; ?></span></P>
            </div>
        
    </div>
</body>
</html>
    