const myParse = function (string) {
  let prev = 2;
  var o = new Object();
  var lastValue, lastKey;
  console.log("STARTED");
  for (let i = 1; i < string.length - 1; i++) {
    const e = string[i];
    if (e == ":") {
      lastValue = string.slice(prev, i);
      // console.log(lastValue, lastKey);
      prev = i + 3;
    } else if (e == ",") {
      lastKey = string.slice(prev, i - 1);
      // console.log(lastValue, lastKey);
      prev = i + 2;
      o[lastValue] = lastKey;
      lastValue = 0;
      lastKey = 0;
    }
  }
  console.log("ans:", o);
};

const s = '{ name: "abc", phone: "0000000123",}';
myParse(s);

const myStriginfy = function (obj) {
  // console.log(obj);
  var str = "{ ";
  for (const key in obj) {
    const value = obj[key];
    // console.log(key, value);
    str += key + ": " + value + ", ";
  }
  str += "}";
  console.log("Result stringify :", str);
};

const o = { name: "abc", phone: "0000000123" };
// myStriginfy(o);
