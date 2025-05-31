console.log("JS is working.....")

let boxes = document.querySelector(".container").children
// console.log(boxes)......Here you can see that it will return an HTML collection


// As color rgb lies between 0 to 255 that' why we are taking a=0 and b=255
// To get a random number between 0 to 255 .....you need to apply some maths
// a + r (b-a)..... here if r=0 then a will be ans and if r=1 then (b-a) will be ans
// so a is zero and b is 255....
// 0 + Math.random()*255.............this will generate a random number between 0 to 255
// But it will generate in decimal also like 205.22152455...
// So use Ceil function to get an integer value
function getRandomColor(){
    let val1 = Math.ceil(0 + Math.random()*255);
    let val2 = Math.ceil(0 + Math.random()*255);
    let val3 = Math.ceil(0 + Math.random()*255);
    return `rgb(${val1} ${val2} ${val3})`
}


// Here first we need to create an array beczuase boxes is HTML collection..... so create array first and apply for each loop to access all the boxes
Array.from(boxes).forEach(e =>{
    e.style.backgroundColor = getRandomColor();
    e.style.color = getRandomColor();
})

