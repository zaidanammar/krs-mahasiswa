'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Mahasiswa extends Model {
    //untuk helper alamat jadi huruf besar 
    get alamatUpper() {

      return `${this.alamat[0].toUpperCase() + this.alamat.slice(1)}`
    }

    get jurusanCode() {

        return this.jurusan.split('_').join(' ')
    }

    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Mahasiswa.belongsToMany(models.Matakuliah,{
        through:models.Kontrak,
        foreignKey:'mahasiswaId'
      })
      Mahasiswa.hasMany(models.Kontrak,{
        sourceKey:'id',
        foreignKey:'mahasiswaId'
      })
    }
  };
  Mahasiswa.init({
    nama: DataTypes.STRING,
    nim: DataTypes.STRING,
    alamat: DataTypes.STRING,
    jurusan: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Mahasiswa',
  });

  return Mahasiswa;
};