const render = function(user) {
  return `
  <div class="container employee-view">
    <div class="row top">
      <div class="col"></div>
    </div>
  <div class="row">
    <div class="col-md-5 img">
      <img src="./img/headphones-sm.jpeg"  alt="" class="img-rounded">
    </div>
    <div class="col-md-6 details">
      <h4> ${user.employee.first_name} ${user.employee.last_name}</h4>  
      <div class="row table-row email">
        <div class="col col-sm-2 col-label email-label">Email:</div>
        <div class="col col-data email-employee">${user.email}</div>
      </div>
    </div>
  </div>
</div>
<!-- End employee-table -->
  `
};

exports.render = render;