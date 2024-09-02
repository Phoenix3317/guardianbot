import { Bot, webhookCallback } from "grammy";

const token = process.env.TOKEN;
if (!token) throw new Error("Need bot token");

const bot = new Bot(token);

bot.command("start", ctx => {
    ctx.reply("Hello world!");
});

bot.on("message", ctx => {
    ctx.reply("You say: " + ctx.message.text);
});

export default webhookCallback(bot, "std/http");