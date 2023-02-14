const menuBtn = document.getElementById("menu-btn");
const menu = document.getElementById("menu");
const closeBtn = document.getElementById("close-btn");
const featuresBtn = document.getElementById("features-btn");
const companyBtn = document.getElementById("company-btn");
const features = document.getElementsByClassName("features")[0];
const company = document.getElementsByClassName("company")[0];

const arrowFeature = featuresBtn.querySelector("img");
const arrowCompany = companyBtn.querySelector("img");

const body = document.body;
const bodyChildren = Array.from(body.children);
const filteredChildren = bodyChildren.filter(
  (child) => child.tagName !== "NAV"
);

menuBtn.addEventListener("click", () => {
  menu.style.display = "flex";
  filteredChildren.forEach((child) => {
    child.style.filter = "blur(1px)";
  });
});

closeBtn.addEventListener("click", () => {
  menu.style.display = "none";
  filteredChildren.forEach((child) => {
    child.style.filter = "blur(0px)";
  });
});

featuresBtn.addEventListener("click", () => {
  if (features.style.display === "flex") {
    features.style.display = "none";
    arrowFeature.src = "images/icon-arrow-down.svg";
  } else {
    features.style.display = "flex";
    arrowFeature.src = "images/icon-arrow-up.svg";
  }
});

companyBtn.addEventListener("click", () => {
  if (company.style.display === "flex") {
    company.style.display = "none";
    arrowCompany.src = "images/icon-arrow-down.svg";
  } else {
    company.style.display = "flex";
    arrowCompany.src = "images/icon-arrow-up.svg";
  }
});

window.addEventListener("resize", function () {
  const width = window.innerWidth;

  if (width > 50 * 16) {
    menu.style.display = "none";
    features.style.display = "none";
    arrowFeature.src = "images/icon-arrow-down.svg";
    company.style.display = "none";
    arrowCompany.src = "images/icon-arrow-down.svg";
    filteredChildren.forEach((child) => {
      child.style.filter = "blur(0px)";
    });
  }
});
