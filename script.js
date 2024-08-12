let playing = false;

document.body.addEventListener("click", (event) => {
  if(playing == false) {
    playing = true;
    document.body.style = "background-color: green;";
    calculate_bpm()
  }
});

const delay = ms => new Promise(res => setTimeout(res, ms));

const calculate_bpm = async () => {
  await delay(5000);
  document.body.style = "background-color: red;";
  let pulses = prompt("Pulses?");
  let bpm = pulses * 12;
  alert(`Your BMP is ${bpm}`)
  playing = false;
};
