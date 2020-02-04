var render = function (obj) {
    console.log(obj)
    if (obj === ''){
        console.log("inside if")
        return `<tr>
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
        <tr>
            <td><a href="" class="search-link">Stillmatic</a></td>
            <td><a href="" class="search-link">Nas</a></td>
            <td>2001</td>
            <td>****</td>
        </tr>`
    }
    else {
        console.log("inside else")
    return `<tr>
            <td><a href="" class="search-link">${obj.Album}</a></td>
            <td><a href="" class="search-link">${obj.Artist}</a></td>
            <td>${obj.Year}</td>
            <td>${obj.Genre}</td>
        </tr>`
    }
};
exports.render = render;