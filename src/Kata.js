function add(string) {
    if (string.length == 1) {
        return parseInt(string);
    }
    if (string.length > 1) {
        let newString = string.replace("\n", ", ");
        let array = newString.split(",").map((element) => new Number(element));
        let sum = array.reduce((acc, currentValue) => {
            let totalSum = acc + currentValue;
           return totalSum;
        }, 0);
        return sum;
    }
    return 0;
}

module.exports = add;