const fastify = require('fastify')({ logger: true });
const mongoose = require('mongoose');
const fruitRoutes = require('./routes/fruitRoutes');
require('dotenv').config(); // Carregar variáveis de ambiente do arquivo .env


// Conectar ao MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  fastify.log.info('MongoDB conectado ✅');
}).catch(err => {
  fastify.log.error(err);
});

// Registrar rotas
fastify.register(fruitRoutes, { prefix: '/api/fruits' });


// Inicializa a API
fastify.listen({ port: 3000, host: '0.0.0.0' }).then(() => {
    console.log("HTTP server running 🚀")
})
