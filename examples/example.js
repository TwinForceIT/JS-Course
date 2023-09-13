const array1 = [5, 12, 8, 130, 44];

const found = array1.find((element) => element > 10);

console.log(found);
// Expected output: 12

//---------------------------------------------------------------------------------------------------------------------

const array2 = [5, 12, 8, 130, 44];

const found2 = array2.filter((element) => element > 10);

console.log(found2);
// Expected output: [12, 130, 44]

//---------------------------------------------------------------------------------------------------------------------

const array3 = [
  {
    id: 1,
    name: "Opowiesci o starej angula",
  },
  {
    id: 2,
    name: "opowiesci o starej gurdaka",
  },
];

const found3 = array3.find(
  (element) => element.name === "opowiesci o starej gurdaka"
);

console.log(found3);
// Expected output:   {
//  id: 2,
//  name: "opowiesci o starej gurdaka",
//  },
