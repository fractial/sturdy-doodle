const button = document.getElementById("button");

let count = 0;

button.addEventListener("click", () => {
  count++;
  if (count >= 3) button.textContent = "Immer noch nichts!";
  if (count >= 6) button.textContent = "Was hast du erwartet?";

  if (count >= 9) button.textContent = "Wenn du noch 500 mal klickst, dann...";


  if (count >= 509) button.textContent = "Oder auch nicht ¯\\_(ツ)_/¯";

  if (count >= 512) button.textContent = "Okay gut, klick nochmal!";
  if (count >= 513) button.textContent = "Alle Beschwerden an @master_hazelnut";
});