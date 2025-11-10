const { Kafka } = require('kafkajs');

const kafka = new Kafka({
    clientId: 'inventory-service',
    brokers: [process.env.KAFKA_BROKER],
    ssl: true,
    sasl: {
        mechanism: 'scram-sha-256',
        username: process.env.KAFKA_USERNAME,
        password: process.env.KAFKA_USER_PASSWORD,
    },
});

const producer = kafka.producer();
const consumer = kafka.consumer({ groupId: 'inventory-group' });


module.exports = { kafka, producer, consumer };