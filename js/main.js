// main.js

document.addEventListener("DOMContentLoaded", () => {
  const supportBtn = document.querySelector(".btn-pill.btn-yellow");
  const learnMoreBtn = document.querySelector(".btn-pill.btn-yellow.btn-outline");
  const createChangeBtn = document.querySelector(".btn-cream");
  const getInvolvedBtn = document.querySelector(".btn-yellow.btn-large");

  // Smooth scroll helper
  const smoothScrollTo = (selector) => {
    const el = document.querySelector(selector);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  // Example sections (hook these up once you add sections below the hero)
  supportBtn?.addEventListener("click", () => {
    // In production, replace with your real donation section ID or external link
    smoothScrollTo("#donate");
  });

  learnMoreBtn?.addEventListener("click", () => {
    smoothScrollTo("#learn-more");
  });

  createChangeBtn?.addEventListener("click", () => {
    smoothScrollTo("#donate");
  });

  getInvolvedBtn?.addEventListener("click", () => {
    smoothScrollTo("#get-involved");
  });

  // Simple analytics-style logging (swap for real tracking later)
  const trackClick = (label) => {
    console.log(`CTA clicked: ${label}`);
    // Hook into real analytics here (e.g., gtag, Segment, etc.)
  };

  [supportBtn, learnMoreBtn, createChangeBtn, getInvolvedBtn].forEach((btn) => {
    if (!btn) return;
    btn.addEventListener("click", () => {
      const label = btn.textContent.trim();
      trackClick(label);
    });
  });

  // Add a small fade-in animation for the hero on load
  const heroOverlay = document.querySelector(".hero-overlay");
  const metricCard = document.querySelector(".hero-metric-card");

  if (heroOverlay) {
    heroOverlay.style.opacity = "0";
    heroOverlay.style.transform = "translateY(16px)";
    setTimeout(() => {
      heroOverlay.style.transition = "opacity 600ms ease, transform 600ms ease";
      heroOverlay.style.opacity = "1";
      heroOverlay.style.transform = "translateY(0)";
    }, 100);
  }

  if (metricCard) {
    metricCard.style.opacity = "0";
    metricCard.style.transform = "translateY(16px)";
    setTimeout(() => {
      metricCard.style.transition = "opacity 600ms ease 150ms, transform 600ms ease 150ms";
      metricCard.style.opacity = "1";
      metricCard.style.transform = "translateY(0)";
    }, 150);
  }
});
