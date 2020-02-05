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
    <div class="col-md-7 employee-table">
      <h2> ${user.employee.first_name} ${user.employee.last_name}</h2>  
      <div class="row table-row email">
        <div class="col col-label email-label">Email:</div>
        <div class="col col-data email-employee">${user.email}</div>
      </div>
      <div class="row table-row store">
        <div class="col col-label store-label">Store:</div>
        <div class="col col-data store-employee">${user.employee.store.Name}</div>
      </div>
      <div class="row table-row fav-album">
        <div class="col col-label album-label">Favorite Album</div>
        <div class="col col-data album-employee">${user.employee.fav_album}</div>
      </div>
    </div>
  </div>
</div>
<!-- End employee-table -->
  `
};

exports.render = render;