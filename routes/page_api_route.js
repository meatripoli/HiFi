const db = require("../models");
const { Op } = require("sequelize");

module.exports = function (app) {
    app.get("/api/albums/page/:character", function (req, res) {
        db.album.findAll({
            where: {
                Album: {
                    [Op.like]: `${req.params.character}%`
                }
            }
        }).then(data => res.json(data))
    });
}