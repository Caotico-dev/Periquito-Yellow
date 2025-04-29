// Mutaciones dominantas "Do"
// Mutaciones recesivas "Rec"
// Mutaciones ligadas al sexo "Lsex"

// Colores como Map
const ColoresMap = new Map([
  ["Verde", "Do"],
  ["Cara Amarilla", "Do"],
  ["Cara Negra", "Do"],
  ["Azul", "Rec"]
]);

// PatronM como Map (unificamos las claves)
const PatronMMap = new Map([
  ["Pio Dominante", "Doc"],
  ["Perlado", "Doc"],
  ["Ancestral", "Doc"],
  ["Opalino", "LSex"],
  ["Pio Recesivo", "Rec"]
]);

// PatronP como Map (unificamos claves en una sola propiedad)
const PatronPMap = new Map([
  ["Alas Claras", "ACRec"],
  ["Alas grises", "AGRec"],
  ["Diluido", "DRec"],
  ["Fallow", "FRec"],
  ["Alas Negras", "ANRec"],
  ["Albino", "LSex"],
  ["Lutino", "LSex"],
  ["Canela", "CLSex"],
  ["Lacewing", "GLSex"],
  ["Texas", "TSex"]
]);

export { ColoresMap, PatronMMap, PatronPMap };