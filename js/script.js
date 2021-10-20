// DOM SELECTORS
const navbar = document.getElementById("nav");
const sidebar = document.getElementById("sidebar");
const sidebarOpenbtn = document.getElementById("nav-btn");
const sidebarClosebtn = document.getElementById("close-btn");

// FUNCTIONS
// Fixed navbar on screen scroll
const fixNavbarOnScroll = () =>
  window.pageYOffset > 80
    ? navbar.classList.add("navbar-fixed")
    : navbar.classList.remove("navbar-fixed");

// Sidebar open & close
const openSidebar = () => sidebar.classList.add("show-sidebar");
const closeSidebar = () => sidebar.classList.remove("show-sidebar");

// EVENT HANDLERS
// Fixed navbar on screen scroll
window.addEventListener("scroll", fixNavbarOnScroll);

// Sidebar open & close
sidebarOpenbtn.addEventListener("click", openSidebar);
sidebarClosebtn.addEventListener("click", closeSidebar);
