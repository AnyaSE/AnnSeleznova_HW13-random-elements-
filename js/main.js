function randomArrayNumber (array) {
    if (Array.isArray(array)) {
        const randomNumber = array[Math.floor((Math.random()*array.length))];
        return randomNumber;
    } else {
        console.log ('The input is not an array');
    }
};

console.log(randomArrayNumber([2, 3, 5, 8, 12, 15, 19, 21, 56]));