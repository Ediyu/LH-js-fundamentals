function calculateRectangleArea (length, width) {
  if(length > 0 || width >0){
        return length * width; 
    }
    else 
    return undefined;
    
}

function calculateTriangleArea (base, height) {
    if(base > 0 || height >0){
        return base * (height/2); 
    }
    else 
    return undefined;
    
}

function calculateCirclArea(radius) {
    if(radius > 0){
        return Math.PI * radius * radius;
    } else {
        return undefined;
    } 
    
}

console.log(calculateCirclArea(0));
console.log(calculateRectangleArea(-1,0));
console.log(calculateTriangleArea(-1,0));

console.log("Jeremy" > "Khurram");

function areMultiples(bigNumber, smallNumber) {
    return bigNumber % smallNumber === 0;
  }
  
  console.log(areMultiples(15, 4));

var who = 5 * "3";

console.log(typeof(who));

var hihi = "15" === 15;

console.log(hihi);