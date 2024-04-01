const { ServiceBusClient } = require('@azure/service-bus')
const responses = require('./mock-responses')

const connectionString = process.env.ASB_CONN_STR
const sbClient = new ServiceBusClient(connectionString)
const queue = process.env.ASB_RESPONSE_QUEUE
const sender = sbClient.createSender(queue)

const sendBatchToQueue = async (response) => {
  try {
    let batch = await sender.createMessageBatch()

    for (let i = 0; i < responses.length; i++) {
      const response = responses[i]
      const message = {
        body: JSON.stringify(response),
        contentType: 'application/json'
      }
      if (!batch.tryAddMessage(message)) {
        await sender.sendMessages(batch)
        batch = await sender.createMessageBatch()

        if (!batch.tryAddMessage(message)) {
          throw new Error(
            `Message too big to fit in batch. Please send smaller messages`
          )
        }
      }
    }

    await sender.sendMessages(batch)
    console.log(`${responses.length} messages sent as batch to queue: ${queue}`)
  } catch (error) {
    console.error(`Error sending messages to ${queue}: ${error}`)
  } finally {
    await sender.close()
    await sbClient.close()
  }
}

module.exports = sendBatchToQueue
