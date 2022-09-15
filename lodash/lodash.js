module.exports = lodash = {
    // Add
    add : (num1, num2) => {
    return num1 + num2;
    },
    // Ceil
    ceil : (num) => {
    return Math.ceil(num);
    },
    // Divide
    divide : (num1, num2) => {
        return Number((num1 / num2).toFixed(2));
    },
    // Floor
    floor : (num) => {
        return Math.floor(num);
    },
    // Max
    max : (array) => {
        return array.reduce((acc, curr) => Math.max(acc, curr));
    },
    // Mean
    mean : (array) => {
        let sum = 0;
        for(let i = 0; i < array.length; i++) {
            sum += array[i];
        }
        return Math.ceil(sum / array.length);
    },
    // Min
    min : (array) => {
        return array.reduce((acc, curr) => Math.min(acc, curr));
    },
    // Multiply
    multiply : (num1, num2) => {
        return num1 * num2;
    },
    // Round
    round : (num, fixed) => {
        if(fixed === undefined) {
            return Math.round(num);
        } else {
        return Number(num.toFixed(fixed));
        }
    },
    // Subtract
    subtract : (num1, num2) => {
        return num1 - num2;
    },
    // Sum
    sum : (num1, num2) => {
        return num1 + num2;
    }
}