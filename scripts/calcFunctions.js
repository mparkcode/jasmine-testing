function areaOfCircle(n) {
    if(typeof(n) == "number"){
       let result = 3.1416 * (n * n);
        return Number(result.toFixed(2)); 
    } else {
        alert("You must enter a number, no words");
    }
}

function squareRoot(n) {
    if(typeof(n) == "number"){
       let result = Math.sqrt(n);
        return Number(result.toFixed(2)); 
    } else {
        alert("You must enter a number, no words");
    }
}

function squareMe(n) {
    if(typeof(n) == "number"){
        let result = n*n;
        return Number(result.toFixed(2));
    } else {
        alert("You must enter a number, no words");
    }
    
}

function cubeMe(n) {
    if(typeof(n) == "number"){
        let result = n*n*n;
        return Number(result.toFixed(2));
    } else {
        alert("Please enter a number, no words!");
    }
}

function areaTriangle(num1,num2){
    if(typeof(num1) == "number" && typeof(num2) == "number"){
        let result = (num1*num2)/2;
        return Number(result.toFixed(2));        
    } else {
        alert("enter two numbers for triangle area, no words");
    }
}

function yearsLeft(n){
    if(typeof(n) == "number"){
        if(n<=2018){
            if(n % 1 === 0){
                let result = 2018 - n;
                return result;
            } else {
                alert("please input an integer, no floats!");
            }   
        } else {
            alert("Please enter a year less than 2018");
        }
    } else {
        alert("Please enter a number, no words!");
    }
}

function cylinderArea(radius, height){
    if(typeof(radius) == "number" && typeof(height) == "number"){
        let result = 2*Math.PI*radius*height + 2*Math.PI*(radius*radius);
        return Number(result.toFixed(2));        
    } else {
        alert("enter both radius and height as numbers");
    }

}

function fizzBuzz(n){
    if(typeof(n) == "number"){
        if(n%3 == 0 && n%5 == 0){
            return "FizzBuzz";
        } else if(n%3 == 0 || (n+'').indexOf('3') >-1){
            return "fizz";
        } else if (n%5 == 0){
            return "buzz";
        } else {
            return n;
        }       
    } else {
        alert("FizzBuzz needs a number, no words!");
    }
}

function whatCanIDrink(n){
    if(n>0 && n < 14){
       return "Drink Toddy"; 
    } else if(n < 18){
       return "Drink Coke"; 
    } else if(n < 21){
       return "Drink Beer"; 
    } else if(n < 130){
       return "Drink Whiskey"; 
    } else {
        return "Sorry. I can't tell you what to drink because that age is incorrect";
    }
}

function printError(){
    console.log("error");
}