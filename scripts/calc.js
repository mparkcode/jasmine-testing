function addition(num1, num2){
    if(typeof(num1) == "number" && typeof(num2) == "number"){
       return(num1 + num2); 
    } else {
        alert("Arguments must both be numbers");
    }
}

function subtract(num1,num2){
    if(typeof(num1) == "number" && typeof(num2) == "number"){
        return num1 - num2;
    } else {
        alert("Please provide two numbers, no words");
    }
    
}

function multiply(num1, num2){
    if(typeof(num1) == "number" && typeof(num2) == "number"){
        return num1*num2;
    } else{
        alert("You must multiply two numbers, no words!")
    }
    
}

function divide(num1, num2){
    if(typeof(num1) == "number" && typeof(num2) == "number"){
        return num1/num2;
    } else {
        alert("You must divide two numbers, no words");
    }
    
}