"use strict";

const hamburgerBtn = document.querySelector(".hamburger-btn");
const sidebarEl = document.getElementById("sidebar");
const closeSidebarBtn = document.getElementById("close-btn");
const sidebarMenu = document.querySelector(".sidebar-menu");
const socialList = document.querySelector(".sidebar-social-list");
const navGrid = document.querySelector(".nav-grid");
const navContainer = document.querySelector(".nav-container");
const resumeBtn = document.querySelector(".resume-btn");
const openEmailModals = document.querySelectorAll(".open-email");
const emailProjects = document.querySelectorAll(".email-projects");
const closeModalBtns = document.querySelectorAll(".modal-close-btn");
const openModalBtns = document.querySelectorAll(".open-modal");
const overlays = document.querySelectorAll(".modal-overlay");
const modals = document.querySelectorAll(".modal-container");
const modalWrappers = document.querySelectorAll(".modal-wrapper");

hamburgerBtn.addEventListener("click", showSidebar);
closeSidebarBtn.addEventListener("click", hideSidebar);
sidebarMenu.addEventListener("click", hideSidebar);
socialList.addEventListener("click", hideSidebar);

// Show sidebar
function showSidebar(e) {
	sidebarEl.classList.add("show-sidebar");
	document.body.style.overflow = "hidden";
}

// Hide sidebar
function hideSidebar(e) {
	sidebarEl.classList.remove("show-sidebar");
	document.body.style.overflow = "visible";

	if (
		e.target.classList.contains("sidebar-link") ||
		e.target.classList.contains("sidebar-social-i")
	) {
		sidebarEl.classList.remove("show-sidebar");
	}
}

// When user scrolls down, hide navbar. When user scrolls up, show navbar.
window.onscroll = function (e) {
	const scrollY = window.pageYOffset || document.documentElement.scrollTop;
	const height = -navGrid.clientHeight;
	navGrid.style.transition = "transform 100ms ease-in-out";

	navGrid.style.backgroundColor = "rgba(17, 21, 24, 0.60)";
	navGrid.style.backdropFilter = "blur(50px)";
	navGrid.style.boxShadow = "0 1rem 3rem -1.62rem rgb(25, 32, 36, 0.75)";
	navContainer.style.margin = "1rem 0";
	resumeBtn.firstElementChild.style.boxShadow = "none";

	scrollY <= Math.max(this.lastScroll, 50) ||
	window.innerWidth <= 1200 ||
	this.loaded === undefined
		? (navGrid.style.transform = "translateY(0rem)")
		: (navGrid.style.transform = "translateY(" + height + "px)");

	if (scrollY === 0) {
		navGrid.style.backgroundColor = "transparent";
		navContainer.style.margin = "3rem 0 0 0";
		navGrid.style.backdropFilter = "none";
		navGrid.style.boxShadow = "none";
		resumeBtn.firstElementChild.style.boxShadow =
			"0px 10px 35px rgb(225, 85, 17, 0.25)";
	}

	this.lastScroll = scrollY;
	this.loaded = true;
};

// Project modals

for (let p = 0; p < openModalBtns.length; p++) {
	openModalBtns[p].addEventListener("click", showModal);
	closeModalBtns[p].addEventListener("click", closeModal);
	overlays[p].addEventListener("click", closeModal);

	function showModal() {
		modals[p].classList.toggle("hidden");
		document.body.style.overflow = "hidden";
	}

	function closeModal() {
		modals[p].classList.toggle("hidden");
		document.body.style.overflow = "visible";
		// modals[p].classList.toggle("slide-fwd-center");
	}
}
