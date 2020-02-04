var render = function (modalContent,searchContent) {
    return `
        <div class="container-fluid paginationCont">
            <div class="row">
                <div class="col-lg-6 searchBar">
                    <div class="active-pink-3 active-pink-4 mb-4 input-group">
                    <input class="form-control" id="textBox" type="text" placeholder="Search for album..."
                        aria-label="Search">
                    <button class="searchButton" type="submit"><i class="fas fa-search magGlass"
                            aria-hidden="true"></i></button>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-12">
                    <nav aria-label="Page navigation example">
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
                        <tbody id = "searchresultlist">
                        <!--
                            <tr>
                                <td><a href="" class="search-link">Thriller</a></td>
                                <td><a href="" class="search-link">Michael Jackson</a></td>                           
                                <td>1982</td>
                                <td>*****</td>
                            </tr>
                            <tr>
                                <td><a href="" class="search-link">The End of Heartache</a></td>
                                <td><a href="" class="search-link">Killswitch Engage</a></td>                            
                                <td>2004</td>
                                <td>***</td>
                            </tr>
                        -->
                        ${searchContent}
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

        <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"
            integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous">
        </script>
        <script src="https://code.jquery.com/jquery-3.4.1.js"
            integrity="sha256-WpOohJOqMqqyKL9FccASB9O0KwACQJpFTUBLTYOVvVU=" crossorigin="anonymous"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>
        <script src="../js/app.js"></script>
        <script src="../js/search.js"></script>
    </body>

    </html>
    `
}

exports.render = render;