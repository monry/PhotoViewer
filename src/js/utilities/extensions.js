/**
 * 数値の実数部をゼロ埋めする
 *
 * @param {Number} digit 桁数
 * @returns {String} ゼロ埋めした文字列
 */
Number.prototype.zerofill = function(digit) {
  let value = '';
  let sign = '';
  if (0 > this) {
    value = (this * -1).toString();
    sign = '-';
  } else {
    value = this.toString();
  }
  let real = '';
  let decimal = '';
  if (/^\d+\.\d+$/.test(value)) {
    const _ = value.split('.');
    real = _[0];
    decimal = '.' + _[1];
  } else {
    real = value;
  }
  if (real.length < digit) {
    for (let i = real.length; i < digit; i++) {
      real = "0" + real;
    }
  }
  return sign + real + decimal;
};

/**
 * React Component が持つ DOM の jQuery オブジェクトを返す
 *
 * @param {string} selector セレクタ (未指定の場合は自身の jQuery オブジェクトを返す)
 * @returns {jQuery} 検索した jQuery オブジェクト
 */
React.Component.prototype.$ = function(selector = '') {
  if (selector) {
    return $(ReactDOM.findDOMNode(this)).find(selector);
  }
  return $(ReactDOM.findDOMNode(this));
};
