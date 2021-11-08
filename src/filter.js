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

}