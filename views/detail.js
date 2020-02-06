var render = function () {
    return `
    <div class="container">
        <div class="row">
            <div class="col align-self-end">
            <button type="submit" class="close">x</button>
            </div>
        </div>
        <div class="row" id="albuminfo">
        </div>
    </div>
    <!-- Classic tabs -->
    <div class="classic-tabs">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <ul class="nav nav-tabs nav-justified md-tabs indigo" id="myTabJust" role="tablist">
                        <li class="nav-item">
                            <a class="nav-link active" id="stock-tab-just" data-toggle="tab" href="#stock" role="tab"
                                aria-controls="stock-just" aria-selected="true">Stock</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" id="review-tab-just" data-toggle="tab" href="#review" role="tab"
                                aria-controls="review-just" aria-selected="false">Review</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    <div class="tab-content card" id="myTabContentJust">
    <div class="tab-pane fade show active" id="stock" role="tabpanel" aria-labelledby="stock-tab-just">
    <table class="table">
      <thead>
        <tr>
          <th>Location</th>
          <th>Stock</th>
          <th>New</th>
          <th>Used</th>
        </tr>
      </thead>
      <tbody id="albumstock">
      </tbody>
    </table>
  </div>
  <div class="tab-pane fade" id="review" role="tabpanel" aria-labelledby="Reviews-tab-classic">

  </div>
  </div>`
}

exports.render = render;