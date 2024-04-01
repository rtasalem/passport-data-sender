require('dotenv').config({ path: '../.env' })
const sendToQueue = require('./send-messages/send-to-queue')

sendToQueue()