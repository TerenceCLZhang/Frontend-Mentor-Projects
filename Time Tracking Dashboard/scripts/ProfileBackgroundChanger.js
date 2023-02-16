const profile = document.getElementsByClassName("profile")[0];
const user = document.getElementsByClassName("user")[0];

profile.addEventListener("mouseover", (event) => {
  if (!user.contains(event.target)) {
    profile.classList.add("hovering-background");
  }
});

profile.addEventListener("mouseout", (event) => {
  if (!user.contains(event.target)) {
    profile.classList.remove("hovering-background");
  }
});
