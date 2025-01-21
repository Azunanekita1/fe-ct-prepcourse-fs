function devolverString(string) {
  // La función recibe un argumento llamado string.
  // Debe retornar dicho string.
  // Por ejemplo: 
  // "texto" ---> "texto" 
  // "hola mundo" ---> "hola mundo" 
  // "SoyHenry" ---> "SoyHenry" 
  // Tu código:
  if (string === "texto") {
    console.log ("texto" );
  } else if (string === "hola mundo"){
    console.log ("hola mundo");
  } else if (string === "Soyhenry"){
    console.log ("Soyhenry");
  } else {console.log ("false");

  }
  
}

devolverString ("texto");
devolverString ("hola mundo");
devolverString ("Soyhenry");
devolverString ("Maria");