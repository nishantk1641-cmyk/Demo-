// Update this address to the business's real enquiry email before publishing.
const BUSINESS_EMAIL = "replace-with-real-business-email@example.com";

const topbar = document.getElementById("topbar");
const hamb = document.getElementById("hamb");
const navlinks = document.getElementById("navlinks");
const updateHeader = () => topbar.classList.toggle("scrolled", window.scrollY > 35);
window.addEventListener("scroll", updateHeader, { passive: true });
updateHeader();

hamb.addEventListener("click", () => {
  const isOpen = navlinks.classList.toggle("open");
  document.body.classList.toggle("menu-open", isOpen);
  hamb.setAttribute("aria-expanded", String(isOpen));
  hamb.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
  hamb.textContent = isOpen ? "×" : "☰";
});
navlinks.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
  navlinks.classList.remove("open");
  document.body.classList.remove("menu-open");
  hamb.setAttribute("aria-expanded", "false");
  hamb.textContent = "☰";
}));

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });
document.querySelectorAll(".reveal").forEach(el => observer.observe(el));

document.getElementById("year").textContent = new Date().getFullYear();

const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightboxImg");
document.querySelectorAll(".gallery button[data-img]").forEach(button => {
  button.addEventListener("click", () => {
    lightboxImg.src = button.dataset.img;
    lightboxImg.alt = button.querySelector("img").alt;
    lightbox.classList.add("open");
    document.body.style.overflow = "hidden";
    document.getElementById("closeLightbox").focus();
  });
});
function closeLightbox() {
  lightbox.classList.remove("open");
  document.body.style.overflow = "";
  lightboxImg.src = "";
}
document.getElementById("closeLightbox").addEventListener("click", closeLightbox);
lightbox.addEventListener("click", e => { if (e.target === lightbox) closeLightbox(); });
document.addEventListener("keydown", e => { if (e.key === "Escape") closeLightbox(); });

document.getElementById("inquiryForm").addEventListener("submit", event => {
  event.preventDefault();
  const form = event.currentTarget;
  if (!form.reportValidity()) return;
  const data = new FormData(form);
  const lines = [
    "New floral / event enquiry",
    "",
    `Name: ${data.get("name")}`,
    `Email: ${data.get("email")}`,
    `Event type: ${data.get("event")}`,
    `Event date: ${data.get("date") || "Not specified"}`,
    `Budget: ${data.get("budget") || "Not specified"}`,
    "",
    "Details:",
    data.get("message")
  ];
  const subject = encodeURIComponent(`Event enquiry — ${data.get("event")}`);
  const body = encodeURIComponent(lines.join("\n"));
  const toast = document.getElementById("formToast");
  if (BUSINESS_EMAIL.includes("replace-with-real")) {
    toast.textContent = "The form is working, but the business email has not been configured yet. Update BUSINESS_EMAIL in script.js before publishing.";
    toast.classList.add("show");
    return;
  }
  toast.textContent = "Opening your email app with the enquiry details…";
  toast.classList.add("show");
  window.location.href = `mailto:${BUSINESS_EMAIL}?subject=${subject}&body=${body}`;
});
