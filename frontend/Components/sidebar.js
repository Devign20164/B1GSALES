let sidebar = document.querySelector(".sidebar");
let closeBtn = document.querySelector("#btn");
let searchBtn = document.querySelector(".bx-search");
let homeSection = document.querySelector(".home-section"); // Select home section

// Toggle Sidebar and Adjust Home Section
closeBtn.addEventListener("click", () => {
    sidebar.classList.toggle("open");
    adjustHomeSection();
    menuBtnChange();
});

searchBtn.addEventListener("click", () => {
    sidebar.classList.toggle("open");
    adjustHomeSection();
    menuBtnChange();
});

function menuBtnChange() {
    if (sidebar.classList.contains("open")) {
        closeBtn.classList.replace("bx-menu", "bx-menu-alt-right");
    } else {
        closeBtn.classList.replace("bx-menu-alt-right", "bx-menu");
    }
}

// Adjust Home Section Based on Sidebar State
function adjustHomeSection() {
    if (sidebar.classList.contains("open")) {
        homeSection.style.left = "250px";
        homeSection.style.width = "calc(100% - 250px)";
    } else {
        homeSection.style.left = "78px";
        homeSection.style.width = "calc(100% - 78px)";
    }
}

// Ensure Home Section Matches Sidebar State on Load
adjustHomeSection();

  // Get the current page URL
  const currentPage = window.location.pathname;

  // Mapping of page URLs to link IDs
  const pages = {
    "/Pages/Dashboard/AdminDashboard.html": "dashboard-link",
    "/Pages/Agents/AdminAgent.html": "agents-link",
    "/Pages/Order/AdminOrder.html": "order-link",
    "/Pages/Client/AdminClient.html": "clients-link",
    "/Pages/Settings/AdminSettings.html": "settings-link",
  };

  // Set active state
  if (pages[currentPage]) {
    let activeLink = document.getElementById(pages[currentPage]);
    if (activeLink) {
      activeLink.classList.add("active");
      activeLink.style.pointerEvents = "none"; // Disable clicking
    }
  }
