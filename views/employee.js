const render = function(user) {
  return `
  <div class="container">
  <div class="row">
      <div class="col-lg-12">
          <img src="/img/employee${user.employee.id}.png" alt="employee picture" class="employeePic">
          <div class="introDiv">
              <div class="container">
                  <div class="row employeeInformation">
                      <div class="col-lg-6 col-sm-12 employeeNameDiv">
                        <div class="nameBorder">
                          ${user.employee.first_name} ${user.employee.last_name}
                        </div>
                      </div>
                      <div class="col-lg-6 col-sm-12 col-xs-12 employeeInfoDiv">
                          <div class="employeeEmail">
                              <div class="employeeLabel topLabel">Email</div>
                              <div class="employeeData">${user.email}</div>
                          </div>
                          <div class="employeeStore">
                              <div class="employeeLabel">Store</div>
                              <div class="employeeData">${user.employee.store.Name}</div>
                          </div>
                          <div class="employeeFav-Album">
                              <div class="employeeLabel">Favorite Album</div>
                              <div class="employeeData">${user.employee.fav_album}</div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </div>
</div>
  `
};

exports.render = render;