const headerContainer = document.getElementById("header");
if (headerContainer) {
  fetch("/components/header.html")
    .then((res) => res.text())
    .then((data) => {
      headerContainer.innerHTML = data;

      const menuBtnRef = headerContainer.querySelector("[data-menu-button]");
      const navListRef = headerContainer.querySelector(".navigation-list");
      const headerRef = headerContainer.querySelector(".header");
      const navigationRef = headerContainer.querySelector(".navigation");

      if (menuBtnRef) {
        menuBtnRef.addEventListener("click", () => {
          menuBtnRef.classList.toggle("is-open");
          navListRef.classList.toggle("is-open");
          headerRef.classList.toggle("is-open");
          navigationRef.classList.toggle("is-open");
        });
      }

      headerContainer.querySelectorAll(".navigation-link").forEach((n) =>
        n.addEventListener("click", () => {
          navListRef.classList.remove("is-open");
          menuBtnRef.classList.remove("is-open");
          headerRef.classList.remove("is-open");
          navigationRef.classList.remove("is-open");
        })
      );
    });
}

const footerContainer = document.getElementById("footer");
if (footerContainer) {
  fetch("/components/footer.html")
    .then((res) => res.text())
    .then((data) => {
      footerContainer.innerHTML = data;
    });
}
