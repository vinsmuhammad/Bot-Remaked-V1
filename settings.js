/**
   * Made By Code Crew Team 🕴️
   * Subscribe NZRLAFNDI
   * Follow https://github.com/NzrlAfndi
*/

const fs = require('fs')
const chalk = require('chalk')

global.ownerNumber = ['628813917475','628813917475']
global.ownerName = 'GarVinCG'

global.botName = 'AzurFlane Bot V2.1'
global.footer = 'By GarVinCG'
global.thumb = 'https://telegra.ph/file/71c196cc44dbe175c72c0.jpg'
global.payment = 'https://telegra.ph/file/0942429295acf18bec623.jpg'

global.packname = 'Powered By'
global.author = 'GarVinCG'

global.prefa = ['','.','#','!']

global.quotes = {
  welcome: 'Semoga Kamu Betah Berada Disini Dan Jangan Lupa Untuk Selalu Mengikuti Rules Yang Ada',
  leave: 'Jangan Lupa Mampir Lagi'
}

global.mess = (type, m) => {
  let msg = {
    done: 'Done',
    wait: 'Wait, in progress',
    owner: 'Perintah ini hanya dapat digunakan oleh Owner!',
    premium: 'Perintah ini hanya dapat digunakan oleh Premium!',
    group: 'Perintah ini hanya dapat digunakan di group!',
    private: 'Perintah ini hanya dapat digunakan di private chat!',
    admin: 'Perintah ini hanya dapat digunakan oleh admin group!',
    botAdmin: 'Bot bukan admin, tidak dapat mengakses fitur tersebut',
    bot: 'Fitur ini hanya dapat diakses oleh Bot',
    dead: 'Fitur ini sedang dimatikan!',
    media: 'Reply media',
    error: "No Results Found"
  } [type]
  if (msg) return m.reply(msg, m.from, { quoted: m })
}

//===> JANGAN DI HAPUS
let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update'${__filename}'`))
delete require.cache[file]
require(file)
})
