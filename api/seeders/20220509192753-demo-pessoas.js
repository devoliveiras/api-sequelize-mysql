'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.bulkInsert('Pessoas', [
    {
      nome: 'Rocha',
      ativo: true,
      email: 'rocha@rocha.com',
      role: 'docente',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      nome: 'Pedro',
      ativo: true,
      email: 'pedro@pedro.com',
      role: 'estudante',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      nome: 'Julia',
      ativo: true,
      email: 'julia@julia.com',
      role: 'estudante',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      nome: 'Nina',
      ativo: true,
      email: 'nina@nina.com',
      role: 'docente',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      nome: 'Matheus',
      ativo: true,
      email: 'matheus@matheus.com',
      role: 'estudante',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      nome: 'Denise',
      ativo: true,
      email: 'denise@denise.com',
      role: 'docente',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      nome: 'Stucchi',
      ativo: false,
      email: 'stucchi@stucchi.com',
      role: 'docente',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      nome: 'Rafael',
      ativo: false,
      email: 'rafael@rafael.com',
      role: 'estudante',
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ], {});

  },

  async down (queryInterface, Sequelize) {

    await queryInterface.bulkDelete('Pessoas', null, {});
  
  }
};
