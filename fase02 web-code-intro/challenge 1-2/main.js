function scrollTop() {
    window.scroll({
      top: 0,
      behavior: "smooth"
    });
  };

  document.getElementById("top").addEventListener("click", scrollTop)