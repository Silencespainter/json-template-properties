/**
 * Replace in str the pattern {0} for each item of params
 * @param {string} str
 * @param  {...any} params
 */
var isPrint = function (str, ...params) {
  let result = str;
  params.forEach((item, index) => {
    let rex = "{" + index + "}";
    result = result.replace(rex, item);
  });
  return result;
};
export default isPrint;
