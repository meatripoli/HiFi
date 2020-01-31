var render = function () {
    return `
    <img src="../img/RTJ2.jpg" alt="Album art here" style="height: 250px; width:250px">

    <div class="AlbumInfo">

        <ul style="list-style-type: none">
            <li>Artist:</li>
            <li>Year:</li>
            <li>Condition:</li>
            <li>Price:</li>
        </ul>

        <!-- Classic tabs -->
    <div class="classic-tabs">

        <ul class="nav tabs-cyan" id="myClassicTab" role="tablist">
        <li class="nav-item">
            <a class="nav-link  waves-light active show" id="Stock-tab-classic" data-toggle="tab" href="#Stock-classic"
            role="tab" aria-controls="Stock-classic" aria-selected="true">Stock</a>
        </li>
        <li class="nav-item">
            <a class="nav-link waves-light" id="Reviews-tab-classic" data-toggle="tab" href="#Reviews-classic" role="tab"
            aria-controls="Reviews-classic" aria-selected="false">Review</a>
        </li>
        <li class="nav-item">
            <a class="nav-link waves-light" id="TrackList-tab-classic" data-toggle="tab" href="#TrackList-classic" role="tab"
            aria-controls="TrackList-classic" aria-selected="false">Track List</a>
        </li> 
        </ul>

        <div class="tab-content border-right border-bottom border-left rounded-bottom" id="myClassicTabContent">
        <div class="tab-pane fade active show" id="Stock-classic" role="tabpanel" aria-labelledby="Stock-tab-classic">
            <p>Inventory</p>
            <table>
                <tr>
                    <th>Location</th>
                    <th>Stock</th>
                    <th>New</th>
                    <th>Used</th>
                </tr>
                <tr>
                    <td>Location A</td>
                    <td>7</td>
                    <td>3</td>
                    <td>4</td>
                </tr>
                <tr>
                    <td>Location B</td>
                    <td>3</td>
                    <td>1</td>
                    <td>2</td>
                </tr>
                <tr>
                    <td>Location C</td>
                    <td>5</td>
                    <td>2</td>
                    <td>3</td>
                </tr>
                <tr>
                    <td>Location A</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                </tr>
            </table>
        </div>
        <div class="tab-pane fade" id="Reviews-classic" role="tabpanel" aria-labelledby="Reviews-tab-classic">
            <p>This album rocks! Literally got me through the summer of '89! Track 8 is a personal favorite, and track 3 is one for the ages!</p>
            <p>Reviewed by: Melon</p>  
            <!---Talk about adding review posting here instead of in the earlier page as that makes better sense-->
        </div>
        <div class="tab-pane fade" id="TrackList-classic" role="tabpanel" aria-labelledby="TrackList-tab-classic">
            <ul style="list-style-type:decimal">
                <li>Intro</li>
                <li>Second Track</li>
                <li>Album over</li>
            </ul>
        </div>
        
        </div>
    
    </div>
    <!-- Classic tabs -->

    </div>
    `
}

exports.render = render;