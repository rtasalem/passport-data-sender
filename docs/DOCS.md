# Docs
## Sending Messages to a Service Bus Queue
Sending messages to an Azure Service Bus queue through a Node.js application was possible by creating an instance of the ServiceBusClient using the [Azure Service Bus SDK](https://www.npmjs.com/package/@azure/service-bus) and creating a sender. [Mock passport data](https://github.com/rtasalem/passport-data-sender/blob/main/app/mock-data.js) was created and passed through an asynchronous function called [`sendToQueue`](https://github.com/rtasalem/passport-data-sender/blob/main/app/send-to-queue.js).
## Environment Variables (.env)
The `.env` file for this project should contain the following:
```
ASB_CONN_STR=
ASB_QUEUE=
```