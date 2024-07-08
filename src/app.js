const fastify = require('fastify')({ logger: true });
const mongoose = require('mongoose');
const fruitRoutes = require('./routes/fruitRoutes');
require('dotenv').config(); // Load the environments


// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  fastify.log.info('MongoDB conectado ✅');
}).catch(err => {
  fastify.log.error(err);
});

// Routes Register
fastify.register(fruitRoutes, { prefix: '/api/fruits' });


// Initialized API
fastify.listen({ port: process.env.PORT, host: '0.0.0.0' }).then(() => {
    console.log(`HTTP server running 🚀 on port ${process.env.PORT}`)
})
