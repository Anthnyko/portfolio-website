const body = document.body;
const header = document.querySelector("[data-elevate]");
const navToggle = document.querySelector(".nav-toggle");
const nav = document.querySelector(".site-nav");
const navLinks = [...document.querySelectorAll(".site-nav a")];
const revealItems = [...document.querySelectorAll(".reveal")];
const sections = [...document.querySelectorAll("main section[id]")];
const filterButtons = [...document.querySelectorAll(".filter-button")];
const projectCards = [...document.querySelectorAll(".project-card")];
const tiltCards = [...document.querySelectorAll(".tilt-card")];

function setHeaderState() {
	header.classList.toggle("is-elevated", window.scrollY > 18);
}

setHeaderState();
window.addEventListener("scroll", setHeaderState, { passive: true });

navToggle?.addEventListener("click", () => {
	const isOpen = navToggle.getAttribute("aria-expanded") === "true";
	navToggle.setAttribute("aria-expanded", String(!isOpen));
	body.classList.toggle("nav-open", !isOpen);
});

navLinks.forEach((link) => {
	link.addEventListener("click", () => {
		body.classList.remove("nav-open");
		navToggle?.setAttribute("aria-expanded", "false");
	});
});

const revealObserver = new IntersectionObserver(
	(entries) => {
		entries.forEach((entry) => {
			if (entry.isIntersecting) {
				entry.target.classList.add("visible");
				revealObserver.unobserve(entry.target);
			}
		});
	},
	{ threshold: 0.16 }
);

revealItems.forEach((item, index) => {
	item.style.transitionDelay = `${Math.min(index % 4, 3) * 70}ms`;
	revealObserver.observe(item);
});

const sectionObserver = new IntersectionObserver(
	(entries) => {
		entries.forEach((entry) => {
			if (!entry.isIntersecting) return;
			navLinks.forEach((link) => {
				link.classList.toggle("active", link.getAttribute("href") === `#${entry.target.id}`);
			});
		});
	},
	{ rootMargin: "-38% 0px -55% 0px", threshold: 0 }
);

sections.forEach((section) => sectionObserver.observe(section));

filterButtons.forEach((button) => {
	button.addEventListener("click", () => {
		const filter = button.dataset.filter;

		filterButtons.forEach((item) => item.classList.toggle("active", item === button));

		projectCards.forEach((card) => {
			const categories = card.dataset.category.split(" ");
			const shouldShow = filter === "all" || categories.includes(filter);
			card.classList.toggle("is-hidden", !shouldShow);
			if (shouldShow) {
				card.animate(
					[
						{ opacity: 0, transform: "translateY(10px)" },
						{ opacity: 1, transform: "translateY(0)" }
					],
					{ duration: 220, easing: "ease-out" }
				);
			}
		});
	});
});

const canHover = window.matchMedia("(hover: hover) and (pointer: fine)").matches;

if (canHover) {
	tiltCards.forEach((card) => {
		card.addEventListener("mousemove", (event) => {
			const rect = card.getBoundingClientRect();
			const x = (event.clientX - rect.left) / rect.width - 0.5;
			const y = (event.clientY - rect.top) / rect.height - 0.5;
			card.style.transform = `perspective(900px) rotateX(${y * -5}deg) rotateY(${x * 6}deg) translateY(-3px)`;
		});

		card.addEventListener("mouseleave", () => {
			card.style.transform = "";
		});
	});
}

window.addEventListener("keydown", (event) => {
	if (event.key === "Escape") {
		body.classList.remove("nav-open");
		navToggle?.setAttribute("aria-expanded", "false");
	}
});
