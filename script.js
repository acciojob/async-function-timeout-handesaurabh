//your JS code here. If required.
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
async function showMessage() {
  const text = document.getElementById("text").value;
  const delayTime = parseInt(document.getElementById("delay").value);
  const output = document.getElementById("output");

  output.textContent = "";

  if (!text || isNaN(delayTime) || delayTime < 0) {
    output.textContent = "Please enter valid text and delay time!";
    return;
  }

  await delay(delayTime);
  output.textContent = text;
}

document.getElementById("btn").addEventListener("click", showMessage);