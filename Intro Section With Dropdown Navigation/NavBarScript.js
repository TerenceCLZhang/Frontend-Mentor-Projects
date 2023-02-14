const menuBtn = document.querySelector("#menu-btn");
const menu = document.querySelector("#menu");
const closeBtn = document.querySelector("#close-btn");
const featuresBtn = document.querySelector("#features-btn");
const companyBtn = document.querySelector("#company-btn");
const features = document.querySelector(".features");
const company = document.querySelector(".company");

const arrows = {
  features: featuresBtn.querySelector("img"),
  company: companyBtn.querySelector("img"),
};

const bodyChildren = Array.from(document.body.children);
const filteredChildren = bodyChildren.filter(
  (child) => child.tagName !== "NAV"
);

menuBtn.addEventListener("click", (event) => {
  event.stopPropagation();
  menu.style.display = "flex";
  filteredChildren.forEach((child) => {
    child.style.filter = "blur(1px)";
  });
  document.body.style.overflow = "hidden";
});

closeBtn.addEventListener("click", () => {
  menu.style.display = "none";
  filteredChildren.forEach((child) => {
    child.style.filter = "blur(0px)";
  });
  document.body.style.overflow = "auto";
});

featuresBtn.addEventListener("click", () => {
  toggleSection(features, arrows.features);
});

companyBtn.addEventListener("click", () => {
  toggleSection(company, arrows.company);
});

function toggleSection(section, arrow) {
  if (section.style.display === "flex") {
    section.style.display = "none";
    arrow.src = "images/icon-arrow-down.svg";
  } else {
    section.style.display = "flex";
    arrow.src = "images/icon-arrow-up.svg";
  }
}

window.addEventListener("resize", () => {
  const width = window.innerWidth;
  if (width > 50 * 16) {
    menu.style.display = "none";
    features.style.display = "none";
    arrows.features.src = "images/icon-arrow-down.svg";
    company.style.display = "none";
    arrows.company.src = "images/icon-arrow-down.svg";
    filteredChildren.forEach((child) => {
      child.style.filter = "blur(0px)";
    });
    document.body.style.overflow = "auto";
  }
});

document.addEventListener("click", (event) => {
  if (menu.style.display === "flex" && !menu.contains(event.target)) {
    menu.style.display = "none";
    filteredChildren.forEach((child) => {
      child.style.filter = "blur(0px)";
    });
    document.body.style.overflow = "auto";
  }
});
