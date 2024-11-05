const _ = require('lodash');

const math = require('./math');

const sum = math.add(13, 31);
console.log(`Sum: ${sum}`);

const product = math.multiply(7, 19);
console.log(`Product: ${product}`);

const numbers = [1, 2, 3, 4, 5, 6, 7];
const arraySum = _.sum(numbers);
console.log(`Sum of array: ${arraySum}`);
