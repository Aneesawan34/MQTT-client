var mqtt = require('mqtt')
var client  = mqtt.connect('mqtt://192.168.0.101');
client.on('connect', function () {
    client.subscribe('#');
})
client.on('message', function (topic, message) {
context_1 = topic.toString();
context_2 = message.toString();
console.log(context_1+":"+context_2);
})