// callback use in asynchronous programming

console.log("helo world");
const heading1 = document.querySelector(".heading1");
const heading2 = document.querySelector(".heading2");

setTimeout(() => {
  heading1.textContent = "Helo Indore";
  heading1.style.color = "red";
}, 1000);

setTimeout(() => {
  heading2.textContent = "Helo Indore";
  heading2.style.color = "red";
}, 1000);
