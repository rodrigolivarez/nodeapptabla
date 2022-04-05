const { describe } = require('yargs');
var colors = require('colors');




const argv = require('yargs')


    .option('b', {
        alias: 'base',
        type: 'number',
        describe: 'es la base de la multiplicacion'
    })
    .option('l', {
        alias: 'listar',
        type: 'boolean',
        default: false,
        describe: 'muestra la tabla en consola'
    })
    .option('h', {
        alias: 'hasta',
        type: 'number',
        default: 10,
        describe: 'indica hasta que numero'
    })


    .check((argv, options) => {
        if (isNaN(argv.b)) {
            throw 'la base tiene que ser un numero'
        }
        return true;
    })
    .argv;






module.exports = argv;