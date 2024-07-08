const Fruit = require('../models/fruitModel');

// GET - Find all the fruits
exports.getAllFruits = async (request, reply) => {
  try {
    const fruits = await Fruit.find();
    reply.send(fruits);
  } catch (err) {
    reply.code(500).send(err);
  }
};

// GET - Find one fruit by ID
exports.getFruitById = async (request, reply) => {
  try {
    const fruit = await Fruit.findById(request.params.id);
    if (!fruit) {
      reply.code(404).send({ message: 'Fruit was not found' });
      return;
    }
    reply.send(fruit);
  } catch (err) {
    reply.code(500).send(err);
  }
};

// POST - Create a fruit
exports.createFruit = async (request, reply) => {
  try {
    const newFruit = new Fruit(request.body);
    const savedFruit = await newFruit.save();
    reply.code(201).send(savedFruit);
  } catch (err) {
    reply.code(500).send(err);
  }
};

// PUT - Update a fruit by ID
exports.updateFruit = async (request, reply) => {
  try {
    const updatedFruit = await Fruit.findByIdAndUpdate(request.params.id, request.body, { new: true });
    if (!updatedFruit) {
      reply.code(404).send({ message: 'Fruit was not found' });
      return;
    }
    reply.send(updatedFruit);
  } catch (err) {
    reply.code(500).send(err);
  }
};

// DELETE - Delete a fruit by ID
exports.deleteFruit = async (request, reply) => {
  try {
    const deletedFruit = await Fruit.findByIdAndDelete(request.params.id);
    if (!deletedFruit) {
      reply.code(404).send({ message: 'Fruit was not found' });
      return;
    }
    reply.send({ message: 'Fruit deleted' });
  } catch (err) {
    reply.code(500).send(err);
  }
};
