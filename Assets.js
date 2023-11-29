function capitalize(str) {
    var output = str.charAt(0).toUpperCase() + str.slice(1);
    return output;
 }
 
 function range(stuff) {
    let min = Math.min(...stuff);
    let max = Math.max(...stuff);
    var output = max - min;
    return output;
 } 