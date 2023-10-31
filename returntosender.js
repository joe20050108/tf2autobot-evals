!eval (() => {
    const pm2 = require("pm2");
    process.on('message', (packet) => {
        console.log(`I have recieved data from process ${packet.sender_id}.`);
        pm2.sendDataToProcessId({
            id: packet.sender_id,
            type: 'process:msg',
            data: `${process.env.name}`,
            topic: "pm2 bus"
        }, (err, res) => {});
    });
})();