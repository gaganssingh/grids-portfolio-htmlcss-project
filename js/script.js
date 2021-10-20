// DOM SELECTORS
const sidebar = document.getElementById("sidebar");
const sidebarOpenbtn = document.getElementById("nav-btn");
const sidebarClosebtn = document.getElementById("close-btn");

// FUNCTIONS
const openSidebar = () => sidebar.classList.add("show-sidebar");
const closeSidebar = () => sidebar.classList.remove("show-sidebar");

// EVENT HANDLERS
sidebarOpenbtn.addEventListener("click", openSidebar);
sidebarClosebtn.addEventListener("click", closeSidebar);
