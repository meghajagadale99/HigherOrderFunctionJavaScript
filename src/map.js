const map = (numberList, string) => {
    if (string == "identity") {
        return numberList;
    }

    if (string == "cube") {
        return numberList.map(i => i * i * i)
    }
}
module.exports = map;