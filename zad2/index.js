const book1 = {
  id: 1,
  tytul: "Bogaty Ojciec. Biedny Ojciec.",
  autor: "Kiyosaki Robert",
  rok: "2018",
};
const book2 = {
  id: 2,
  tytul: "Inteligentny inwestor.",
  autor: "Graham Benjamin",
  rok: "2023",
};
const book3 = {
  id: 3,
  tytul: "Jak zarobiłem 2 000 000 $ na giełdzie",
  autor: "Nicolas Darvas",
  rok: "2023",
};

const bookArray = [book1, book2];

function addBook(book) {
  bookArray.push(book);
  console.log(bookArray);
}
function checkBook(title) {
  const found = bookArray.find((element) => element.tytul === title);
  console.log(found);
}
const title1 = "Bogaty Ojciec. Biedny Ojciec.";
const title2 = "Inteligentny inwestor.";
const title3 = "Jak zarobiłem 2 000 000 $ na giełdzie";

export function runTask2() {
  addBook(book3);
  checkBook(title3);
}
