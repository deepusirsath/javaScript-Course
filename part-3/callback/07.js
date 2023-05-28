// callback use in asynchronous programming

console.log("helo world");
const heading1 = document.querySelector(".heading1");
const heading2 = document.querySelector(".heading2");
const heading3 = document.querySelector(".heading3");
const heading4 = document.querySelector(".heading4");
const heading5 = document.querySelector(".heading5");
const heading6 = document.querySelector(".heading6");
const heading7 = document.querySelector(".heading7");

// callBack hell
setTimeout(() => {
  heading1.textContent = "Helo Indore";
  heading1.style.color = "violet";
  setTimeout(() => {
    heading2.textContent = "Helo Indore";
    heading2.style.color = "purple";
    setTimeout(() => {
      heading3.textContent = "Helo Indore";
      heading3.style.color = "red";
      setTimeout(() => {
        heading4.textContent = "Helo Indore";
        heading4.style.color = "pink";
        setTimeout(() => {
          heading5.textContent = "Helo Indore";
          heading5.style.color = "green";
          setTimeout(() => {
            heading6.textContent = "Helo Indore";
            heading6.style.color = "blue";
            setTimeout(() => {
              heading7.textContent = "Helo Indore";
              heading7.style.color = "brown";
            }, 1000);
          }, 1000);
        }, 1000);
      }, 1000);
    }, 1000);
  }, 1000);
}, 1000);
