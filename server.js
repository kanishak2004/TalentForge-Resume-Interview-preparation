const app = require('./app')
const connectDB = require('./config/db')
const env = require('./config/env')
const logger = require('./utils/logger')

async function start() {
  try {
    await connectDB()
    app.listen(env.port, () => logger.info(`API listening on port ${env.port}`))
  } catch (error) {
    logger.error('Failed to start server', error)
    process.exit(1)
  }
}

start()
