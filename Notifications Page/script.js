const markAllAsReadBtn = document.getElementById("mark-all-as-read-btn");
const notifications = document.querySelectorAll(".notification");

markAllAsReadBtn.addEventListener("click", () => {
  const number = document.getElementsByClassName("number")[0];
  notifications.forEach((notification) => {
    let message = notification.querySelector(".contents p.message");
    let unread = message.querySelector("span.unread");
    if (unread) {
      message.removeChild(unread);
      notification.classList.remove("unread-background");
      number.textContent = 0;
    }
  });
});

notifications.forEach((notification) => {
  const message = notification.querySelector(".contents p.message span.unread");
  if (message) {
    if (message.classList.contains("unread")) {
      notification.classList.add("unread-background");
    }
  }
});
