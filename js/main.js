(function () {
  "use strict";

  const CONTACT_EMAIL = "jaymath@engineering.upenn.edu";

  const yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  const heroPhoto = document.querySelector(".hero-photo");
  if (heroPhoto && typeof PORTFOLIO !== "undefined" && PORTFOLIO.hero) {
    heroPhoto.src = PORTFOLIO.hero.image;
    heroPhoto.alt = PORTFOLIO.hero.alt;
  }

  const navToggle = document.querySelector(".nav-toggle");
  const navMenu = document.querySelector(".nav-menu");

  if (navToggle && navMenu) {
    navToggle.addEventListener("click", () => {
      const isOpen = navMenu.classList.toggle("is-open");
      navToggle.setAttribute("aria-expanded", String(isOpen));
      navToggle.setAttribute("aria-label", isOpen ? "Close menu" : "Open menu");
    });

    navMenu.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        navMenu.classList.remove("is-open");
        navToggle.setAttribute("aria-expanded", "false");
        navToggle.setAttribute("aria-label", "Open menu");
      });
    });
  }

  function escapeHtml(text) {
    const div = document.createElement("div");
    div.textContent = text;
    return div.innerHTML;
  }

  function initGallery(card, images, title) {
    if (images.length <= 1) {
      return;
    }

    const img = card.querySelector(".project-image img");
    const counter = card.querySelector(".gallery-counter");
    const prevBtn = card.querySelector(".gallery-prev");
    const nextBtn = card.querySelector(".gallery-next");
    let index = 0;

    function showImage(nextIndex) {
      index = (nextIndex + images.length) % images.length;
      img.src = images[index];
      img.alt = title + " — photo " + (index + 1);
      if (counter) {
        counter.textContent = (index + 1) + " / " + images.length;
      }
    }

    prevBtn.addEventListener("click", (event) => {
      event.preventDefault();
      event.stopPropagation();
      showImage(index - 1);
    });

    nextBtn.addEventListener("click", (event) => {
      event.preventDefault();
      event.stopPropagation();
      showImage(index + 1);
    });
  }

  function renderProjects() {
    const grid = document.getElementById("project-grid");
    if (!grid || typeof PORTFOLIO === "undefined") {
      return;
    }

    grid.innerHTML = "";

    PORTFOLIO.projects.forEach((project) => {
      const images = project.images && project.images.length ? project.images : [];
      const cover = images[0] || "";
      const hasGallery = images.length > 1;

      const card = document.createElement("article");
      card.className = "project-card";

      const toolsHtml = project.tools
        .map((tool) => "<li>" + escapeHtml(tool) + "</li>")
        .join("");

      const galleryHtml = hasGallery
        ? '<button type="button" class="gallery-btn gallery-prev" aria-label="Previous image">&#8249;</button>' +
          '<button type="button" class="gallery-btn gallery-next" aria-label="Next image">&#8250;</button>' +
          '<span class="gallery-counter">1 / ' + images.length + "</span>"
        : "";

      card.innerHTML =
        '<div class="project-image' + (cover.endsWith(".png") ? " project-image--contain" : "") + '">' +
          (cover
            ? '<img src="' + escapeHtml(cover) + '" alt="' + escapeHtml(project.title) + '" loading="lazy">'
            : '<div class="project-placeholder" data-label="No image"></div>') +
          galleryHtml +
        "</div>" +
        '<div class="project-body">' +
          '<div class="project-meta">' +
            '<span class="project-tag">' + escapeHtml(project.tag) + "</span>" +
            '<span class="project-date">' + escapeHtml(project.date) + "</span>" +
          "</div>" +
          "<h3>" + escapeHtml(project.title) + "</h3>" +
          "<p>" + escapeHtml(project.description) + "</p>" +
          '<ul class="project-tools">' + toolsHtml + "</ul>" +
        "</div>";

      grid.appendChild(card);

      if (hasGallery) {
        initGallery(card, images, project.title);
      }
    });
  }

  renderProjects();

  const contactForm = document.getElementById("contact-form");
  const formStatus = document.getElementById("form-status");

  if (contactForm) {
    contactForm.addEventListener("submit", (event) => {
      event.preventDefault();

      const nameInput = contactForm.querySelector("#name");
      const emailInput = contactForm.querySelector("#email");
      const messageInput = contactForm.querySelector("#message");

      [nameInput, emailInput, messageInput].forEach((input) => {
        input.classList.remove("error");
      });

      let valid = true;

      if (!nameInput.value.trim()) {
        nameInput.classList.add("error");
        valid = false;
      }

      if (!emailInput.value.trim() || !emailInput.validity.valid) {
        emailInput.classList.add("error");
        valid = false;
      }

      if (!messageInput.value.trim()) {
        messageInput.classList.add("error");
        valid = false;
      }

      if (!valid) {
        if (formStatus) {
          formStatus.textContent = "Please fill in all fields correctly.";
          formStatus.classList.remove("success");
        }
        return;
      }

      const subject = encodeURIComponent("Portfolio contact from " + nameInput.value.trim());
      const body = encodeURIComponent(
        "Name: " + nameInput.value.trim() +
        "\nEmail: " + emailInput.value.trim() +
        "\n\n" + messageInput.value.trim()
      );

      window.location.href = "mailto:" + CONTACT_EMAIL + "?subject=" + subject + "&body=" + body;

      if (formStatus) {
        formStatus.textContent = "Opening your email client…";
        formStatus.classList.add("success");
      }
    });
  }
})();
