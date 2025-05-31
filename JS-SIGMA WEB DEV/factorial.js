let numb = prompt("Enter the number : ");

function factorial(number){
    let fac = 1;
    for (let index = 1; index <= number; index++) {
        fac = fac * index;        
    }
    return fac
}

console.log(factorial(numb))