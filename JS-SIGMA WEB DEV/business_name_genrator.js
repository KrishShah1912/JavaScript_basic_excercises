let first, second, third ;

let rand = Math.random();
if (rand>0.33){
    first ="crazy"
}
else if (rand>0.33 && rand<0.66){
    first = "amazing"
}
else{
    first = "fire"
}

let rand2 = Math.random();
if (rand2>0.33){
    second ="engine"
}
else if (rand2>0.33 && rand2<0.66){
    second = "food"
}
else{
    second = "garments"
}

let rand3 = Math.random();
if (rand3>0.33){
    third ="bros"
}
else if (rand3>0.33 && rand3<0.66){
    third = "limited"
}
else{
    third = "hub"
}


console.log(`Business name generator : ${first} ${second} ${third}`)