// Mutaciones dominantas "Do"
// Mutaciones recesivas "Rec"
// Mutaciones ligadas al sexo "Lsex"

// Colores como Map
const ColoresMap = new Map([
  ["Verde", "Do"],
  ["Cara Amarilla", "Do"],
  ["Cara negra", "Do"],
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
  ["Alas Claras", "Rec"],
  ["Alas grises", "Rec"],
  ["Diluido", "Rec"],
  ["Fallow", "Rec"],
  ["Alas Negras", "Rec"],
  ["Albino", "Rec"],
  ["Lutino", "Rec"],
  ["Canela", "Rec"],
  ["Lacewing", "Rec"],
  ["Texas", "Rec"]
]);

export { ColoresMap, PatronMMap, PatronPMap };