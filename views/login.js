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
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>
    <script src="https://kit.fontawesome.com/96ca6c3009.js" crossorigin="anonymous"></script>
    <link rel="stylesheet" href="../styles/styles.css">
  </head>
  
  <body>
    <div class="container-fluid">
      <div class="row">
        <div class="col-lg-12">
          <img src="../img/hifi-logo.png" alt="logo" class="hifiLogo">
        </div>
      </div>
  
      <div class="container">
  <div class="d-flex justify-content-center h-100">
      <div class="card">
          <div class="card-header">
              <h3>Employee Login</h3>
              <div class="d-flex justify-content-end social_icon">
                  <span><i class="fab fa-facebook-square facebookIcon"></i></span>
                  <span><i class="fab fa-google-plus-square googleIcon"></i></span>
                  <span><i class="fab fa-twitter-square twitterIcon"></i></span>
              </div>
          </div>
          <div class="card-body">
              <form action="/login" method="post" id="login">
                  <div class="input-group form-group">
                      <div class="input-group-prepend">
                          <span class="input-group-text"><i class="fas fa-user"></i></span>
                      </div>
                      <input type="text" class="form-control" id="username" placeholder="username">

                  </div>
                  <div class="input-group form-group">
                      <div class="input-group-prepend">
                          <span class="input-group-text"><i class="fas fa-key"></i></span>
                      </div>
                      <input type="password" class="form-control" id="password" placeholder="password">
                  </div>
                  <div class="form-group">
                      <input type="submit" value="Login" class="btn btn-primary float-right login_btn">
                  </div>
              </form>
          </div>
          <div class="card-footer">
              <div class="d-flex justify-content-center links">
                  <a tabindex="0" class="btn btn-lg btn-primary text-center" role="button" data-toggle="popover" data-trigger="focus" 
                    title="Login Credentials">Speak Friend</a>
              </div>
          </div>
      </div>
  </div>
</div>

    </div>
    <div id="popover-content" style="display: none">
    <ul class="list-group custom-popover">
    <li class="list-group-item">maria@hifi.com</li>
    <li class="list-group-item">alex@hifi.com</li>
    <li class="list-group-item">esteban@hifi.com</li>
    <li class="list-group-item">farai@hifi.com</li>
    <li class="list-group-item">nelan@hifi.com</li>
    <li class="list-group-item"><b>Password:</b> 12345678</li>
  </ul>
</div>
    <!-- Scripts Bootstrap-->
    <script src="https://code.jquery.com/jquery-3.4.1.min.js"
    integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo="
    crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
  </body>
</html>
    <!-- Scripts js files -->
    <script src="../js/login.js"></script>

  </body>
  </html>
  `
};

exports.render = render;
