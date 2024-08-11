let clicks = 0;
let clicks_display = document.getElementById("click_display");


document.body.addEventListener("click", (event) => {
  clicks += 1;
  clicks_display.innerText(`Clicks: ${clicks}`);
});
