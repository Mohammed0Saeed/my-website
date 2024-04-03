const navSlider = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".hidden-manu");

  burger.addEventListener("click", () => {
    nav.classList.toggle("hidden-manu-active");
    console.log("active");
  });
};

navSlider();
