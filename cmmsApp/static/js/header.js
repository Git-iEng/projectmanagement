document.addEventListener("DOMContentLoaded", function () {

  const nav = document.querySelector(".nav");
  const navMenu = document.getElementById("nav-menu");
  const navToggle = document.getElementById("nav-toggle");
  const header = document.querySelector(".header");
  const links = document.querySelectorAll("[data-scroll-to]");

  if (!nav || !navMenu || !navToggle) return;

  /* ===== OPEN MENU ===== */
  function openMenu() {
    navMenu.classList.add("show-menu");
    nav.classList.add("show-icon");   // applied on nav (correct)
    document.body.classList.add("no-scroll");
    navToggle.setAttribute("aria-expanded", "true");
  }

  /* ===== CLOSE MENU ===== */
  function closeMenu() {
    navMenu.classList.remove("show-menu");
    nav.classList.remove("show-icon");
    document.body.classList.remove("no-scroll");
    navToggle.setAttribute("aria-expanded", "false");

    // Close any open dropdown
    const activeDropdown = document.querySelector(".dropdown__item.active");
    if (activeDropdown) {
      activeDropdown.classList.remove("active");
    }
  }

  /* ===== TOGGLE MENU ===== */
  navToggle.addEventListener("click", function (e) {
    e.stopPropagation();
    navMenu.classList.contains("show-menu") ? closeMenu() : openMenu();
  });

  /* ===== SMOOTH SCROLL ===== */
  function headerOffset() {
    return header ? header.offsetHeight : 0;
  }

  function smoothScrollTo(targetSel) {
    const target = document.querySelector(targetSel);
    if (!target) return;

    const y = target.getBoundingClientRect().top + window.pageYOffset - headerOffset();

    window.scrollTo({
      top: y,
      behavior: "smooth"
    });
  }

  /* ===== NAV LINK CLICK ===== */
  links.forEach((el) => {
    el.addEventListener("click", function (e) {
      const targetSel = this.getAttribute("href") || this.dataset.target;

      if (!targetSel || !targetSel.startsWith("#")) return;

      const target = document.querySelector(targetSel);
      if (!target) return;

      e.preventDefault();

      closeMenu(); // close menu first

      setTimeout(() => {
        smoothScrollTo(targetSel);
      }, 150); // slight delay for smooth UX
    });
  });

  /* ===== CLICK OUTSIDE CLOSE ===== */
  document.addEventListener("click", function (e) {
    if (!nav.contains(e.target) && navMenu.classList.contains("show-menu")) {
      closeMenu();
    }
  });

  /* ===== ESC KEY CLOSE ===== */
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && navMenu.classList.contains("show-menu")) {
      closeMenu();
    }
  });

  /* ===== DROPDOWN (SAFE HANDLING) ===== */
  const solutionToggle = document.querySelector(".dropdown-toggle-solutions");

  if (solutionToggle) {
    const solutionItem = solutionToggle.closest(".dropdown__item");

    solutionToggle.addEventListener("click", function (e) {
      e.preventDefault();
      e.stopPropagation();
      solutionItem.classList.toggle("active");
    });

    document.addEventListener("click", function (event) {
      if (!solutionItem.contains(event.target)) {
        solutionItem.classList.remove("active");
      }
    });
  }

});