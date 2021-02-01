let myImage = document.querySelector('#Ari-Intro-Pic');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/ari-pretty.jpg') {
      myImage.setAttribute('src','images/ari-pretty2.jpg');
    } else {
      myImage.setAttribute('src','images/ari-pretty.jpg');
    }
}

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

/* Adding the weather script */

n =  new Date();
  y = n.getFullYear();
  m = n.getMonth() + 1;
  d = n.getDate();
  document.getElementById("today-date").innerHTML = m + "/" + d + "/" + y;
n_2 = new Date();
  setDate(n_2.getDate() + 1);
  y_2 = n_2.getFullYear();
  m_2 = n_2.getMonth() + 1;
  d_2 = n_2.getDate();
  document.getElementById("tomorrow-date").innerHTML = m_2 + "/" + d_2 + "/" + y_2;
n_3 = new Date();
  setDate(n_3.getDate() + 2);
  y_3 = n_3.getFullYear();
  m_3 = n_3.getMonth() + 1;
  d_3 = n_3.getDate();
  document.getElementById("two-days-date").innerHTML = m_3 + "/" + d_3 + "/" + y_3;