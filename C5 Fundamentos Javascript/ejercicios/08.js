function esNumeroEntero(numero) {
  // La función recibe un argumento llamado numero.
  // Verifica si este es un número entero o no.
  // Retorna true si lo es, de lo contrario, retorna false.
  // Por ejemplo: 
  // 24 ---> true 
  // -1212 ---> true 
  // 121.212 ---> false 
  // Tu código:
  if (numero === Math.floor(numero)) {
    return true;
  } else {
    return false;
}  }
//ok
module.exports = esNumeroEntero;

esNumeroEntero (24);
esNumeroEntero (-1212);
esNumeroEntero (121.212);
