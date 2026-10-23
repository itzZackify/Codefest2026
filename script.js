
"use strict";

// =====================================
// CODEFEST 2026 - JAVASCRIPT
// =====================================

// 1. MOBILE NAVIGATION
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");

    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.textContent = isOpen ? "✕" : "☰";
});

// Close the mobile menu after selecting a navigation link.
navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("open");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.textContent = "☰";
    });
});

// 2. LIGHT AND DARK THEME SWITCHER
const themeToggle = document.getElementById("themeToggle");

themeToggle.addEventListener("click", () => {
    const isLight = document.body.classList.toggle("light-theme");

    themeToggle.textContent = isLight ? "🌙" : "☀️";
    themeToggle.setAttribute(
        "aria-label",
        isLight ? "Switch to dark theme" : "Switch to light theme"
    );
});

// 3. REGISTRATION FORM INTERACTION
const registrationForm = document.getElementById("registrationForm");
const formMessage = document.getElementById("formMessage");

registrationForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const studentName = document
        .getElementById("studentName").value.trim();

    const studentEmail = document
        .getElementById("studentEmail").value.trim();

    const learningTrack = document
        .getElementById("learningTrack").value;

    if (!studentName || !studentEmail || !learningTrack) {
        formMessage.textContent = "Please complete all fields.";
        return;
    }

    formMessage.textContent =
        `Thank you, ${studentName}! Your demonstration registration ` +
        `for ${learningTrack} has been completed on this page.`;

    registrationForm.reset();
});

// 4. AUTOMATIC COPYRIGHT YEAR
document.getElementById("currentYear").textContent =
    new Date().getFullYear();
