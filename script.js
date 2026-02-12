// ================= MENU TOGGLE =========e========
function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");

  if (menu && icon) {
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }
}


// ================= TABS =================
const tablinks = document.getElementsByClassName("tab-links");
const tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname, event) {

  for (let tablink of tablinks) {
    tablink.classList.remove("active-link");
  }

  for (let tabcontent of tabcontents) {
    tabcontent.classList.remove("active-tab");
  }

  if (event) {
    event.currentTarget.classList.add("active-link");
  }

  const target = document.getElementById(tabname);
  if (target) {
    target.classList.add("active-tab");
  }
}


// ================= POPUP =================
function showPopup() {
  const popup = document.getElementById("popup");
  if (popup) popup.style.display = "block";
}

function closePopup() {
  const popup = document.getElementById("popup");
  if (popup) popup.style.display = "none";
}


// ================= TITLE ANIMATION =================
document.addEventListener("DOMContentLoaded", function () {

  const titleElement = document.getElementById("title");
  if (!titleElement) return;

  const titles = [
    "Experienced Data Analyst",
    "First Class Computer Science Graduate",
    "Tech Enthusiast",
  ];

  let index = 0;

  function updateTitle() {
    titleElement.textContent = titles[index];

    titleElement.classList.add("typing-effect");

    setTimeout(() => {
      titleElement.classList.remove("typing-effect");
    }, 3000);

    index = (index + 1) % titles.length;
  }

  updateTitle();
  setInterval(updateTitle, 6000);

});
