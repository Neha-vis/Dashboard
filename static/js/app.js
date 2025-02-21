const toggleSidebar = () => {
  const wrapper = document.querySelector(".wrapper");
  const toggleBtn = document.querySelector("#toggle-sidebar");

  toggleBtn.addEventListener("click", () => {
    wrapper.classList.toggle("active");
  });
};
toggleSidebar();

//theme.js

const themeToggle = () => {
  const toggle = document.querySelector("#theme-toggle");

  toggle.addEventListener("click", () => {
    console.log("name");

    if (document.querySelector("body").getAttribute("data-theme") === "dark") {
      document.querySelector("body").setAttribute("data-theme", "light");
      toggle.innerHTML = `<i class="fad fa-lightbulb-on"></i>`;
      localStorage.setItem("theme", "light");
    } else if (
      document.querySelector("body").getAttribute("data-theme") === "light"
    ) {
      document.querySelector("body").setAttribute("data-theme", "dark");
      toggle.innerHTML = `<i class="fad fa-lightbulb"></i>`;
      localStorage.setItem("theme", "dark");
    }
  });

  if (localStorage.getItem("theme") === "dark") {
    document.querySelector("body").setAttribute("data-theme", "dark");
    toggle.innerHTML = `<i class="fad fa-lightbulb"></i>`;
    localStorage.setItem("theme", "dark");
  } else if (localStorage.getItem("theme") === "light") {
    document.querySelector("body").setAttribute("data-theme", "light");
    toggle.innerHTML = `<i class="fad fa-lightbulb"></i>`;
    localStorage.setItem("theme", "light");
  }
};
themeToggle();
