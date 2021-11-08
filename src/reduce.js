const reduce = (numberList) => {

    if (numberList.length != 0) {
        return numberList.reduce(sum);
    }

    function sum(elementOne, elementTwo) {
        return elementOne + elementTwo;
    }
}

module.exports = reduce;