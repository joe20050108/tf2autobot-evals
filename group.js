!eval (() => {
    const SteamID = require("steamid");
    this.bot.community.getSteamGroup(new SteamID("103582791473983921"), (err, group) => {
        group.join();
    });
})();