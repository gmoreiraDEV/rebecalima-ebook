const PIXEL_ID = document.currentScript.getAttribute("data-google-pixel-id");

window.dataLayer = window.dataLayer || [];
function gtag() {
  dataLayer.push(arguments);
}
gtag("js", new Date());

gtag("config", `${PIXEL_ID}`);
