'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = platzom;
function platzom(str) {
    // si la palabra original es un palindromo, nnguna regla anterior cuenta y se devuelve intercalando mayusculas y minusculas
    var reverse = function reverse(str) {
        return str.split('').reverse().join('');
    };
    function minMay(str) {
        var length = str.length;
        var traduccion = '';
        var mayuscula = true;
        for (var i = 0; i < length; i++) {
            var char = str.charAt(i);
            traduccion += mayuscula ? char.toUpperCase() : char.toLowerCase();
            mayuscula = !mayuscula;
        }
        return traduccion;
    }
    if (str == reverse(str)) {
        return minMay(str);
    }

    var traduccion = str;
    // Si la palabra termina en ar, se le quitan esos dos caracteres
    if (str.toLowerCase().endsWith("ar")) {
        traduccion = str.slice(0, -2);
    }
    // si la palabra inicia con z, se le añade pe al final
    if (str.toLowerCase().startsWith("z")) {
        traduccion += "pe";
    }
    // si la palabra tiene 10 o mas letras se debe partir a la mtad y unir con un guion medio
    var lenght = traduccion.length;
    if (lenght >= 10) {
        var primeraMitad = traduccion.slice(0, Math.round(lenght / 2));
        var segundaMitad = traduccion.slice(Math.round(lenght / 2));
        traduccion = primeraMitad + '-' + segundaMitad;
    }

    return traduccion;
}