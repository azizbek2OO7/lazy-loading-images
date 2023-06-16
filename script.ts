const images = document.querySelectorAll("img");
const imgBoxes = document.querySelectorAll(".img-item");
const btn = document.querySelector("button");

for (let i = 0; i < images.length; i++) {
  const dataSrc = images[i].getAttribute("data-src");
  if (dataSrc) images[i].src = dataSrc;
  images[i].addEventListener("load", () => {
    imgBoxes[i].classList.remove("lazy-load");
  });
}

btn?.addEventListener("click", () => {
  document.location.reload();
});
