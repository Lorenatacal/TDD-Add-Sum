function add(string) {
    let number = /\d+/g;
    if (string.length == 1) {
        return parseInt(string);
    }
    if (string.length > 1) {
        let arr = string.match(number);
        let array = arr.map((element) => new Number(element));
        let sum = array.reduce((acc, currentValue) => {
            let totalSum = acc + currentValue;
           return totalSum;
        }, 0);
        return sum;
        console.log(sum)
    }
    return 0;
}

module.exports = add;