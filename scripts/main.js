const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/mid90s_web.jpg") {
    myImage.setAttribute("src", "images/mid90s_2.jpg");
  } else {
    myImage.setAttribute("src", "images/mid90s_web.jpg");
  }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
    const myName = prompt("あなたの名前を入力してください。");
    localStorage.setItem("name", myName);
    myHeading.textContent = `${myName} さん、mid90s は面白いよ。`;
  }

  if (!localStorage.getItem("name")) {
    setUserName();
  } else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `mid90s は面白いよ、${storedName}`;
  }
  myButton.onclick = () => {
    setUserName();
  };