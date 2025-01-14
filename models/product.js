'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Product.belongsTo(models.Category)
    }
  };
  Product.init({
    name: {
      type : DataTypes.STRING,
      // allowNull: false,
      // validate : {
      //   notEmpty: {msg : `Fill the name!`},
      //   notNull : {msg : `Fill the name!`},
      // }
    },
    description: {
      type : DataTypes.TEXT,
      // allowNull: false,
      // validate : {
      //   notEmpty: {msg : `Fill the description!`},
      //   notNull : {msg : `Fill the description!`},
      // }
    },
    imgUrl: {
      type : DataTypes.STRING,
      allowNull: false,
      // validate : {
      //   notEmpty: {msg : `Fill the image!`},
      //   notNull : {msg : `Fill the image!`}
      // }
    },
    weight: DataTypes.FLOAT,
    CategoryId: DataTypes.INTEGER,
    UserId: DataTypes.INTEGER,
    stock : {
      type : DataTypes.INTEGER,
      // allowNull: false,
      // validate : {
      //   notEmpty: {msg : `Fill the stock!`},
      //   notNull : {msg : `Fill the stock!`}
      // }
    },
    price : {
      type : DataTypes.INTEGER,
      // allowNull: false,
      // validate : {
      //   notEmpty: {msg : `Fill the stock!`},
      //   notNull : {msg : `Fill the stock!`}
      // }
    },
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};
