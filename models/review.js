module.exports = function(sequelize, DataTypes) {
    const Review = sequelize.define("review", {
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      body: {
        type: DataTypes.TEXT,
        allowNull: false,
      }
    });
  
    Review.associate = function(models) {
      Review.belongsTo(models.album, {
        foreignKey: {
          allowNull: false
        }
      });
      Review.belongsTo(models.employee, {
        foreignKey: {
          allowNull: false
        }
      });
    };
    return Review;
  };