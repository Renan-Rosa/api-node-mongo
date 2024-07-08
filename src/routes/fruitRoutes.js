const fruitController = require('../controllers/fruitController');

async function routes(fastify, options) {
  fastify.get('/', fruitController.getAllFruits);
  fastify.get('/:id', fruitController.getFruitById);
  fastify.post('/', fruitController.createFruit);
  fastify.put('/:id', fruitController.updateFruit);
  fastify.delete('/:id', fruitController.deleteFruit);
}

module.exports = routes;
