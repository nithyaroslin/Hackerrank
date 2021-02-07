let ids = ['1','2','3','6','9','8', '7','4'];
let txts = ['1','2','3','6','9','8', '7','4'];
const handleClick = () => {
    txts.unshift(txts.pop());
    for(let i=0;i<ids.length;i++){
        document.getElementById("btn"+ids[i]).innerHTML=txts[i];
    }
}