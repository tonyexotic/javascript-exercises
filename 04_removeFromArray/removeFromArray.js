const removeFromArray = function(array, ...elements) {
    let index = 0;
    for (const element of elements){
        if (array.includes(element)){ 
            array = array.filter((filtre) => filtre !== element) 
        }
    }
    return array;
}

// Do not edit below this line
module.exports = removeFromArray;
