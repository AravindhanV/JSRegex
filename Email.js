let emailRegex = RegExp("^abc@[a-z]+\\.[a-z]{2,3}");
let input = "abc@bridgelabz.co";
console.log(emailRegex.test(input));
