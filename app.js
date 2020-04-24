var colors = require('colors/safe');
const argv = require('./config/yargs').argv



const { getInfoArchivos, listarTabla, mostrar } = require(`./procesos/procesos`); //destructuracion llamo directo a la funcion 
let comando = argv._[0];
let id = argv.id;

switch (comando) {
    case 'id':

        getInfoArchivos(id)
            .then(mensaje => console.log(colors.blue(mensaje)))
            .catch(err => {
                console.log("error es ", colors.green(err));
            });
        break;

    case 'listar':
        listarTabla()
        break;
    case 'mostrar':
        mostrar()
            .then(mensaje => console.log(colors.blue(mensaje)))
            .catch(err => {
                console.log("erro en :", colors.green(err));
            })
        break;
    default:
        console.log('comando no valido');
}

//.then(mensaje => console.log(colors.blue(mensaje)))
//          .catch(err => console.log(colors.red(err)));