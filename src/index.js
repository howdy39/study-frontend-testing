'use strict';

var calcUtil = require('./calc-util.js');

document.getElementById('calc').addEventListener('click', function () {
    var value1 = Number(document.getElementById('value1').value);
    var value2 = Number(document.getElementById('value2').value);
    
    var result = calcUtil.add(value1, value2);
    document.getElementById('result').innerText = result;
});
