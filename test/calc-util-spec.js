'use strict';

var calcUtil = require('../src/calc-util.js');

describe('add関数のテスト', function() {
    it('1+2は3である', function() {
        if (calcUtil.add(1, 2) === 3) {
        } else {
            throw new Error('失敗');
        }
    });
    it('1+2は4である', function() {
        if (calcUtil.add(1, 2) === 4) {
        } else {
            throw new Error('失敗');
        }
    });
});

