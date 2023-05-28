// callback use in asynchronous programming

const heading1 = document.querySelector(".heading1");
const heading2 = document.querySelector(".heading2");
const heading3 = document.querySelector(".heading3");
const heading4 = document.querySelector(".heading4");
const heading5 = document.querySelector(".heading5");
const heading6 = document.querySelector(".heading6");
const heading7 = document.querySelector(".heading7");

// callBack hell through function

function changeText(element, text, color, time, onSuccess, onError) {
  setTimeout(() => {
    element.textContent = text;
    element.style.color = color;
  }, time);
  if (element) {
    onSuccess();
  } else {
    if (onError) {
      onError();
    }
  }
}

// alsp called pyramid of doom
changeText(
  heading1,
  "HELO INDORE",
  "pink",
  1000,
  () => {
    changeText(
      heading2,
      "HELO INDORE",
      "red",
      2000,
      () => {
        changeText(
          heading3,
          "HELO INDORE",
          "blue",
          2000,
          () => {
            changeText(
              heading4,
              "HELO INDORE",
              "green",
              4000,
              () => {
                changeText(
                  heading5,
                  "HELO INDORE",
                  "violet",
                  2000,
                  () => {
                    changeText(
                      heading6,
                      "HELO INDORE",
                      "brown",
                      3000,
                      () => {
                        changeText(
                          heading7,
                          "HELO INDORE",
                          "purple",
                          4000,
                          () => {
                            console.log("elemet exist");
                          },
                          () => {
                            console.log("elemet does not exist");
                          }
                        );
                      },
                      () => {
                        console.log("elemet does not exist");
                      }
                    );
                  },
                  () => {
                    console.log("elemet does not exist");
                  }
                );
              },
              () => {
                console.log("elemet does not exist");
              }
            );
          },
          () => {
            console.log("elemet does not exist");
          }
        );
      },
      () => {
        console.log("elemet does not exist");
      }
    );
  },
  () => {
    console.log("elemet does not exist");
  }
);
