const cheerio = require('cheerio')
const request = require('request')
const fs = require('fs')

const dataStream = fs.createWriteStream('screamedData.txt')

request('https://www.oxfordlearnersdictionaries.com/wordlists/oxford3000-5000')