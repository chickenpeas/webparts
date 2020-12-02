(function () {
  let attr = "data-src",
    dataSrcImgs = document.querySelectorAll("img[" + attr + "]"),
    removeAttr = function (a) {
    a.target.removeAttribute(attr)
  };
  Array.prototype.forEach.call(dataSrcImgs,
    function (a) {
      a.setAttribute("src", a.getAttribute(attr)); a.addEventListener("load", removeAttr)
    });
  window.addEventListener("unload", function () {
    Array.prototype.forEach.call(dataSrcImgs, function (a) { a.removeEventListener("load", removeAttr) })
  })
})();