function Product(name, category, hasDiscount, price) {
  this.name = name;
  this.category = category;
  this.hasDiscount = hasDiscount;
  this.price = price;
}

const products = [
  new Product("Apple", "Food", true, 5),
  new Product("Orange Juice", "Food", false, 25),
  new Product("Eggs", "Food", true, 10),
  new Product("Umbrella", "Accessories", false, 30),
  new Product("Avocado", "Food", true, 22),
  new Product("Notebook", "Stationery", true, 15),
  new Product("Eraser", "Stationery", false, 3),
  new Product("Onion", "Food", true, 8),
  new Product("Ice Cream", "Food", false, 12),
  new Product("Umbrella Stand", "Home", true, 50),
  new Product("Orange", "Food", true, 18),
  new Product("Apple Watch", "Electronics", false, 350),
  new Product("Banana", "Food", false, 4),
  new Product("Ink Pen", "Stationery", true, 7),
  new Product("Olive Oil", "Food", false, 28),
];

const expensiveProducts = products.filter((p) => p.price > 20);
console.log(expensiveProducts);

const discountedFoodNames = products
  .filter((p) => p.category === "Food" && p.hasDiscount)
  .map((p) => p.name);
console.log(discountedFoodNames);

const discountedPrices = products
  .filter((p) => p.hasDiscount)
  .map((p) => p.price);
console.log(discountedPrices);

const vowels = ["A", "E", "I", "O", "U"];
const productsStartingWithVowel = products
  .filter((p) => vowels.includes(p.name[0].toUpperCase()) && !p.hasDiscount)
  .map((p) => ({ name: p.name, price: p.price }));
console.log(productsStartingWithVowel);
