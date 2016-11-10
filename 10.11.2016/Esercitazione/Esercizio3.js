function Persona( nome, cognome, indirizzo )
{
  this.nome = nome;
  this.cognome = cognome;
  this.indirizzo = indirizzo;
};

var persone = new Array();

var p1 = new Persona("Francesco" , "Villella", "FV");
var p2 = new Persona("Armando", "Pezzimenti", "AP");

persone[0] = p1;
persone[1] = p2;
