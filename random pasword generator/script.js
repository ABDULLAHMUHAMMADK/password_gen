function out() {
  let output = document.getElementById("out");

  let total =
    '1234567890abdcdefghigklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@"#$%^&*';
  let x = "";
  for (let i = 0; i < 8; i++) {
    x += total.charAt(Math.floor(Math.random() * total.length));
  }

  output.value = x;
}
function eras() {
  let output = document.getElementById("out");
  output.value = "";
}
