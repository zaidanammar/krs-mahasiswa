'use strict';
const {
  Model
} = require('sequelize');
const { options } = require('../routes');
const { hashPassword }= require('../helper/password')
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  User.init({
    nama: DataTypes.STRING,
    username: DataTypes.STRING,
    password: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });
  User.addHook('beforeCreate', (instance, options) => {
    instance.password = hashPassword(instance.password)
  })
  return User;
};