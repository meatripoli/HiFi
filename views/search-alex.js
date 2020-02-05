var render = function (modalContent,searchContent) {
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
          
          <option>A</option> 
          <option>B</option> 
          <option>C</option>
          <option>D</option>
          <option>E</option> 
          <option>F</option>
          <option>G</option> 
          <option>H</option> 
          <option>I</option>
          <option>J</option>
          <option>K</option> 
          <option>L</option>
          <option>M</option> 
          <option>N</option> 
          <option>O</option>
          <option>P</option>
          <option>Q</option> 
          <option>R</option>
          <option>S</option> 
          <option>T</option> 
          <option>U</option>
          <option>V</option>
          <option>W</option> 
          <option>X</option>
          <option>Y</option> 
          <option>Z</option>
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