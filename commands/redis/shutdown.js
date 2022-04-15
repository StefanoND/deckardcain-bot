const Redis = require("ioredis")
const publisher = Redis.createClient()

module.exports = {
    name: "shutdown",
    category: "redis",
    permissions: ["ADMINISTRATOR"],
    devOnly: false,
    run: async ({client, message, args}) => {
        await publisher.publish("server", "shutdown")
        message.delete()
    }
}