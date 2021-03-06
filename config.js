

const fs = require('fs')
const chalk = require('chalk')

// Other
let gg = process.env.MODS
if (!gg) {
	gg = "917003213983"
}
global.owner = (process.env.MODS || '').split(', ')
global.mongodb = process.env.MONGODB || "none"
global.port = process.env.PORT || 8080
global.packname = process.env.PACKNAME || "kaguya",
global.prefix= process.env.PREFIX || "-",
global.author = process.env.AUTHOR || "ARUS",
global.sessionName = 'arus',
global.name = process.env.NAME || "Mizuhara",
global.menu = "š« Mizuhara\'s Command Liste* š«\n\nš» *Dev*\nā ```update, broadcast, ban, unban, chatid, session, join```\n\nš® *General*\nā ```help, delete, info, rank, profile```\n\nš  *Fun*\nā ```ship, advice, quote, leaderboard, react, fact, bot```\n\nš *Media*\nā ```yta, ytv, play, gify, yts, lyrics```\n\nš *Moderation*\nā ```demote, remove, ping, promote, deact, act, invite, group, seticon, setdesc```\n\nš® *Weeb*\nā ```anime, manga, charecter, haigusha, neko, waifu, pokemon```\n\nš *Utils*\nā ```google, image, meme, subreddit, tourl, img, iguser, gif, sticker, take, pinterest, carbon```\n\nšļø *Note: *Calls and Dm will lead you to ban*",
global.thumb = fs.readFileSync('./src/info.jpeg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
