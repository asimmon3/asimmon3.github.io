let myImage = document.querySelector('#Ari-Intro-Pic');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/ari-pretty.jpg') {
      myImage.setAttribute('src','images/ari-pretty2.jpg');
    } else {
      myImage.setAttribute('src','images/ari-pretty.jpg');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('Please enter your name.');
    if(!myName) {
      setUserName();
    } else {
      localStorage.setItem('name', myName);
      myHeading.textContent = `WELCOME TO VOLCANO ISLAND, ${myName}!`;
    }
  }

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.textContent = 'WELCOME TO VOLCANO ISLAND, ' + storedName + '!';
}

myButton.onclick = function() {
    setUserName();
  }