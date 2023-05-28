console.log("script start");

const buket = ["rice", "salt", "vegitable", "chips"];

const friedRicePromise = new Promise((resolve, reject) => {
  if (buket.includes("vegitable") && buket.includes("rice")) {
    resolve("ban gye fried rice");
  } else {
    reject("nahi Bne");
  }
});

friedRicePromise
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });

for (let index = 0; index < 10; index++) {
  console.log("jai shree ram");
}

setTimeout(() => {
  console.log("setTimeout");
}, 0);

console.log("script end");
