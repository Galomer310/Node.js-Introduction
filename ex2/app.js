import people from './data.js';

const averageAge = (array) => {
    let agesSum = 0;

    for (let person of array) {
        agesSum += person.age;
    }

    const agesAverage = agesSum / array.length;
    console.log(`the average age is:${agesAverage}`);
}

averageAge(people);
