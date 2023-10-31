!eval (() => {
    const pm2 = require("pm2");

    this.bot.discordBot.client.on("messageCreate", (message) => {
        if (message.content === "!getpm2") {
            pm2.list((err, list) => {
                var all_names = [];
                for (var i in list) {
                    all_names[i] = list[i]["name"];
                }
                message.reply("All PM2 processes: \n" + all_names.join("\n"));
            });
        }
    });
})();