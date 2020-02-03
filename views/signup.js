const render = function() {
  return `
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
        <form action="/login" method="post" id="login">
          <label for="">First Name:</label>
          <input type="text" class="form-control" id="firstname">
          <label class="label">Last Name:</label>
          <input type="text" class="form-control" id="lastname">
            <label class = "label">Email Address:</label>
            <input type="text" class="form-control" id="username">
            <label class="label">Password:</label>
            <input type="password" class="form-control" id="password">
            <div class="form-group">
                <input type="submit" value="Login" class="btn btn-primary float-right login_btn signup_btn">
            </div>
        </form>
    </div>
  </div>

  <script src="https://code.jquery.com/jquery-3.4.1.js" integrity="sha256-WpOohJOqMqqyKL9FccASB9O0KwACQJpFTUBLTYOVvVU=" crossorigin="anonymous"></script>
  <script type="text/javascript" src="../js/signup.js"></script>
  `
};

exports.render = render;