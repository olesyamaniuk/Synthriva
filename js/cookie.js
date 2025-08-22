document.addEventListener("DOMContentLoaded", function () {
  const popup = document.getElementById("cookie-popup");
  const acceptButton = document.getElementById("accept-cookies");
  const declineButton = document.getElementById("decline-cookies");

  if (!localStorage.getItem("cookiesAccepted")) {
    popup.classList.add("show");
  }

  function hidePopup() {
    popup.classList.remove("show");

    setTimeout(() => {
      popup.style.display = "none";
    }, 400);
  }

  acceptButton.onclick = function () {
    localStorage.setItem("cookiesAccepted", "true");
    hidePopup();
  };

  declineButton.onclick = function () {
    localStorage.setItem("cookiesAccepted", "false");
    hidePopup();
  };
});
