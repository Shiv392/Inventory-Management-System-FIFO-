const {producer} = require('../config/kafka_config');

const produce_inventory_event = async(event)=>{
await producer.connect();

await producer.send({
    topic : process.env.KAFKA_TOPIC,
    messages : [
        {
            value : JSON.stringify(event)
        }
    ]
});

console.log('event sent to kafka--->', event);
}

module.exports = produce_inventory_event;