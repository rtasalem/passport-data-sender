# Documentation

## Prerequisites

- Service Bus created on Azure portal. For this application, a queue must exist within the Service Bus.

## Sending Messages to a Service Bus Queue

- Create a `ServiceBusClient` instance.
- Create a sender by calling the `createSender` method on the `ServiceBusClient` instance.
- [Mock passport data](https://github.com/rtasalem/passport-data-sender/blob/main/app/send-messages/mock-data.js) was created and passed through an asynchronous function called [`sendToQueue`](https://github.com/rtasalem/passport-data-sender/blob/main/app/send-messages/send-to-queue.js).

## Environment Variables (.env)

The `.env` file for this project should contain the following:

```
ASB_CONN_STR=
ASB_QUEUE=
```

## Sending a Batch to a Service Bus Queue

- Similar to the above, create a `ServiceBusClient` instance and a sender.
- [Mock response data](https://github.com/rtasalem/passport-data-sender/blob/main/app/send-messages-batch/mock-responses.js) was created and passed through an asynchronous function called [sendBatchToQueue](https://github.com/rtasalem/passport-data-sender/blob/main/app/send-messages-batch/send-batch.js).
- The method for sending messages as a batch was largely taken from the documentation for the [Azure SDK on npmjs.com](https://www.npmjs.com/package/@azure/service-bus#send-messages).


- It's important to note that using the examples provided in the Azure SDK docs, the following error was thrown: `TypeError: Provided value for 'message' must be of type: ServiceBusMessage or AmqpAnnotatedMessage.` and that the `for loop` would be flagged, with the warning that it was instead expected to be a `for-of loop`. The solution to this was converting the `responses` to a string so that they could be accepted and sent to the queue:

```
 const message = {
        body: JSON.stringify(response),
        contentType: 'application/json'
      }
```

The change to a `for loop` to a `for-of loop` is shown below (again, note both `for/for-of loops` can send messages as a batch to the queue).<br><br>
`for loop`:

```
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
```
`for-of loop`:
```
    for (const response of responses) {
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
```
