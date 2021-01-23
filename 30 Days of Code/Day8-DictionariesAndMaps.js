function processData(input) {
    //Enter your code here
    let arr = input.split("\n")
    //console.log(arr)
    let totalRecs = arr[0];
    let obj = {};
    for(let i=1; i<=totalRecs; i++){
        let tempValue = arr[i].split(" ");
        //console.log(tempValue)
        obj[tempValue[0]] = tempValue[1];
        
    }
    
    //console.log(obj);
    for(let j=parseInt(totalRecs)+1; j<arr.length; j++){
      //  console.log(obj.hasOwnProperty("sam"))
        if(obj.hasOwnProperty(arr[j]))
            console.log(`${arr[j]}=${obj[arr[j]]}`)
        else
            console.log(`Not found`)
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
