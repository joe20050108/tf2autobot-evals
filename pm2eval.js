!eval (() => {
    const { execFile } = require("node:child_process");
    execFile("pm2", ["start", "name"]);
})();