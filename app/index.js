require('dotenv').config({ path: '../.env' })
const sendToQueue = require('./send-messages/send-to-queue')
const sendBatchToQueue = require('./send-messages-batch/send-batch')

sendToQueue()
sendBatchToQueue()
