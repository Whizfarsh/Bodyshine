"use strict";

const nav = document.querySelectorAll("nav");
const aboutlayout = document.querySelectorAll(".about");
const hero = document.querySelector(".hero");

//sticky navigation
const navCallback = function (entries, observer) {
	const [entry] = entries;
	if (!entry.isIntersecting)
		nav.forEach((menu) => menu.classList.add("sticky"));
	else nav.forEach((menu) => menu.classList.remove("sticky"));
};

const navsobserve = new IntersectionObserver(navCallback, {
	root: null,
	threshold: 0,
});
navsobserve.observe(hero);

//Reavel items
const about = document.querySelectorAll(".about");

const revealAbout = function (entries) {
	const [entry] = entries;

	if (!entry.isIntersecting) return;
	entry.target.classList.remove("revealfromdown");

	revealABouts.unobserve(entry.target);
};

const revealABouts = new IntersectionObserver(revealAbout, {
	root: null,
	threshold: 0.09,
});

about.forEach((abt) => {
	revealABouts.observe(abt);
	abt.classList.add("revealfromdown");
});

//Mobile Navs
const btnClose = document.querySelector(".mb-btnclose");
const btnOpen = document.querySelector(".mb-btnopen");
const mobileNavs = document.querySelector(".mobile-navs");
const navClose = function () {
	mobileNavs.classList.add("mobile-hide");
};

//-close navs
btnClose.addEventListener("click", navClose);
mobileNavs.addEventListener("click", navClose);
//-open Navs
btnOpen.addEventListener("click", function () {
	mobileNavs.classList.remove("mobile-hide");
	mobileNavs.style.display = "block";
});
///////////////////
