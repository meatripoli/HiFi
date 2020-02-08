const render = function() {
  return `
  <!DOCTYPE html>
  <html lang="en">
  
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>HiFi</title>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
    <script src="https://kit.fontawesome.com/96ca6c3009.js" crossorigin="anonymous"></script>
    <link rel="stylesheet" href="../styles/styles.css">
  </head>
  <body>
    <div class="container">
    <div class="jumbotron align-content-center mt-20">
    <img src="../img/hifi-logo.png" alt="logo" class="hifiLogo">
      <h1 class="display-4 text-center">404 Not Found</h1>
      <a class="float-right" href="/">← Back To Home</a>
    </div>
    </div>
  </body>
  </html>
`
};

exports.render = render;
