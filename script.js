var images = document.querySelectorAll("img");
var imgBoxes = document.querySelectorAll(".img-item");
var btn = document.querySelector("button");
var _loop_1 = function (i) {
  var dataSrc = images[i].getAttribute("data-src");
  if (dataSrc) images[i].src = dataSrc;
  images[i].addEventListener("load", function () {
    imgBoxes[i].classList.remove("lazy-load");
  });
};
for (var i = 0; i < images.length; i++) {
  _loop_1(i);
}
btn === null || btn === void 0
  ? void 0
  : btn.addEventListener("click", function () {
      document.location.reload();
    });
