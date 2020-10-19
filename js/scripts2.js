const sentence = prompt("Please enter a sentence");
const first = sentence.charAt(0).toUpperCase() + sentence.slice(1, -1);
const middle = sentence.slice(0,-1);
const last = sentence.slice(-1).toUpperCase();

function upperLower() {
    return first + last 
}

let final = upperLower();
  
alert(final);
