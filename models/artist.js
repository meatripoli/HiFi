module.exports = function(sequelize, DataTypes) {
    const Artist = sequelize.define("Artist", {
      first_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      last_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      year: {
        type: DataTypes.INTEGER,
        allowNull: false,
      }
    });
  
    Artist.associate = function(models) {
        Artist.hasMany(models.Album,{
            foreignKey: {
                allowNull: false
            }
        });
    };
    return Artist;
  };