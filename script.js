function firstWord(s) {
  // your code here
	 let strippedString = str.trimStart();
    let firstSpaceIndex = strippedString.indexOf(' ');
    if (firstSpaceIndex === -1) {
        return strippedString;
    }
    
    // Return the substring from the start to the first space
    return strippedString.slice(0, firstSpaceIndex);
}

// Do not change the code below

// const s = prompt("Enter String:");
// alert(firstWord(s));
