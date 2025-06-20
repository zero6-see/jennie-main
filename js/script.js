 document.addEventListener("DOMContentLoaded", function () {
    const menuIcon = document.querySelector(".menu .icon");
    const bar = menuIcon.querySelector(".bar");
    const mark = menuIcon.querySelector(".mark");
    const menuList = document.querySelector(".menuList");

    let isOpen = false;

    menuIcon.addEventListener("click", function () {
      isOpen = !isOpen;

      if (isOpen) {
        menuList.style.display = "block";
        bar.style.display = "none";
        mark.style.display = "block";
      } else {
        menuList.style.display = "none";
        bar.style.display = "block";
        mark.style.display = "none";
      }
    });
  });