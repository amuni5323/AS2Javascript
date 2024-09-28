function removeFirstAndLastChar(str) {
    if (str.length <= 2) {
        return ''; 
    }
    return str.substring(1, str.length - 1);
}

console.log(removeFirstAndLastChar("JavaScript")); 
console.log(removeFirstAndLastChar("Hello"));     
      
