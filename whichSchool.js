function whichSchool(age){
  if(age < 13){
    return console.log("Elementary School");
  } else if (age <= 18 && age >= 13) {
    return console.log("Secondary School");
  } else {
    return console.log("Lighthouse Labs")
  }
}

console.log(whichSchool(10));