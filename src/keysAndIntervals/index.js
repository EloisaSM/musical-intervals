const intervals = [
  "2b",
  "2M",
  "2#",
  "3b",
  "3M",
  "4J",
  "4#",
  "5b",
  "5J",
  "5#",
  "6b",
  "6M",
  "7b",
  "7M",
];

const intervalsType = {
  M: "maior",
  b: "menor",
  '#': "aumentada",
  J: "justa",
}

const intervalsNumberType = {
  '2': 'Segunda',
  '3': 'Terça',
  '4': 'Quarta',
  '5': 'Quinta',
  '6': 'Sexta',
  '7': 'Sétima',
}

const keys = {
  C: "Dó" ,
  D: "Ré" ,
  E: "Mi" ,
  F: "Fá" ,
  G: "Sol" ,
  A: "Lá" ,
  B: "Si" ,
};

module.exports = {
  intervals,
  intervalsType,
  intervalsNumberType,
  keys,
};
