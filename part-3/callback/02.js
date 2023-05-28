// shortCut way to write

function fun3(callback) {
  console.log("doing some task");
  callback();
}

fun3(() => {
  console.log("doing another task");
});
