function firstWord(s) {
  // your code here
	 let strippedString = str.trimStart();
    let firstWord = "";
    
    for (let i = 0; i < strippedString.length; i++) {
        if (strippedString[i] === ' ') {
            break; 
        }
        firstWord += strippedString[i];
    }
    return firstWord;
}

// Do not change the code below

// const s = prompt("Enter String:");
// alert(firstWord(s));
