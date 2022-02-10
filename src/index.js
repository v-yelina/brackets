module.exports = function check(str, bracketsConfig) {
  let newStr = str;
  while (newStr.length !== 0 && count(newStr, bracketsConfig) !== 0)
    for (let i = 0; i < bracketsConfig.length; i++) {
      let config = bracketsConfig[i].join("");
      newStr = newStr.replace(config, "");
    }
  return newStr.length === 0;
};

const count = (str, bracketsConfig) => {
  let result = 0;
  for (let i = 0; i < bracketsConfig.length; i++) {
    let config = bracketsConfig[i].join("");
    if (str.indexOf(config) !== -1) {
      result += 1;
    }
  }
  return result;
};
