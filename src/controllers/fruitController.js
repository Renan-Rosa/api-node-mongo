const Fruit = require('../models/fruitModel');

// Obter todas as frutas
exports.getAllFruits = async (request, reply) => {
  try {
    console.log("Obtendo todas as frutas")
    const fruits = await Fruit.find();
    reply.send(fruits);
  } catch (err) {
    reply.code(500).send(err);
  }
};

// Obter uma fruta por ID
exports.getFruitById = async (request, reply) => {
  try {
    console.log("Obtendo fruta pelo ID")
    const fruit = await Fruit.findById(request.params.id);
    if (!fruit) {
      reply.code(404).send({ message: 'Fruta não encontrada' });
      return;
    }
    reply.send(fruit);
  } catch (err) {
    reply.code(500).send(err);
  }
};

// Criar uma nova fruta
exports.createFruit = async (request, reply) => {
  try {
    console.log("Criando um nova fruta")
    const newFruit = new Fruit(request.body);
    const savedFruit = await newFruit.save();
    reply.code(201).send(savedFruit);
  } catch (err) {
    reply.code(500).send(err);
  }
};

// Atualizar uma fruta por ID
exports.updateFruit = async (request, reply) => {
  try {
    console.log("Atualizando uma fruta pelo ID")
    const updatedFruit = await Fruit.findByIdAndUpdate(request.params.id, request.body, { new: true });
    if (!updatedFruit) {
      reply.code(404).send({ message: 'Fruta não encontrada' });
      return;
    }
    reply.send(updatedFruit);
  } catch (err) {
    reply.code(500).send(err);
  }
};

// Deletar uma fruta por ID
exports.deleteFruit = async (request, reply) => {
  try {
    console.log("Deletando uma fruta pelo ID")
    const deletedFruit = await Fruit.findByIdAndDelete(request.params.id);
    if (!deletedFruit) {
      reply.code(404).send({ message: 'Fruta não encontrada' });
      return;
    }
    reply.send({ message: 'Fruta deletada com sucesso' });
  } catch (err) {
    reply.code(500).send(err);
  }
};
