'use strict';
module.exports = {
  up:  (queryInterface, Sequelize) => {
    return queryInterface.createTable('Kontraks', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      mahasiswaId: {
        type: Sequelize.INTEGER,
        references:{
          model:{
            tableName:'Mahasiswas'
          },
          key:'id'
        },
        onUpdate:'CASCADE',
        onDelete:'CASCADE'
      },
      matkulId: {
        type: Sequelize.INTEGER,
        references:{
          model:{
            tableName:'Matakuliahs'
          },
          key:'id'
        },
        onUpdate:'CASCADE',
        onDelete:'CASCADE'
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down:  (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Kontraks');
  }
};