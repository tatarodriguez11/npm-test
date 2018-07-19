
export default function platzom(str){
    // si la palabra original es un palindromo, nnguna regla anterior cuenta y se devuelve intercalando mayusculas y minusculas
    const reverse = (str) => str.split('').reverse().join('');
    function minMay(str) {
        const length = str.length;
        let traduccion = '';
        let mayuscula = true;
        for (let i = 0; i < length; i++) {
            const char = str.charAt(i)
            traduccion += mayuscula ? char.toUpperCase() : char.toLowerCase()
            mayuscula = !mayuscula
        }
        return traduccion
    }
    if (str == reverse(str)) {
        return minMay(str)
    }
    
    let traduccion= str;
    // Si la palabra termina en ar, se le quitan esos dos caracteres
    if(str.toLowerCase().endsWith("ar")){
    traduccion= str.slice(0,-2)
    
    } 
    // si la palabra inicia con z, se le añade pe al final
if(str.toLowerCase().startsWith("z")){
    traduccion +="pe";
    
}
// si la palabra tiene 10 o mas letras se debe partir a la mtad y unir con un guion medio
const lenght= traduccion.length
if(lenght>=10){
    const primeraMitad= traduccion.slice(0,Math.round(lenght/2))
    const segundaMitad = traduccion.slice(Math.round(lenght / 2))
    traduccion= `${primeraMitad}-${segundaMitad}`
    
}

return traduccion
}

