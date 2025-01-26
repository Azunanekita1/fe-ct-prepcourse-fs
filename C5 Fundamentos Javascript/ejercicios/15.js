function esPar(num) {
  // La función recibe un argumento llamado num.
  // Retorna true si el argumento "num" es par.
  // De lo contrario, retorna false.
  // Por ejemplo: 
  // 14 ---> true
  // 15 ---> false
  // Tu código:
if (num % 2 === 0) { // si el residuo es cero 0 es par
  return true;
} else {return false; 

}
}

esPar(14);
esPar(15);
module.exports = esPar;
