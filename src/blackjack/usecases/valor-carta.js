
/**
 * Obtener el valor de la carta asignada
 * @param {String} carta 
 * @returns {Number} valor de la carta
 */
export const valorCarta = (carta) => 
{
    const primerValor = carta.substring(0, carta.length-1);
    
    // Uso de función isNan: is Not a Number, es decir se evalúa que no sea un número.
    return (isNaN(primerValor)) ? primerValor === 'A' ? 11 : 10 : primerValor * 1;
    
}