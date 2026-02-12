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

const projectDetails = {
  "compact-coach": `
    <h2>Compact Coach</h2>
    <p>Compact-Coach was created as part of my Project module for my final year at University. Compact-Coach uses React Native, Expo, Tailwindcss and Firebase, to allow users to achieve their fitness goals using Social Features , Gamification and Words of Encouragement.</p>
  `,
  "cyberrisk": `
    <h2>Cyber Risk Management Dashboard (Power BI)</h2>
    <p>
        Built an end‑to‑end Cyber/GRC risk dashboard using Power BI and a custom Excel risk register. The project simulates a real organisational risk environment and includes dynamic KPIs, a risk heatmap, owner workload analysis, and interactive filtering.
        Please see GitHub for the link to download the files.
        Key elements include:
        Risk density heatmap (Likelihood × Impact)
        KPI cards for total risks, high‑risk items (score ≥15), and overdue reviews (DAX using TODAY())
        Top risks visualised by score with conditional formatting
        Risk owner workload breakdown for operational insight
        Fully interactive slicers including for owner and risk score.
        Clean, governance‑focused layout suitable for reporting to senior stakeholders
        This project demonstrates practical experience in Power BI, DAX, data modelling, and risk analytics aligned with GRC and cybersecurity practices.
    </p>
  `,
  "project3": `
    <h2>Refactored Snakes & Ladders Python Game with Pytest Unit Testing</h2>
    <p>
    Refactored and enhanced a previous university project into a modular, testable Python application. Implemented unit tests using Pytest to validate core game logic (dice rolls, movement, win conditions), and improved game structure for maintainability. Designed an interactive board interface with numbered tiles, animated player movement, and visual dice rolls to create an engaging user experience.
    </p
  `,
  "project4": `
    <h2>System Security Test with Kali Linux</h2>
    <p>Conducted System Security Testing with Kali Linux, leveraging terminal, Nmap, vulnerability scanning, and analysis. Utilized OpenVAS, Nessus, and tools like Hydra and Metasploit. Executed various exploits, including Dirty COW, on the test IP address, and compiled comprehensive reports for enhanced security..</p>
  `,
"project5": `<h2>Cinema Website Prototype</h2> <p>Leveraged EasyPHP and SQL to independently conceptualize, create, and maintain a robust Cinema Database. Effectively managed the database through PhpMyAdmin and acted as the sole driving force behind the entire project. In my role as Project Leader, I took on all responsibilities, from team organization and task allocation using a Kanban/Sprint Cycle to conducting team meetings. I also personally handled the development and management of the SQL database and played a pivotal role in designing and building the associated website.</p> `,
"ogsnakes": `<h2>Original Pythons & Ladders Game</h2> <p>In my first year at university, I successfully created a Python-based version of the classic board game "Snakes and Ladders." Utilizing the assets provided by the university, I developed the game logic and designed an intuitive interface for players to enjoy. This project allowed me to demonstrate my coding abilities, problem-solving skills, and enthusiasm for game development.</p>`,
"wireshark": `<h2>Coursera Guided Project: Wireshark Network Security Analysis</h2> <p>I utilised Wireshark to troubleshoot and analyse network traffic, capturing and interpreting protocols such as RADIUS, DNS, and HTTP to identify performance issues and security gaps. I then produced clear, detailed reports outlining key findings and recommendations, helping to strengthen overall network efficiency and security posture.</p>`,
"projectVM": `<h2>Virtual Machine Setup and Configuration</h2> <p>This project demonstrates the deployment and configuration of a secure web server environment on Microsoft Azure. I provisioned a Windows Server 2022 virtual machine, configured networking components, and implemented security best practices using Network Security Groups (NSGs) with IP‑restricted inbound rules for RDP (3389) and HTTP (80).
Inside the VM, I installed and configured Internet Information Services (IIS), replaced the default web root with a custom portfolio website, and validated external access through the VM’s public IP. I also created additional static pages to demonstrate routing and content hosting.
This project showcases practical experience with Azure VM provisioning, NSG configuration, Windows Server administration, IIS management, and secure web hosting.</p>`,
};

document.querySelectorAll(".read-more").forEach(btn => {
  btn.addEventListener("click", () => {
    const key = btn.dataset.project;
    document.getElementById("popup-content").innerHTML = projectDetails[key];
    document.getElementById("project-popup").style.display = "block";
  });
});

function closeProjectPopup() {
  document.getElementById("project-popup").style.display = "none";
}

