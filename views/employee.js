const render = function(user) {
  return `
  <div class="container employee-view">
  <div class="row top">
    <div class="col">
    </div>
  </div>
  <div class="employee-table">
    <div class="row align-items-center table-row name">
      <div class="col col-sm-2 col-label name-label">
        Name:
      </div>
      <div class="col col-data name-employee">
        ${user.employee.first_name} ${user.employee.last_name}
      </div>
    </div>
    <div class="row align-items-center table-row email">
      <div class="col col-sm-2 col-label email-label">Email:</div>
      <div class="col col-data email-employee">${user.email}</div>
    </div>
    <div class="row align-items-center table-row store">
      <div class="col col-sm-2 col-label store-label">Store:</div>
      <div class="col col-data store-employee">${user.employee.store.Name}</div>
    </div>
    <div class="row align-items-center table-row fav-album">
      <div class="col col-sm-2 col-label album-label">Favorite Album</div>
      <div class="col col-data album-employee">${user.employee.fav_album}</div>
    </div>
  </div>
</div>
<!-- End employee-table -->
  `
};

exports.render = render;