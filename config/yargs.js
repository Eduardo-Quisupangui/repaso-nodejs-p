let opc = {
    id: {
        demand: true,
        alias: 'i'
    }
}

const argv = require('yargs')
    .command('id', 'imprime en consola', opc)
    .help()
    .argv;

module.exports = {
    argv
}