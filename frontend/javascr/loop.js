function add(a,b){
    if(a>0 && b>0){
        return a+b;
    } else {
        return "Error: Both numbers must be positive";
    }
}

function sub(a,b){
    if(a<b){
        return "Error: a must be greater than b";
    }
    return a - b;
}

function mul(a,b){
    if(a===0 || b===0){
        return 0;
    }
    return a * b;
}

function div(a,b){
    if(b===0){
        return "Error: cannot Divide by zero";
    }
    return a / b;
}

console.log( add(5,3));
console.log( sub(5,3));
console.log( mul(5,3));
console.log( div(5,0));
console.log( div(5,2));
