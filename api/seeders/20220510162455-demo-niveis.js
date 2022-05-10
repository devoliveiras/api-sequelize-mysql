module.exports = {
  up: (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert('Niveis', [
			{
				desc_nivel: 'básico',
				createdAt: new Date(),
				updatedAt: new Date()			
			},
			{
				desc_nivel: 'intermediário',
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				desc_nivel: 'avançado',
				createdAt: new Date(),
				updatedAt: new Date()
			} 
	], {})
  },

  down: (queryInterface, Sequelize) => {
		return queryInterface.bulkDelete('Niveis', null, {})
  }
}
