const section = document.querySelector(".main__section");
section.addEventListener("click", () => {
  section.classList.add("top");
  setTimeout(() => {
    section.classList.remove("top");
  }, 100);
});
