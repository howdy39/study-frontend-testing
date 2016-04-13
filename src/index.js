'use strict';

document.getElementById('calc').addEventListener('click', function clickCalc() {
    var value1 = Number(document.getElementById('value1').value);
    var value2 = Number(document.getElementById('value2').value);
    
    var result = add(value1, value2);
    document.getElementById('result').innerText = result;
});
