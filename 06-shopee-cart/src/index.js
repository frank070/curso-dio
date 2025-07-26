import * as cartService from "./services/cart.js";
import createItem from "./services/item.js";

const myCart = [];

const myWhishList = []; 

console.log("🛍️  Welcome to the your Shopee Cart");

const item1 = await createItem("Noteboll Dell", 5000, 1);
const item2 = await createItem("Mouse Dell sem fio", 89.99, 4);
const item3 = await createItem("Mochila", 159.99, 1);

await cartService.addItem(myCart, item1);
await cartService.addItem(myCart, item2);

// lista de favoritosi
await cartService.addItem(myWhishList, item3);

////remover um item
// -> função comentada para não remover o item do carrinho
// await cartService.removeItem(myCart, item1);

await cartService.displayCart(myCart);

console.log("\n⭐ Whis List products");
await cartService.displayCart(myWhishList);

////deminui um 1 item, se o tem for = 1 deleta
// -> função comentada para não deleta o item do carrinho 
// await cartService.deletaItem(myCart, item3.name);


console.log("\n🛒 Cart");
await cartService.calculeTotal(myCart);

// total lista de desejo
console.log("\n⭐ WhisList");
await cartService.calculeTotal(myWhishList);


