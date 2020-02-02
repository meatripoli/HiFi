const render = function(title, employee, body) {
  return `
  <!DOCTYPE html>
  <html lang="en">
  
  <head>

      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>HiFi Search</title>
  
  
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
          integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
      <script src="https://kit.fontawesome.com/96ca6c3009.js" crossorigin="anonymous"></script>
      <link rel="stylesheet" href="../styles/search-alex.css">
      <link rel="stylesheet" href="../styles/employee-page.css">

  </head>
  
  <body>
  <!-- START navbar -->
  <div class="container-fluid header">
    <div class="row">
      <div class="col-lg-2 logo">
        <img src="../img/hifi-logo.png" alt="logo" class="hifiLogo">
      </div>
      <div class="col-lg-6 pt-25 align-self-center nav-title">
        <h2 class="home">${title}</h2>
      </div>
      <div class="col-lg-2 pt-25 align-self-center nav-links-wrapper">
        <div class="dropdown wrapper-dropdown-3 nav-links">
          <a class="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink"
            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            ${employee.first_name} ${employee.last_name}
          </a>
          <div class="dropdown-menu pl-10" aria-labeledby="dropdownMenuLink">
            <a class="dropdown-item" href="/employee"><i class="fas fa-user pr-2"></i> My Account</a>
            <a class="dropdown-item" href="/search"><i class="fas fa-compact-disc pr-2"></i> Record Search</a>
            <a class="dropdown-item" href="/logout"><i class="fas fa-door-closed pr-2"></i>Log out</a>
          </div>
        </div> ​
      </div>
    </div>
  </div>
   <!-- END navbar-->
      ${body}
   <!-- Scripts Bootstrap-->
      <script src="https://code.jquery.com/jquery-3.4.1.slim.min.js"
      integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" crossorigin="anonymous">
    </script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"
      integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous">
    </script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js"
      integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous">
    </script>
    <!-- Scripts js files-->
    <script src="../public/js/app.js"></script> 
    <script src="../public/js/search.js"></script>
  </body>
  
  </html>
  `
};

exports.render = render;