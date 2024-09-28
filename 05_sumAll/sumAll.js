const sumAll = function(num1, num2) {
    if (Number.isInteger(num1) && num1 > 0 && Number.isInteger(num2) && num2 > 0)  {
        let index = num1;
        let end = num2;
        
        if (num2 < num1) {
            index = num2;
            end = num1;
        } 
    
        let sum = index;

        while (index < end) {
            sum += (index+1) ;
            index ++
        }
        return sum ;
    } else {
        return "ERROR";
    }
};

// Do not edit below this line
module.exports = sumAll;
