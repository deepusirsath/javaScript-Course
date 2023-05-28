// normal Function

function fun1() {
  console.log("doing some task");
}

function fun2() {
  console.log("doing another task");
}

fun1();
fun2();

// using callback

function fun3(callback) {
  console.log("doing some task");
  callback();
}

function fun4() {
  console.log("doing another task");
}

fun3(fun4);
