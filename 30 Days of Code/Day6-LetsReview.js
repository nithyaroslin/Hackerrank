function processData(input) {
    //Enter your code here
    let arr = input.split("\n");
    //console.log(arr);
    let T = arr[0];
    for(let i=1; i<=T; i++ ){
        let strArr = arr[i].split('');
        //console.log(strArr);
        let oddStr ="";
        let evenStr = "";
        for(let j=0; j<strArr.length;j++){
            if(j%2 === 0)
                evenStr += strArr[j];
            else
                oddStr += strArr[j];
        }
        console.log(`${evenStr} ${oddStr}`)
    }
} 

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});
