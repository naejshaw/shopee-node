

async function addItem(userCart, item) {
    userCart.push(item)
}

async function deleteItem(userCart, name){
    const index = userCart.findIndex(item => item.name === name);
    if (index !== -1) {
        userCart.splice(index, 1);
        console.log(`\n ⛔ O item ${name} foi removido do carrinho`)
    }
} 

async function removeItem(userCart, item){
    const indexFound = userCart.findIndex(p => p.name === item.name);
    if (indexFound == -1) {
        console.log(`\n ⚠️ O item ${item.name} não foi encontrado`)
        return;
    }

    if(userCart[indexFound].quantity > 1){
        userCart[indexFound].quantity -= 1;
        return
    }

    if(userCart[indexFound].quantity == 1){
        userCart.splice(indexFound, 1);
        console.log(`\n ⛔ O item ${item.name} foi removido do carrinho`)
        return
    }
} 

async function getTotalPrice(userCart){
    console.log("\nShopee Cart TOTAL IS: ")
    const result = userCart.reduce((total, item) => total + item.subtotal(), 0)
    console.log(`🛒 Total: ${result}`)
}

async function displayCart(userCart) {
    console.log("\nShopee Cart list:")
    userCart.forEach((item, index) => {
        console.log(`✅ Item ${index + 1}: ${item.name} - Price: ${item.price} | Quantity: ${item.quantity} | Subtotal: ${item.subtotal()}`)
    })
}

export {
    addItem,
    deleteItem,
    removeItem,
    getTotalPrice,
    displayCart
}