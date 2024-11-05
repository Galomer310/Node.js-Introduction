const products = require('./products.js');

const results = (item) => {
    let found = false; 

    for (let product of products) { 
        if (item === product.name) {
            console.log(product.name);
            console.log(product.price);
            console.log(product.category);
            found = true; 
            break; 
        }
    }

    if (!found) {
        console.log(`Sorry, we don't have ${item} in our shop.`);
    }
}

results('Coffee Maker');
