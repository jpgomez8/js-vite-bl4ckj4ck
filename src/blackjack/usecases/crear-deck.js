import _ from 'underscore';


/**
 * Función para crear una nueva baraja.
 * @param {Array<String>} tiposDeCarta Ej: ['C', 'D', 'H', 'S']
 * @param {Array<String>} tiposEspeciales Ej: ['A', 'J', 'Q', 'K']
 * @returns {Array<String>} Retorna un nuevo deck de cartas
 */
export const crearDeck = (tiposDeCarta, tiposEspeciales) => //Exportación independiente
{
    if(!tiposDeCarta || tiposDeCarta.length === 0) 
        throw new Error('TiposDeCarta es obligatorio como un arreglo de string');
    
        if(!tiposEspeciales || tiposEspeciales.length === 0) 
        throw new Error('TiposEspeciales es obligatorio como un arreglo de string');

    let deck = []; //Reinicializa el deck
    for (let i = 2; i <= 10; i++) { 
        for (let tipo of tiposDeCarta) { // Recorre el array [tipos]
            deck.push(i + tipo); // Agrega en el array [deck] el numero de la carta y su tipo. EJ: ['2C', '2D', '2H', '2S', '3C', '3D', '3H', '3S', '4C', '4D', '4H', '4S', '5C', '5D', '5H', '5S', '6C', '6D', '6H', '6S', '7C', '7D', '7H', '7S', '8C', '8D', '8H', '8S', '9C', '9D', '9H', '9S', '10C', '10D', '10H', '10S']
        }
    }

    for (let tipo of tiposDeCarta) {
        for(let otra of tiposEspeciales){
            deck.push(otra + tipo);
        }
    }

    // Se utiliza libreria UNDERSCORE "guionbajo" y se utiliza la propiedad shuffle, ordena aleatoriamente un array
    // Ej: _.shuffle(arreglo);  ['C', 'D', 'H', 'S'] ['D', 'C', 'S', 'H'] ['H', 'S', 'D', 'C'] 
    return _.shuffle(deck); 
}

// export default crearDeck(); Exportacion por defecto