function esNumeroEntero(numero) {
  // La función recibe un argumento llamado numero.
  // Verifica si este es un número entero o no.
  // Retorna true si lo es, de lo contrario, retorna false.
  // Por ejemplo: 
  // 24 ---> true 
  // -1212 ---> true 
  // 121.212 ---> false 
  // Tu código:
  if  (numero === 1) {
    console.log ("true");
  } else if (numero === -1){
    console.log("Es entero con negativo");

  } else { console.log("No es entero");}
  }

esNumeroEntero (1);
esNumeroEntero (3);
esNumeroEntero (-1);
esNumeroEntero (24);
esNumeroEntero (0);
