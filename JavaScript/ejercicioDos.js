let arr = [
  "Apple",
  "Orange",
  "Banana",
  "Strawberry",
  "Grape",
  "Mango",
  "Melon",
  "Pineapple",
  "Peach",
  "Peach",
];

let result = [];

//BUSCAR COINCIDENCIAS CON LA LETRA p
const containingP = () => {
  arr.forEach((string) => {
    if (string.includes("p" || "P")) {
      result.push(string);
    }
  });
};
containingP();
console.log(result);



//Buscar exactamente la palabra 'Grape'
let resultado = arr.find(element => element === 'Grape');

console.log(resultado);

