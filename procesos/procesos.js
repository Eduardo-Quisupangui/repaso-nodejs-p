const fs = require('fs'); //para los archivos
var colors = require('colors');

let base = [{
        id: 1,
        nombre: "Santigo"
    },
    {
        id: 2,
        nombre: "Oscar"
    },
    {
        id: 3,
        nombre: "diego"
    }
];

let sueldos = [{
        id: 1,
        salario: 400
    },
    {
        id: 2,
        salario: 600
    }

];

let getUsuario = (id, callback) => {
    return new Promise((resolve, reject) => {
        let BDusuario = base.find(iterar => iterar.id === id)
        if (!BDusuario) {
            reject(`no exite el usuario ${id}`)
        } else {
            resolve(BDusuario)
        }
    });
}

let getSalario = (base) => {
        return new Promise((resolve, reject) => {
            let BDsueldos = sueldos.find(suel => suel.id === base.id)
            if (!BDsueldos) {
                reject(`no se encontro salario para el empleado ${base.nombre}`)
            } else {
                resolve({ nombre: base.nombre, salario: BDsueldos.salario });

            }
        });
    }
    /*
    let getInformacion = async(id) => {
        let base = await getUsuario(id);
        let resp = await getSalario(base);
        return `El salario de ${resp.nombre} es de  ${resp.salario}`;
    

}
*/
let getInfoArchivos = async(id) => {
    let base = await getUsuario(id);
    let resp = await getSalario(base);
    let resultado = await crearArchivos(resp);
    return ` listo ${resultado} `;


}

let listarTabla = () => {

    for (let i = 1; i <= 3; i++) {

        let BDbase = base.find(suel => suel.id === i)
        let BDsueldos = sueldos.find(suel => suel.id === i)

        if (!BDbase) {
            console.log((`no exites el usuario con id / ${BDsueldos.salario}`.blue));
        } else {
            if (!BDsueldos) {
                console.log((`${BDbase.nombre} / no tiene salario`.green));
            } else {
                console.log((`${BDbase.nombre} / ${BDsueldos.salario}`.yellow));
            }
        }
    }
}

let mostrar = () => {
    return new Promise((resolve, reject) => {
        let BDUsuario = base;
        if (!BDUsuario) {
            reject(`no exite`);
        } else {
            resolve({ nombre: BDUsuario })
        }
    })

}

let crearArchivos = (info) => {
        return new Promise((resolve, reject) => {
            let anual = `${info.nombre } / ${info.salario} / ${info.salario * 12 }`;
            fs.writeFile(`sueldos/informes - ${info.nombre }.txt `, anual, (err) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(` - se creo el archivo `)

                }
            });
        });
    }
    /*
    getInformacion(1)
        .then(mensaje => console.log(mensaje))
        .catch(err => {
            console.log("error es ", err);
        });
    */
module.exports = {
    crearArchivos,
    getInfoArchivos,
    listarTabla,
    mostrar
}

//utilizar la funcion
/*
let ides = 4;
getUsuario(ides)
    .then(BDusuario => {
        console.log("usuario es ", BDusuario); //lo bueno
    }, (err) => { console.log(err); })

getSalario(ides)
    .then(BDsueldos => {
        console.log("el salario es", BDsueldos);
        console.log("su sueldo en un año es ", BDsueldos * 12);
    }, (err) => { console.log(err); })
    
    */
//Eduardo Santiago Quisupangui Lema