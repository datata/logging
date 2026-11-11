const chalk = require('chalk')

const date = () => {
  return new Date().toLocaleString('es-Es')
}

const info = message => {
  console.log(chalk.blue(`[INFO] [${date()}] ${message}`))
}

exports.info = info
