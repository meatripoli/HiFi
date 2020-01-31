module.exports = function(sequelize, DataTypes) {
    const Review = sequelize.define("Review", {
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      body: {
        type: DataTypes.STRING,
        allowNull: false,
      }
    });
  
    Review.associate = function(models) {
      Review.belongsTo(models.Album, {
        foreignKey: {
          allowNull: false
        }
      });
      Review.belongsTo(models.Employee, {
        foreignKey: {
          allowNull: false
        }
      });
    };
    return Review;
  };