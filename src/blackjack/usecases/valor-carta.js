
/**
 * Obtener el valor de la carta asignada
 * @param {String} carta 
 * @returns {Number} valor de la carta
 */
export const valorCarta = (carta) => 
{
    const primerValor = carta.substring(0, carta.length-1);
    
    // Uso de funci�n isNan: is Not a Number, es decir se eval�a que no sea un n�mero.
    return (isNaN(primerValor)) ? primerValor === 'A' ? 11 : 10 : primerValor * 1;
    
}