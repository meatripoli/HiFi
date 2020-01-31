module.exports = function(sequelize, DataTypes) {
    const Artist = sequelize.define("Artist", {
      Name: {
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