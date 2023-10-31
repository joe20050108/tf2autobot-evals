!eval (() => {
    const pm2 = require("pm2");
    pm2.list((err, list) => {
        pm2.sendDataToProcessId({
            id: list[1]["pm_id"],
            sender_id: list[0]["pm_id"],
            type: 'process:msg',
            data: "hi",
            topic: "autobus"
        }, (err, res) => {

        });
    });
    process.on('message', (message) => {
        console.log("The other process has sent me the following:");
        console.log(message.data);
        this.bot.discordBot.client.channels.cache.get("1164769418937643018").send(message.data);
    });
})();