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
