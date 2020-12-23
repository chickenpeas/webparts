<!DOCTYPE html>
<html class="page__index">
  <head>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta charset="UTF-8">
    <title>Index</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0">
    <link href="/assets/css/index.min.css" rel="stylesheet">
    <!--&#91;if lt IE 9&#93;>
    <script src="//cdn.jsdelivr.net/html5shiv/3.7.2/html5shiv.min.js"></script>
    <script src="//cdnjs.cloudflare.com/ajax/libs/respond.js/1.4.2/respond.min.js"></script>
    <!&#91;endif&#93;-->
  </head>
  
  <body class="page__index__container">

    <div class="bl__fixedWidth pdTB80"><h1 class="el__ttl">Parts Library</h1></div>

    <div class="bl__parts pdTB80"><h2 class="el__ttlSub el__ttlSub--underline">Index</h2></div>

    <section class="bl__parts pdTB80">
      <h3 class="el__ttlSub">Hotel</h3>
      <div class="bl__narrowWidth">
        <ul>
          <li>hotel1</li>
          <li>hotel2</li>
          <li>hotel3</li>
          <li>hotel4</li>
        </ul>
      </div>
    </section>


    <section class="bl__parts pdTB80">
      <h3 class="el__ttlSub">Other Facilities</h3>
      <div class="bl__narrowWidth">
        <ul>
          <li><a href="/shion.php">獅温 The spa SHION</a></li>
        </ul>
      </div>
    </section>

    <?php
      include ($_SERVER['DOCUMENT_ROOT'] . '/includes/footer.php');
    ?>
    
  </body>
</html>
