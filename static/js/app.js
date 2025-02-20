const toggleSidebar = () => {
  const wrapper = document.querySelector(".wrapper");
  const toggleBtn = document.querySelector("#toggle-sidebar");

  toggleBtn.addEventListener("click", () => {
    wrapper.classList.toggle("active");
  });
};
toggleSidebar();
