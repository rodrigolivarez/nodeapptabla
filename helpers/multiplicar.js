const fs = require('fs');
const { argv } = require('process');
var colors = require('colors');



const crearArchivo = async (base = 5, blistar = false, hasta = 10) => {


    try {


        let salida = '';
        let consola = '';


        for (let n = 1; n <= hasta; n++) {
            salida += `${base}x${n}=${n * base}\n`;
            consola += `${colors.yellow(base)}x${colors.yellow(n)}=${colors.bgBlue(n * base)}\n`;
        }
        
        if (blistar) {
            
            console.log('=========='.green)
            console.log('Tabla del:'.green, colors.yellow(base))
            console.log('=========='.green)
            
            console.log(salida)
        }
        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);

        return `tabla de ${base}.txt creado `.rainbow;
    } catch {
        throw err;
    }


}


module.exports = {
    crearArchivo: crearArchivo
}









