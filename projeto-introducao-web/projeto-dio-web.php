<!DOCTYPE html>
<html lang="pt-br">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Meu primeiro site PHP</title>
  <link rel="stylesheet" href="style.css">
  <script
  src="https://code.jquery.com/jquery-3.6.0.min.js"
  integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4="
  crossorigin="anonymous"></script>
</head>
<body>
  

    <?php
      for ($i = 1 ; $i < 11 ; $i++ ) {
        print ("<p>Linha número: <strong>" . $i . "</strong><br /></p>");
      }
    ?>

    <script>
      $(document).ready(function(){
        alert("Wohooooo!");
      });
    </script>
</body>
</html>