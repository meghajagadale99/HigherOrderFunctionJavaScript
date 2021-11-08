const filter = (numberList, condition) => {

    if (condition === "true") {
        return numberList;
    }
    
    if (condition === "false") {
        return [];
    }
    
    if (condition === "x>1") {
        return numberList.filter(ele => ele > 1);
    }

    if (condition === "filterUpperCase") {
        return numberList.filter(toUpperCase);
    }

    function toUpperCase(element){
        return element === element.toUpperCase();
    }

}
module.exports = filter;