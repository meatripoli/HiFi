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
  <!-- body -->
  <div class="card signupCard">
    <div class="card-header">
      <h3>Sign Up</h3>
      <div class="d-flex justify-content-end social_icon">
        <span><i class="fab fa-facebook-square facebookIcon"></i></span>
        <span><i class="fab fa-google-plus-square googleIcon"></i></span>
       <span><i class="fab fa-twitter-square twitterIcon"></i></span>
      </div>
    </div>
    <div class="card-body">
      <form action="/new" method="post" id="signup">
        <label class="label">Email Address:</label>
        <input type="text" class="form-control" id="emailInput">
        <label class="label">Password:</label>
        <input type="password" class="form-control" id="passwordInput">
        <div class="form-group">
          <input type="submit" value="Create" class="btn btn-primary float-right signup_btn">
        </div>
      </form>
    </div>
  <div class="card-footer">
    <div class="d-flex justify-content-center links">
      <p class="noAccount">Have an account?<a href="/login">Login In</a></p>
    </div>
  </div>
  <!-- body -->
  </div>
  <!-- Scripts Bootstrap-->
  <script
  src="https://code.jquery.com/jquery-3.4.1.min.js"
  integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo="
  crossorigin="anonymous"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js"
    integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous">
  </script>
  <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js"
    integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossorigin="anonymous">
  </script>
  <!-- Scripts js files -->
  <script src="../js/signup.js"></script>

</body>
</html>
 
  `
};

exports.render = render;