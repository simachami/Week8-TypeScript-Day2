// Title: Find Indexes of Capital Letters

// Problem Statement:
// Write a JavaScript function that takes a single string (word) as an argument. The function should return an ordered list containing the indexes of all capital letters in the string.

// console.log(findIndexesOfCapitalLetters("CodEWaRs")); // Output: [0, 3, 4, 6]

// Explanation:
// For the input "CodEWaRs", the capital letters are "C", "E", "W", and "R". Their corresponding indexes in the word are 0, 3, 4, and 6, which are returned in the array [0, 3, 4, 6].

// Remarks:

// Make sure to handle edge cases, such as an empty string or a string with no capital letters.
// The function should return an empty array if there are no capital letters in the input string.
// The function should handle strings with special characters or non-letter characters as well, and only consider uppercase letters as capital letters.
// Encourage students to use appropriate JavaScript array methods or loops to efficiently solve the problem.

function findCapitals(str){
    capitals = [] //O(1)
    regexPattern = /^[A-Za-z]$/ //O(1)
    // console.log(regexPattern.test("a"))

    for (let i=0; i < str.length; i++){ //O(N)
       if (str.charAt(i) === str.charAt(i).toUpperCase() && regexPattern.test(str.charAt(i))){ //O(1)
        capitals.push(i) //O(1)
       }  
    } 
    return capitals //O(1)
} //O(N)




// function findIndexesOfCapitalLetters(word:string):number[] {
//     const res:number[] = []
//     for (let i =0; i < word.length; i++) word.charCodeAt(i) >= 65 && word.charCodeAt(i) <= 90 ? res.push(i) : ''
//     return res
//   }