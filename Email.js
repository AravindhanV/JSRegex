let emailRegex = RegExp("^abc[_+\\-.][a-z]+@[a-z]+\\.[a-z]{2,3}");
let input = "abc_xyz@bridgelabz.co";
console.log(emailRegex.test(input));
