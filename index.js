const date = () => {
  return new Date().toLocaleString('es-Es')
}

const info = message => {
  console.log(`${date()} [INFO] ${message}`)
}

exports.info = info
