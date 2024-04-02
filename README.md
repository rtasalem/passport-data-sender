# Passport Data Sender
Simple Node.js application for sending mock passport data to a Service Bus queue.
This repo is 1 of 3 that was created based on a [Service Bus exercise](https://github.com/rtasalem/passport-data-sender/blob/main/docs/node-asb-exercise.png). Application 1 (this application) sends messages to a Service Bus queue. Those same messages were then received by application 2 and then sent to a Service Bus topic. Application 3 will again receive those same messages, but from the topic rather than directly from the original queue. Application 3 also has the functionality to send the messages received from the original topic to another topic.:
1. [passport-data-sender](https://github.com/rtasalem/passport-data-sender)
2. [passport-data-receiver](https://github.com/rtasalem/passport-data-receiver)
3. [passport-data-subscriber](https://github.com/rtasalem/passport-data-subscriber)
## Documentation
Refer to the [documentation](https://github.com/rtasalem/passport-data-sender/blob/main/docs/DOCS.md) for detailed notes on development.
## Getting Started
Run the following command to send messages to the Service Bus queue:
```
cd app && node index
```
