const compression = require('compression')
const cookieParser = require('cookie-parser')
const cors = require('cors')
const express = require('express')
const helmet = require('helmet')
const rateLimit = require('express-rate-limit')
const morgan = require('morgan')
const env = require('./config/env')
const logger = require('./utils/logger')
const { errorHandler, notFound } = require('./middleware/errorHandler')

const app = express()

app.use(helmet())
app.use(compression())
app.use(cors({ origin: env.clientUrl, credentials: true }))
app.use(express.json({ limit: '1mb' }))
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())
app.use(morgan('combined', { stream: { write: (message) => logger.info(message.trim()) } }))
app.use('/api', rateLimit({ windowMs: 15 * 60 * 1000, limit: 180, standardHeaders: true, legacyHeaders: false }))

app.get('/health', (req, res) => res.json({ status: 'ok', service: 'talentforge-api' }))
app.use('/api/auth', require('./routes/auth.routes'))
app.use('/api/resumes', require('./routes/resume.routes'))
app.use('/api/interviews', require('./routes/interview.routes'))
app.use('/api/analytics', require('./routes/analytics.routes'))
app.use('/api/users', require('./routes/user.routes'))

app.use(notFound)
app.use(errorHandler)

module.exports = app
