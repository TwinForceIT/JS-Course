let shoppingArray = ["bulki", "ryz", "kurczak", "banany", "jogurt", "sok"];

function addToShoppingArray(item) {
  shoppingArray.push(item);
}

addToShoppingArray("woda");

console.log(shoppingArray);

const czyZawiera = (item) => {
  if (!shoppingArray.includes(item)) {
    console.log(`ta lista nie zawiera ${item}`);
    return;
  }
  console.log(`ta lista zawiera ${item}`);
};

export const runTask1 = () => {
  czyZawiera("dupa");
};
