//=============『 Utama 』================== //
global.owner = ['4365070002069'] 
global.mods = [] 
global.prems = [] 

//=============『 Info Owner 』============== //
global.nameowner = 'Hendraaaa.'
global.numberowner = '4365070002069'
global.instagram = ''
global.github = ''
global.dana = '083181085070'
global.pulsa = '083181085070'
global.gopay = '083181085070'

//=============『 Info Bot 』=================//
global.namebot = 'Hendra-Md'
global.gc = ''
global.web = '' //ubah jadi website lu, bisa link ig, link github, link yt, klo link gc ntr beda tampilan lagi. 
global.price1 = '1 bulan = 10.000\n2 Minggu 7.000\n1 Minggu 5.000'

//=======『 Tampilan Dan Lainnya 』============//
global.fotonya1 = '' //ganti jadi foto bot mu
global.fotonya2 = '' //ini juga ganti 
global.lolkey = 'Papah-Chan' //biar mudah ngegantinya semisal apikeynya expired:v
global.zenzkey = 'BagasPrdn' //ganti jadi apikey lu kalau expired
global.wm = 'hendra-𝙼𝙳'
global.watermark = wm
global.wm2 = '                     「 𝚂𝙷𝙸𝚁𝙾-𝙼𝙳 あ⁩ 」'
global.wm3 = '⫹⫺ hendra-𝙼𝙳'
global.htki = '––––––『' 
global.htka = '』––––––'
global.media = ''
global.fla = '&text='
global.wait = '_*tunggu sedang di proses...*_'
global.eror = '_*Server Error*_'
global.benar = 'Benar ✅\n'
global.salah = 'Salah ❌\n'
global.stiker_wait = 'Stiker sedang dibuat'
global.packname = '2022'
global.author = '© Hendra dek'

//=============『 Apikey 』================== //
global.APIs = { // API Prefix
  // name: ''
  amel: '',
    bx: '',
  dhnjing: '',
  hardianto: '',
  jonaz: '',
  neoxr: '',
  nrtm: '',
  xteam: '',
  nzcha: '',
  bg: '',
  fdci: '',
  dzx: '',
  bsbt: '',
  zahir: '',
  zeks: '',
  zekais: '',
  hardianto: '',
  pencarikode: '', 
  erdwepe: '',
  lolhuman: '',
  LeysCoder: '',
  rey: ''
}
global.APIKeys = { // APIKey Here
  // '': 'apikey'
  '': 'elaina',
  '': 'apirey',
  '': 'd37372311698ed1d',
  '': 'zahirgans',
  '': 'benniismael',
  '': 'apivinz',
  '': 'hardianto',
  '': 'pais', 
  '': 'dappakntlll',
  '': 'apikeymu',
  '': 'Hendrabotz',
}

//=============『 RPG GAMES 』================== //
global.multiplier = 69 // The higher, The harder levelup
global.rpg = {
  emoticon(string) {
    string = string.toLowerCase()
    let emot = {
      exp: '✉️',
      money: '💵',
      potion: '🥤',
      diamond: '💎',
      common: '📦',
      uncommon: '🎁',
      mythic: '🗳️',
      legendary: '🗃️',
      pet: '🎁',
      sampah: '🗑',
      armor: '🥼',
      sword: '⚔️',
      kayu: '🪵',
      batu: '🪨',
      string: '🕸️',
      kuda: '🐎',
      kucing: '🐈' ,
      anjing: '🐕',
      petFood: '🍖',
      gold: '👑',
      emerald: '💚'
    }
    let results = Object.keys(emot).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string))
    if (!results.length) return ''
    else return emot[results[0][0]]
  }
}

//===========『 Jangan Di Ubah 』================ //
let fs = require('fs')
let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})
