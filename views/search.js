var render = function (modalContent) {
    return `
    <div class="container-fluid paginationCont">
    <div class="row justify-content-center">
      <div class="col-lg-6 searchBar">
        <div class="active-pink-3 active-pink-4 input-group album-search">
          <input class="form-control" id="textBox" type="text" placeholder="Search for album..." aria-label="Search">
          <button class="searchButton" type="submit"><i class="fas fa-search magGlass" aria-hidden="true"></i></button>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-12">
        <nav class="paginationNav">
          <ul class="pagination pagination-md justify-content-center">
            <li class="page-item"><a class="page-link" href="#">A</a></li>
            <li class="page-item"><a class="page-link" href="#">B</a></li>
            <li class="page-item"><a class="page-link" href="#">C</a></li>
            <li class="page-item"><a class="page-link" href="#">D</a></li>
            <li class="page-item"><a class="page-link" href="#">E</a></li>
            <li class="page-item"><a class="page-link" href="#">F</a></li>
            <li class="page-item"><a class="page-link" href="#">G</a></li>
            <li class="page-item"><a class="page-link" href="#">H</a></li>
            <li class="page-item"><a class="page-link" href="#">I</a></li>
            <li class="page-item"><a class="page-link" href="#">J</a></li>
            <li class="page-item"><a class="page-link" href="#">K</a></li>
            <li class="page-item"><a class="page-link" href="#">L</a></li>
            <li class="page-item"><a class="page-link" href="#">M</a></li>
            <li class="page-item"><a class="page-link" href="#">N</a></li>
            <li class="page-item"><a class="page-link" href="#">O</a></li>
            <li class="page-item"><a class="page-link" href="#">P</a></li>
            <li class="page-item"><a class="page-link" href="#">Q</a></li>
            <li class="page-item"><a class="page-link" href="#">R</a></li>
            <li class="page-item"><a class="page-link" href="#">S</a></li>
            <li class="page-item"><a class="page-link" href="#">T</a></li>
            <li class="page-item"><a class="page-link" href="#">U</a></li>
            <li class="page-item"><a class="page-link" href="#">V</a></li>
            <li class="page-item"><a class="page-link" href="#">W</a></li>
            <li class="page-item"><a class="page-link" href="#">X</a></li>
            <li class="page-item"><a class="page-link" href="#">Y</a></li>
            <li class="page-item"><a class="page-link" href="#">Z</a></li>
          </ul>

          <select> 
            <option value="" selected="selected">Search Albums by Letter</option> 
            
            <option class="dropdown">A</option> 
            <option class="dropdown">B</option> 
            <option class="dropdown">C</option>
            <option class="dropdown">D</option>
            <option class="dropdown">E</option> 
            <option class="dropdown">F</option>
            <option class="dropdown">G</option> 
            <option class="dropdown">H</option> 
            <option class="dropdown">I</option>
            <option class="dropdown">J</option>
            <option class="dropdown">K</option> 
            <option class="dropdown">L</option>
            <option class="dropdown">M</option> 
            <option class="dropdown">N</option> 
            <option class="dropdown">O</option>
            <option class="dropdown">P</option>
            <option class="dropdown">Q</option> 
            <option class="dropdown">R</option>
            <option class="dropdown">S</option> 
            <option class="dropdown">T</option> 
            <option class="dropdown">U</option>
            <option class="dropdown">V</option>
            <option class="dropdown">W</option> 
            <option class="dropdown">X</option>
            <option class="dropdown">Y</option> 
            <option class="dropdown">Z</option>
          </select> 
      
        </nav>
      </div>
    </div>
  </div>

  <!-- RESULTS TABLE -->
  <div class="container tableCont">
    <div class="row">
      <div class="col-lg-12">
        <table class="table table-striped">
          <thead class="searchTHead">
            <tr>
              <th>Album</th>
              <th>Artist</th>
              <th>Release Year</th>
              <th>Genre</th>
            </tr>
          </thead>
          <tbody id="searchlist">
          </tbody>
        </table>
      </div>
    </div>
  </div>
  </div>

  <!-- The Modal -->
  <div id="detailModal" class="modal">
    <div class="modal-content">
      ${modalContent}
    </div>
  </div>
  `
}

exports.render = render;