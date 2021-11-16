const Bignumber = require('bignumber.js');

module.exports = {
  /**
   * @description 大数相加
   * @param {string|number} numberA
   * @param {string|number} numberB
   * @return {number} res
   */
  add(...args) {
    let res = 0;
    for (const arg of args) {
      const a = new Bignumber(arg);
      res = a.plus(res);
    }
    return res.toNumber();
  },

  /**
   * @description 大数相减
   * @param {string|number} numberA
   * @param {string|number} numberB
   * @return {number} res
   */
  minus(...args) {
    let res = new Bignumber(args.shift());
    for (const arg of args) {
      res = res.minus(arg);
    }
    return res.toNumber();
  },
  /**
   * @description 大数相乘
   * @param {Array} args
   * @return {number} res
   */
  multiply(...args) {
    let res = 1;
    for (const arg of args) {
      const a = new Bignumber(arg);
      res = a.multipliedBy(res);
    }
    return res.toNumber();
  },

  /**
   * @description 大数相除
   * @param {string|number} numberA
   * @param {string|number} numberB
   * @return {number} res
   */
  div(numberA, numberB) {
    numberB = Number.parseFloat(numberB);

    if (numberB === 0) return 0;

    const a = new Bignumber(numberA);
    const b = new Bignumber(numberB);
    const res = a.dividedBy(b).toNumber();
    return res;
  },

  /**
   * @description 判断两个数是否相等
   * @param {number} numberA
   * @param {number} numberB
   * @return {boolean} true 相等
   */
  equal(numberA, numberB) {
    const a = new Bignumber(Number.parseFloat(numberA));
    const b = new Bignumber(Number.parseFloat(numberB));

    return Math.abs(a.minus(b).toNumber()) < 1e-4;
  },

  /**
   * @description 判断A是否大于等于B
   * @param {number} numberA
   * @param {number} numberB
   * @return {boolean} true 大于等于
   */
  gte(numberA, numberB) {
    const a = new Bignumber(numberA);
    const b = new Bignumber(numberB);
    if (a.minus(b) >= 0) {
      return true;
    }

    return false;
  },
  /**
   * @description 判断A是否大于B
   * @param {number} numberA
   * @param {number} numberB
   * @return {boolean} true 大于
   */
  gt(numberA, numberB) {
    const a = new Bignumber(numberA);
    const b = new Bignumber(numberB);
    if (a.minus(b) > 0) {
      return true;
    }

    return false;
  },

  /**
   * @descriptions 数值中最小值
   * @param numberA
   * @param numberB
   * @return {*}
   */
  min(...args) {
    let min;
    for (const arg of args) {
      const a = new Bignumber(arg);
      if (!min) {
        min = a;
      }
      if (min.minus(a) > 0) {
        min = a;
      }
    }
    return min.toNumber();
  },

  /**
   * @description 获取 最大值
   * @param numberA
   * @param numberB
   * @return {*}
   */
  max(...args) {
    let max;
    for (const arg of args) {
      const a = new Bignumber(arg);
      if (!max) {
        max = a;
      }
      if (a.minus(max) > 0) {
        max = a;
      }
    }
    return max.toNumber();
  },
}