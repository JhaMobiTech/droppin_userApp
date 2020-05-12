const checkId = id => {
  const result = typeof id === "string" && id !== null && id !== undefined;
  return result ? id : "";
};
const isObject = obj => {
  const result = typeof obj === "object";
  return result;
};
const checkUndifined = key => {
  const result = typeof key !== "undefined" && key !== undefined;
  return result;
};
const isUndifined = key => {
  const result = typeof key === "undefined" || key === undefined;
  return result;
};
const isStr = str => {
  const result = typeof str === "string";
  return result;
};
const countObjKey = obj => {
  const result = isObject(obj) ? Object.keys(obj).length : 0;
  return result;
};
const isArray = arr => {
  const result = Array.isArray(arr);
  return result;
};
const countArray = arr => {
  const result = isArray(arr) ? arr.length : 0;
  return result;
};
const isNullnUndifined = data => {
  const result =
    typeof data === "undefined" ||
    data === undefined ||
    typeof data === null ||
    data === null;
  return result;
};
// check number
const isNumber = data => {
  const result = typeof data === "number";
  return result;
};
export {
  checkId,
  isObject,
  checkUndifined,
  isStr,
  countObjKey,
  isArray,
  countArray,
  isNullnUndifined,
  isUndifined,
  isNumber
};
