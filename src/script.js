function openWhatsApp() {
  window.open(
    "https://wa.me/5513981009095?text=Olá! Gostaria de saber mais sobre a criação de uma Landing Page.",
    "_blank"
  );
}

let currentTestimonial = 0;
const testimonials = document.querySelectorAll(".testimonial");
const totalTestimonials = testimonials.length;

function showTestimonial(index) {
  testimonials.forEach((testimonial) => {
    testimonial.classList.remove("active");
  });

  if (index >= totalTestimonials) {
    currentTestimonial = 0;
  } else if (index < 0) {
    currentTestimonial = totalTestimonials - 1;
  } else {
    currentTestimonial = index;
  }

  testimonials[currentTestimonial].classList.add("active");
}

function changeTestimonial(direction) {
  showTestimonial(currentTestimonial + direction);
}

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -100px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
}, observerOptions);

document.querySelectorAll(".card").forEach((card) => {
  card.style.opacity = "0";
  card.style.transform = "translateY(30px)";
  card.style.transition = "opacity 0.6s ease-out, transform 0.6s ease-out";
  observer.observe(card);
});

const portfolioData = {
  portfolio1: {
    image: "src/img/lumina-odontologia-e-estetica.jpg",
  },
};

function openModal(portfolioId) {
  const data = portfolioData[portfolioId];
  if (data) {
    document.getElementById("modalImage").src = data.image;
    document.getElementById("portfolioModal").classList.add("active");
    document.body.style.overflow = "hidden";
  }
}

function closeModal(event) {
  if (
    event.target.classList.contains("modal") ||
    event.target.classList.contains("modal-close")
  ) {
    document.getElementById("portfolioModal").classList.remove("active");
    document.body.style.overflow = "auto";
  }
}

document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    document.getElementById("portfolioModal").classList.remove("active");
    document.body.style.overflow = "auto";
  }
});

const scrollIndicator = document.getElementById("scroll-indicator");

setTimeout(() => {
  if (scrollIndicator) {
    scrollIndicator.classList.add("hidden");
  }
}, 3000);

scrollIndicator.addEventListener("click", () => {
  window.scrollTo({
    top: window.innerHeight * 0.9,
    behavior: "smooth",
  });
});

document.getElementById("currentYear").textContent = new Date().getFullYear();
