'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Matakuliah extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Matakuliah.belongsToMany(models.Mahasiswa, {
        through: models.Kontrak,
        foreignKey: 'matkulId'
      })
      Matakuliah.hasMany(models.Kontrak, {
        sourceKey: 'id',
        foreignKey: 'matkulId'
      })
    }
  };

  Matakuliah.init({
    namaMatkul: DataTypes.STRING,
    sks: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Matakuliah',
  });
  return Matakuliah;
};