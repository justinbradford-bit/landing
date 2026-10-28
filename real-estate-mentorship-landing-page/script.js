// Replace these placeholders with your payment provider's checkout URLs before publishing.
const CHECKOUT_URLS = {
  general: "https://REPLACE-WITH-YOUR-GENERAL-CHECKOUT-LINK",
  oneonone: "https://REPLACE-WITH-YOUR-ONE-ON-ONE-CHECKOUT-LINK"
};
document.querySelectorAll(".checkout-link").forEach((link) => {
  const plan = link.dataset.plan;
  const url = CHECKOUT_URLS[plan];
  if (url && !url.includes("REPLACE-WITH-YOUR")) {
    link.href = url;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
  } else {
    link.href = "#checkout-setup";
    link.addEventListener("click", (event) => {
      event.preventDefault();
      alert("Add your " + (plan === "general" ? "$5 recurring General Access" : "$500 One-on-One Mentorship") + " checkout URL in script.js before publishing.");
    });
  }
});
document.getElementById("year").textContent = new Date().getFullYear();