var isPrint = function (str, ...params) {
  let result = str;
  params.forEach((item, index) => {
    let rex = "{" + index + "}";
    result = result.replace(rex, item);
  });
  return result;
};
export default isPrint;
