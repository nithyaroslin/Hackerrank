'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });
    
    main();    
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the vowelsAndConsonants function.
 * Print your output using 'console.log()'.
 */
function vowelsAndConsonants(s) {
    let arr = s.split('')
    //console.log(arr)
    //let myset = ['a', 'e', 'i', 'o', 'u']
    let vowelArr=[];
    let consArr = [];
    arr.map(char => {
        if ((char === 'a' ||
             (char === 'e') ||
             (char === 'i') ||
             (char === 'o') ||
             (char === 'u') 
            )){
            vowelArr.push(char)
        }
        else {
            consArr.push(char)
        }
        
        })
        //vowelArr.sort();
        //consArr.sort();
        vowelArr.map(char => console.log(char))
        consArr.map(char=> console.log(char))
        
}

