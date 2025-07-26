// quis ações o meu carrinho pode fazer
// adicionar item
//vetor
async function addItem(userCart, item) {
  userCart.push(item); //adicionando elemento dentro de um vetor
}
//  deletar item
//para deletar um item tenho que passa o carrinho de usuário e nome do item
async function deletaItem(userCart, name) {
  const index = userCart.findIndex((item) => item.name === name); //findIndex, consegue procurar qual index que se enconta no vetor
  if (index !== -1) {
    // -1 referente a index do item, ser for -1 significa que não tem item
    userCart.splice(index, 1); // 1, referente a quantidade que vai ser excluída
  }
}


//remover um item - diminui um item
async function removeItem(userCart, item) {
  const indexFound = userCart.findIndex((p) => p.name === item.name);
  //condição de item não encontrado
  if (indexFound === -1) {
    console.log("item não encontrado");
    return;
  }
  //item > 1 subrair um item, item = 1 deletar o item
  // olhar no carrinho, no index informado a quantidade se é maior que 1
  if (userCart[indexFound].quantity > 1) {
    userCart[indexFound].quantity -= 1;
  }

  if (userCart[indexFound].quantity === 1) {
    userCart.splice(indexFound, 1);
    return;

  }
}
// calcular total
async function calculeTotal(userCart) {

  const result = userCart.reduce((total, item) => total + item.subtotal(), 0);
  const pSubtotal = result.toLocaleString("pt-br", {
    style: "currency",
    currency: "BRL",
  });
  console.log(`💵 Total: ${pSubtotal}`);
}

// função de exibir os itens do cart
async function displayCart(userCart) {
  userCart.forEach((item, index) => {
    const p = item.subtotal();
    //transformando preço em real
    const precoSubtotal = p.toLocaleString("pt-br", {
      style: "currency",
      currency: "BRL",
    });

    let itemPreco = item.price.toLocaleString("pt-br", {
      style: "currency",
      currency: "BRL",
    });

    console.log(
      `${index + 1}. ${item.name} - ${itemPreco} | ${
        item.quantity
      }X | Subtotal ${precoSubtotal}`
    );
  });
}

export { addItem, calculeTotal, deletaItem, removeItem, displayCart };
