let emailRegex = RegExp(
  "^abc[_+\\-.][a-z]+@[a-z]+\\.[a-z]{2,3}(\\.[a-z]{2})?$"
);
let input = "abc_xyz@bridgelabz.co.in";
console.log(emailRegex.test(input));
