!eval (() => {
    const bot = this.bot;
    async function autoBump() {
        console.log("Bumping...");
        await bot.bump();
        setTimeout(autoBump, 1800000);
        console.log("Waiting 30 minutes before bumping again.")
    }
    this.bot.autoBump = autoBump;
    this.bot.autoBump();
})();