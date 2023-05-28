window.addEventListener("wheel", function (e) {
  console.log(e);
  if (e.deltaY < 0) {
    console.log("scrolling up");
  } else if (e.deltaY > 0) {
    console.log("scrolling down");
  }
});
