require('dotenv').config({ path: '../.env' })
const { ServiceBusClient } = require('@azure/service-bus')
const messages = require('./mock-data')

const connectionString = process.env.ASB_CONN_STR
const queue = process.env.ASB_QUEUE
const sbClient = new ServiceBusClient(connectionString)
const sender = sbClient.createSender(queue)

const sendToQueue = async (message) => {
  try {
    const sbMessages = messages.map((msg) => {
      return {
        body: JSON.stringify(msg)
      }
    })
    await sender.sendMessages(sbMessages)
    console.log(`${sbMessages.length} messages sent to queue: ${queue}`)
  } catch (error) {
    console.error(`Error sending messages to ${queue}: `, error)
  } finally {
    await sender.close()
    await sbClient.close()
  }
}

sendToQueue()
