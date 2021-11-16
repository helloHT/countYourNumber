const assert = require('assert');

const calculator = require('../src/calculator');

describe('计算器 test', () => {
  it('加法 test', async () => {
    const res = calculator.add(0.1, 0.2);
    assert.equal(res, 0.3, '结果不正确');
  });
})