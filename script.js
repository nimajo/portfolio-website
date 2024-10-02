function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }
  
  var tablinks = document.getElementsByClassName("tab-links");
  var tabcontents = document.getElementsByClassName("tab-contents");
  function opentab(tabname) {
    for(tablink of tablinks){
      tablink.classList.remove("active-link");
    }
    for(tabcontent of tabcontents){
      tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab")
  }

  function showPopup() {
    var popup = document.getElementById('popup');
    popup.style.display = 'block';
  }
  
  function closePopup() {
    var popup = document.getElementById('popup');
    popup.style.display = 'none';
  }

  document.addEventListener("DOMContentLoaded", function () {
    // Get the element by ID
    var titleElement = document.getElementById("title");
  
    // Initial title text
    var titles = [
      "BSc Computer Science Graduate",
      "Graduate Data Analyst",
    ];
  
    // Function to update the title text with typing effect
    function updateTitle(index) {
      titleElement.textContent = titles[index];
      titleElement.classList.add("typing-effect");
      setTimeout(function () {
        titleElement.classList.remove("typing-effect");
      }, 3000); // Adjust the duration based on your preference
    }
  
    // Function to loop through the titles
    function loopTitles() {
      var index = 0;
      updateTitle(index);
      setInterval(function () {
        index = (index + 1) % titles.length;
        updateTitle(index);
      }, 6000); // Adjust the interval based on your preference
    }
  
    // Start the loop
    loopTitles();
  });
  