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

const containingP = () => {
  arr.forEach((string) => {
    if (string.includes("p" || "P")) {
      result.push(string);
    }
  });
};
containingP();
console.log(result);


let array = ["Apple", "Orange", "Banana", "Strawberry", "Grape", "Mango", "Melon",
"Pineapple", "Peach", "Peach"];

let resultado = array.find(element => element === 'Grape');

console.log(resultado);

