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

  /* ------------------------------------------------------------------ */
  /* Project detail modal                                               */
  /* ------------------------------------------------------------------ */

  const modal = document.getElementById("project-modal");
  const modalGallery = document.getElementById("modal-gallery");
  const modalTag = document.getElementById("modal-tag");
  const modalDate = document.getElementById("modal-date");
  const modalTitle = document.getElementById("modal-title");
  const modalDetails = document.getElementById("modal-details");
  const modalTools = document.getElementById("modal-tools");

  // Opens on hover on devices with a real mouse/trackpad; falls back to
  // click/tap everywhere (including desktop, and always on touch devices,
  // since touchscreens have no concept of "hover").
  const supportsHover = window.matchMedia("(hover: hover) and (pointer: fine)").matches;

  let lastFocusedEl = null;
  let hoverTimer = null;
  const HOVER_OPEN_DELAY = 350; // ms — avoids opening on a quick mouse pass-over

  function openModal(project) {
    if (!modal || !project) {
      return;
    }

    const images = project.images && project.images.length ? project.images : [];
    modalGallery.innerHTML = "";
    modalGallery.classList.toggle("has-single", images.length === 1);
    images.forEach((src) => {
      const img = document.createElement("img");
      img.src = src;
      img.alt = project.title;
      img.loading = "lazy";
      modalGallery.appendChild(img);
    });

    modalTag.textContent = project.tag;
    modalDate.textContent = project.date;
    modalTitle.textContent = project.title;

    const detailItems = project.details && project.details.length ? project.details : [project.description];
    modalDetails.innerHTML = detailItems.map((line) => "<li>" + escapeHtml(line) + "</li>").join("");

    modalTools.innerHTML = project.tools.map((tool) => "<li>" + escapeHtml(tool) + "</li>").join("");

    lastFocusedEl = document.activeElement;
    modal.classList.add("is-open");
    modal.setAttribute("aria-hidden", "false");
    document.body.classList.add("modal-open");

    const closeBtn = modal.querySelector(".project-modal-close");
    if (closeBtn) {
      closeBtn.focus();
    }

    const scrollArea = modal.querySelector(".project-modal-scroll");
    if (scrollArea) {
      scrollArea.scrollTop = 0;
    }
  }

  function closeModal() {
    if (!modal || !modal.classList.contains("is-open")) {
      return;
    }
    modal.classList.remove("is-open");
    modal.setAttribute("aria-hidden", "true");
    document.body.classList.remove("modal-open");
    if (lastFocusedEl && typeof lastFocusedEl.focus === "function") {
      lastFocusedEl.focus();
    }
  }

  if (modal) {
    modal.querySelectorAll("[data-modal-close]").forEach((el) => {
      el.addEventListener("click", closeModal);
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        closeModal();
      }
    });
  }

  function attachCardInteractions(card, project) {
    card.setAttribute("tabindex", "0");
    card.setAttribute("role", "button");
    card.setAttribute("aria-label", "View details for " + project.title);

    card.addEventListener("click", (event) => {
      if (event.target.closest(".gallery-btn")) {
        return;
      }
      openModal(project);
    });

    card.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        openModal(project);
      }
    });

    if (supportsHover) {
      card.addEventListener("mouseenter", () => {
        window.clearTimeout(hoverTimer);
        hoverTimer = window.setTimeout(() => openModal(project), HOVER_OPEN_DELAY);
      });

      card.addEventListener("mouseleave", () => {
        window.clearTimeout(hoverTimer);
      });
    }
  }

  /* ------------------------------------------------------------------ */
  /* Project grid rendering                                             */
  /* ------------------------------------------------------------------ */

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

      attachCardInteractions(card, project);
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
