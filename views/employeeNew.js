const render = function(title) {
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
      <link href=“https://fonts.googleapis.com/css?family=Anton|PT+Sans+Narrow&display=swap” rel=“stylesheet”>
      <link rel="stylesheet" href="../styles/styles.css">
  </head>
  
  <body>
  <!-- START navbar -->
  <div class="container-fluid header">
    <div class="row">
      <div class="col-lg-2 logo">
        <img src="../img/hifi-logo.png" alt="logo" class="hifiLogo">
      </div>
      <div class="col-lg-8 pt-25 align-self-center nav-title">
        <h2 class="home">${title}</h2>
      </div>
    </div>
  </div>
   <!-- END navbar-->
  <div class="container" id="createEmployee">
  <div id="ce-row" class="row justify-content-center align-items-center">
    <div id="ce-column" class="col-md-6">
      <div id="ce-box" class="col-md-12">
        <form id="ce-form" class="form" action="" method="post">
          <h3 class="text-center text-info">Create Employee</h3>
          <div class="form-group">
            <label for="firstname" class="text-info">First Name:</label><br>
            <input type="text" name="firstname" id="firstname" class="form-control">
          </div>
          <div class="form-group">
            <label for="lastname" class="text-info">Last Name:</label><br>
            <input type="text" name="lastname" id="lastname" class="form-control">
          </div>
          <div class="form-group">
            <label for="favourite" class="text-info">Favorite Album:</label><br>
            <input type="text" name="favourite" id="favourite" class="form-control">
          </div>
          <div class="form-group">
            <input type="submit" name="submit" class="btn btn-info btn-md float-right" value="submit">
          </div>
        </form>
      </div>
    </div>
  </div>
</div>
<!-- Scripts Bootstrap-->
<script
src="https://code.jquery.com/jquery-3.4.1.min.js"
integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo="
crossorigin="anonymous"></script>
 <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"
   integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous">
 </script>
 <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js"
   integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous">
 </script>
 <!-- Scripts js files -->
 <script src="../js/employeeCreate.js"></script>
</body>

</html>
  `
};

exports.render = render;
