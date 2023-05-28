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
