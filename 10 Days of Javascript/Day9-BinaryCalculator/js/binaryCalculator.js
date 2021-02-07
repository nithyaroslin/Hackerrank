const res = document.getElementById("res");
const handleClear = () => {
    res.innerHTML = ""
}

const handleValue = () => {
    res.innerHTML = res.innerHTML + event.currentTarget.dataset['value'];
}

const handleResult = () => {
    let expr = res.innerHTML;
    let reg = /(\d+)/g
    expr = expr.replace(reg, function(match) {
                return parseInt(match, 2);
    })
    res.innerHTML = eval(expr).toString(2);
    
}
