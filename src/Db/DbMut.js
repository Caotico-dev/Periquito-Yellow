// Color dominantes
const ColorD = [
  { Color: "Verde", Mutación: "Do" },
  { Color: "Cara Amarilla", Mutación: "Do" },
  { Color: "Cara negra", Mutación: "Do" },
];


// Color recesivos
const ColorR = [{ Color: "Azul", Mutación: "Rec" }];


export { ColorD, ColorR };

// Mutacion patron dominantes
const PatronM = [
  { PatronM: "Pio Dominante", Mutacion: "Doc" },
  { PatronM: "Perlado", Mutacion: "Doc" },
  { PatronM: "Ancestral", Mutacion: "Doc" },
];
// Mutacion patron recesivas
const PatronR = [
  { PatronR: "Pio Recesivo", Mutacion: "Rec" }
]
// Mutacion patron ligada al sexo
const PatronL = [
  { PatronL: "Opalino", Mutación: "LSex" }
]
// Mutacion patron plumas
const PatronPR = [
  { PatronPR: "Alas Claras", Mutación: "Rec" },
  { PatronPR: "Alas grises", Mutación: "Rec" },
  { PatronPR: "Diluido", Mutación: "Rec" },
  { PatronPR: "Fallow", Mutación: "Rec" },
  { PatronPR: "Alas Negras", Mutación: "Rec" },
]
const PatronPL = [
  { PatronPL: "Albino", Mutación: "Rec" },
  { PatronPL: "Lutino", Mutación: "Rec" },
  { PatronPL: "Canela", Mutación: "Rec" },
  { PatronPL: "Lacewing", Mutación: "Rec" },
  { PatronPL: "Texas", Mutación: "Rec" },
]

export { PatronM, PatronR, PatronL, PatronPR, PatronPL };