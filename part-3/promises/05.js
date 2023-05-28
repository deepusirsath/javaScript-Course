function myPromise() {
  return new Promise((resolve, reject) => {
    resolve("helo");
  });
}
myPromise()
  .then((value) => {
    console.log("resolve");
    return value + "deepu";
  })
  .then((value) => {
    console.log(value);
    return value + "sirsath";
  })
  .then((value) => {
    console.log(value);
  });
