function createObjectFromArray(arr) {
    const obj = {};

    for (let i = 0; i < arr.length; i += 2) {
        const key = arr[i];
        const value = arr[i + 1];
        obj[key] = value;
    }

    return obj;
}

const arr = ["name", "John", "lastname", "Black", "age", "23"];
const resultObject = createObjectFromArray(arr);
console.log(resultObject);

//
function avg(...nums) {
    let numSum = 0
    for (let i = 0; i < nums.length; i++) {
        numSum += nums[i]
    }
    console.log(numSum / nums.length);
}
avg(1, 2, 3, 4, 5)

//

function getDataType(value) {
    return typeof value;
}

console.log(getDataType(false)); 
console.log(getDataType('hello world!')); 
console.log(getDataType(42)); 