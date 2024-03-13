let plus = document.querySelector("#increment");
let minus = document.getElementById("decrement");
let num = document.getElementById("quantity");
let countvalue = document.getElementById("count-value");
let decrementtwo = document.getElementById("decrement-two");
let incrementtwo = document.getElementById("increment-two");
let submitButton = document.getElementById("submit-btn");

let count = 0;

plus.addEventListener("click", () => {
  count++;
  count = count < 10 ? "0" + count : count;
  num.innerHTML = count;
  console.log(count);
  // const quantity = (document.getElementById("quantity").innerHTML = count);
});

minus.addEventListener("click", () => {
  if (count > 1) {
    count--;
    count = count < 10 ? "0" + count : count;
    num.innerHTML = count;
  }
});

a = 0;

incrementtwo.addEventListener("click", () => {
  a++;
  a = a < 10 ? "0" + a : a;
  countvalue.innerHTML = a;
});

decrementtwo.addEventListener("click", () => {
  if (a > 1) {
    a--;
    a = a < 10 ? "0" + a : a;
    countvalue.innerHTML = a;
  }
});

submitButton.addEventListener("click", () => {
  alert("Submitted Succesfully");
});
