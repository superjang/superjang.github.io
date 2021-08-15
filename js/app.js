window.onload = function () {
  const buttonTop = document.querySelector(".button--top");
  const originStyle = buttonTop.getAttribute("class");

  window.addEventListener("scroll", function (e) {
    const updateStyle =
      window.scrollY === 0 ? `${originStyle} hide` : originStyle;
    buttonTop.setAttribute("class", updateStyle);
  });
};
