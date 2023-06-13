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

//Review sliders
const slides = document.querySelectorAll(".review");
const rvBtnBack = document.querySelector(".review-btn-back");
const rvBtnFront = document.querySelector(".review-btn-front");
const dotCointainer = document.querySelector(".review-dots");

let curSlide = 0;
const numSlides = slides.length - 1;

console.log(slides);

slides.forEach((s, i) => (s.style.transform = `translateX(${100 * i}%)`));

const createDots = function () {
	slides.forEach(function (_, i) {
		dotCointainer.insertAdjacentHTML(
			"beforeend",
			`<button class="dots__dot" data-slide="${i}"></button>`
		);
	});
};
createDots();

const activeDots = function (slide) {
	document
		.querySelectorAll(".dots__dot")
		.forEach((dot) => dot.classList.remove("dots__dot--active"));
	document
		.querySelector(`.dots__dot[data-slide="${slide}"]`)
		.classList.add("dots__dot--active");
};
activeDots(0);

const gotoSlide = function (slide) {
	slides.forEach(
		(s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
	);
};
gotoSlide(0);

const nextSlide = function () {
	if (curSlide === numSlides) {
		curSlide = 0;
	} else {
		curSlide++;
	}
	gotoSlide(curSlide);
	activeDots(curSlide);
};
const previousSlide = function () {
	if (curSlide <= 0) {
		curSlide = 0;
	} else {
		curSlide--;
	}
	gotoSlide(curSlide);
	activeDots(curSlide);
};

rvBtnFront.addEventListener("click", nextSlide);
rvBtnBack.addEventListener("click", previousSlide);

document.addEventListener("keydown", function (e) {
	e.key === "ArrowLeft" && previousSlide();
	e.key === "ArrowRight" && nextSlide();
});

dotCointainer.addEventListener("click", function (e) {
	if (e.target.classList.contains("dots__dot")) {
		const { slide } = e.target.dataset;
		gotoSlide(slide);
		activeDots(slide);
	}
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
