require('dotenv').config({ path: '../.env' })
const sendToQueue = require('./send-to-queue')

sendToQueue()