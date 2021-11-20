const map = (numberList,func) => {
    return numberList.map(element => func(element))
}
    const identity =(numberList) => {
        return numberList;
    }
    const cube =(element) => {
        return element*element*element;
    }

    module.exports = { cube, map, identity };