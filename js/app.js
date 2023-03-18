window.onload = function () {
  const buttonTop = document.querySelector(".button--top");
  const originStyle = buttonTop.getAttribute("class");

  function updateStyle() {
    const updateStyle =
      window.scrollY >= window.innerHeight / 3
        ? originStyle.replace("hide", "")
        : originStyle;
    buttonTop.setAttribute("class", updateStyle);
  }

  updateStyle();

  window.addEventListener("scroll", updateStyle);
};
