const green = (message) => `\x1b[32m${message}\x1b[0m`;
// the codes here are taken from wio.db
const red = (message) => `\x1b[31m${message}\x1b[0m`;

const yellow = (message) => `\x1b[33m${message}\x1b[0m`;

const advertisement = `${yellow("[ CenapDB ] => Information:")} ${green("Come here for help => https://discord.gg/vYkp9aR7at")}`;


class DatabaseError extends Error {
    constructor(message) {
        super(`${red(message)}\n${advertisement}`);
    }

    get name() {
        return yellow(`[ CenapDB ] => ${this.constructor.name}`);
    }
}





module.exports = DatabaseError;