const repeatString = function (string, number) {
  let result = "";

  if (number < 0) {
    return "ERROR";
  }

  let loop = number ? number : Math.floor(Math.random() * 1000);

  for (let i = 0; i < number; i++) {
    result += string;
  }

  return result;
};

// Do not edit below this line
module.exports = repeatString;
