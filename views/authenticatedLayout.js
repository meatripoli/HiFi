const render = function(body) {
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
      <link rel="stylesheet" href="../styles/search.css">

  </head>
  
  <body>
  
      <div class="container-fluid searchHeader">
          <div class="row">
              <div class="col-lg-2 logo">
                  <img src="../img/hifi-logo.png" alt="logo" class="hifiLogo">
              </div>
              <div class="col-lg-8 searchBar">
                  <div class="active-pink-3 active-pink-4 mb-4 input-group">
                      <input class="form-control" id="textBox" type="text" placeholder="Search for album..."
                          aria-label="Search">
                      <button class="searchButton" type="submit"><i class="fas fa-search magGlass"
                              aria-hidden="true"></i></button>
                  </div>
              </div>
                  <div class="col-lg-2 wrapper">
					<div id="dd" class="wrapper-dropdown-5" tabindex="1">John Doe
						<ul class="dropdown">
							<li><a href="/employee"><i class="fas fa-user"></i>          My Account</a></li>
							<li><a href="/logout"><i class="fas fa-door-closed"></i>          Log out</a></li>
						</ul>
					</div>
				​</div>
          </div>
      </div>
      ${body}
  </body>
  
  </html>
  `
};

exports.render = render;