// Digital Clock

function updateTime() {
  // Retrives time data
  const now = new Date();
  const hour = now.getHours().toString().padStart(2, 0);
  const minutes = now.getMinutes().toString().padStart(2, 0);
  const second = now.getSeconds().toString().padStart(2, 0);

  const currentTime = `${hour}:${minutes}:${second}`;

  // Display time on HTML
  document.querySelector("h1").innerHTML = currentTime;

  // setInterval(updateTime, 1000);
}

setInterval(updateTime, 1000);
