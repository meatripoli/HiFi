const render = function() {
  return `
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

  <!-- modal -->
  <div class="modal" tabindex="-1" role="dialog" id="employeeModal">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">New Employee</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <form action="/employee" method="post" id="employee">
            <label for="">First Name:</label>
            <input type="text" class="form-control" id="firstname">
            <label class="label">Last Name:</label>
            <input type="text" class="form-control" id="lastname">
            <label class="label">Favourite Album:</label>
            <input type="text" class="form-control" id="favourite">
        </div>
        <div class="modal-footer">
          <div class="form-group">
            <input type="submit" value="Create" class="btn btn-primary float-right employee_btn">
          </div>
          </form>

          <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
  </div>
  <!-- modal -->
  <!-- body -->
 
  `
};

exports.render = render;