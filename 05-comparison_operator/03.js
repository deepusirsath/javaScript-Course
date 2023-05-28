//truthy and falsy value

//falsy value--
// ""
//false
//null
//undefined
//0

//truthy value--
// "abc"
// 1, -1

//ex- falsy
let fname = "" || false || null || undefined || 0;
if (fname) {
  console.log("deepali");
} else {
  console.log("byby");
}

//ex- truthy
let fname2 = -1 || 1 || "deepali";
if (fname2) {
  console.log("deepali");
} else {
  console.log("byby");
}
