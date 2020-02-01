// models/user

User.prototype.validPassword = function(password) {
  return bcrypt.compareSync(password, this.password);
};

User.addHook("beforeCreate", function(user) {
  user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10), null);
});

// Delete an example by id
app.delete("/api/examples/:id", function(req, res) {
  db.Example.destroy({ where: { id: req.params.id } }).then(function(
    dbExample
  ) {
    res.json(dbExample);
  });
});
