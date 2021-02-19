let stock = {
    macbook: 2,
    iphone: 4
}

let processPayment = (itemName) => {
    stock[itemName]--
    console.log(`Payment is being processed for item ${itemName}`)
}

let processError = (itemName) => {
    console.log(`No more ${itemName} in stock`)
    console.log(`Payment is not being processed`)
}

let processOrder = (itemName, callbackPayment, callbackError) => {
    console.log(`Verifying the stock of ${itemName}`)
    if (stock[itemName] && stock[itemName] > 0) {
        callbackPayment(itemName)
    } else {
        callbackError(itemName)
    }
}

let value = prompt('Please enter the item you would like to purchase (Macbook, iPhone)').toLowerCase()

processOrder(value, processPayment, processError)
