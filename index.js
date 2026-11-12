const chalk = require('chalk')
const fs = require('fs')

const date = () => {
  return new Date().toLocaleString('es-Es')
}
const stream = fs.createWriteStream('log.txt', { flags: 'a' })
const info = message => {
  const logMessage = `[INFO] [${date()}] ${message}\n`
  console.log(chalk.blue(logMessage))
  stream.write(logMessage)
}

function close() {
  console.log('Close logger!')
  stream.end()
}

exports.info = info
exports.close = close
