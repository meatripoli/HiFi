module.exports = function(sequelize, DataTypes) {
  const Album = sequelize.define("album", {
    Year: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    Album: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Artist: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Genre: DataTypes.STRING,
    Subgenre: DataTypes.STRING,
    Img: DataTypes.STRING,
    });

    // Album.associate = function(models) {
      
    //   Album.belongsTo(models.Store, { 
    //     through: Album ,
    //     foreignKey: {
    //       allowNull: false,
    //       defaultValue: 1
    //     }
    //   });
    //   Album.hasMany(models.Review,{
    //     foreignKey: {
    //       allowNull: false
    //     }
    //   });
    // };
  return Album;
};