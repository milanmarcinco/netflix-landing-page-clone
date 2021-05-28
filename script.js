// Open/Close FAQ Cards

const btns = document.querySelectorAll("#faq-section .card-btn");

for (let i = 0; i < btns.length; i++) {
	btns[i].addEventListener("click", toggleCard);
}

function toggleCard(e) {
	if (e.target.lastElementChild.classList.contains("card-btn-svg-rotate")) {
		e.target.lastElementChild.classList.remove("card-btn-svg-rotate");
		e.target.nextElementSibling.classList.remove("card-opened")
	} else {
		e.target.lastElementChild.classList.add("card-btn-svg-rotate");
		e.target.nextElementSibling.classList.add("card-opened")
	}
}


// Show sections

const sections = document.querySelectorAll(".showcase-section");

const sectionObserver = new IntersectionObserver((entries) => {
	const [entry] = entries;
	if (!entry.isIntersecting) return;
	console.log(entry);
	entry.target.classList.remove("hide-section");
	sectionObserver.unobserve(entry.target);
}, {
	root: null,
	threshold: 0.10
});

sections.forEach((section) => {
	section.classList.add("hide-section");
	sectionObserver.observe(section);
});