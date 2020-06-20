function telephoneCheck(str) {
  let reg = /^(1\s*)?(\(\d{3}\)|\d{3})[\s*\-]?\d{3}[\s\-]?\d{4}$/;
  return reg.test(str);
}

console.log(telephoneCheck("555-555-5555"));

