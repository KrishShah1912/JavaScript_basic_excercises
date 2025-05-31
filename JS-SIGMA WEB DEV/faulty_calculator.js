let rand = Math.random()
console.log(rand)

let a = prompt("Enter first number : ");
let b = prompt("Enter operation : ");
let c = prompt("Enter second number : ");

let obj = {
    "+":"-",
    "-": "/",
    "*":"+",
    "/":"**"
}

if (rand>0.10){
    console.log(`The result is ${a} ${b} ${c}`);
    console.log(alert(`The result is ${eval(`${a} ${b} ${c}`)}`))
}

else{
    c = obj[c];
    console.log(`The result is ${a} ${b} ${c}`);
    console.log(alert(`The result is ${eval(`${a} ${b} ${c}`)}`))
}


// Here we have used eval fucntion so that it can do some calculation and display ...... it's nice way to use the eval function
