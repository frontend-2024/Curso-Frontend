const mobilemenu = document.querySelector(".mobileMenu");
const nav__list = document.querySelector(".nav__list");

const toggleMenu = () => {
  nav__list.classList.toggle("nav__list--visible");
  const showMenu = nav__list.classList.contains("nav__list--visible");
  mobilemenu.innerHTML = showMenu
    ? '<i class="fa-solid fa-xmark"></i>'
    : '<i class="fa-solid fa-bars"></i>';
};

const widthChange = () => {
  if (window.innerWidth > 599) {
    // const showMenu = nav__list.classList.contains("nav__list--visible");
    // if (showMenu) nav__list.classList.remove("nav__list--visible");
    nav__list.classList.remove("nav__list--visible");
    mobilemenu.innerHTML = '<i class="fa-solid fa-bars"></i>';
  }

  const showMenu = nav__list.classList.contains("nav__list--visible");
  mobilemenu.innerHTML = showMenu
    ? '<i class="fa-solid fa-xmark"></i>'
    : '<i class="fa-solid fa-bars"></i>';
};

mobilemenu.addEventListener("click", toggleMenu);

onresize = widthChange;
