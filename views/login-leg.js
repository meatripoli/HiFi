const render = function(friend) {
  return `
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
                  <div class="row align-items-center remember">
                      <input type="checkbox">Remember Me
                  </div>
                  <div class="form-group">
                      <input type="submit" value="Login" class="btn btn-primary float-right login_btn">
                  </div>
              </form>
          </div>
          <div class="card-footer">
              <div class="d-flex justify-content-center links">
                  <a tabindex="0" class="btn btn-lg btn-primary" role="button" data-toggle="popover" data-trigger="focus" 
                    title="Dismissible popover" 
                        data-content=${friend}>Login</a>
              </div>
              <div class="d-flex justify-content-center">
              </div>
          </div>
      </div>
  </div>
</div>
  `
};

exports.render = render;