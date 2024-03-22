# Docs
## Sending Messages to a Service Bus Queue
- Create a `ServiceBusClient` instance.
- Create a sender by calling the `createSender` method on the `ServiceBusClient` instance.
- [Mock passport data](https://github.com/rtasalem/passport-data-sender/blob/main/app/mock-data.js) was created and passed through an asynchronous function called [`sendToQueue`](https://github.com/rtasalem/passport-data-sender/blob/main/app/send-to-queue.js).
## Environment Variables (.env)
The `.env` file for this project should contain the following:
```
ASB_CONN_STR=
ASB_QUEUE=
```