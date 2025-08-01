document.addEventListener("DOMContentLoaded", () => {
  const slider = document.getElementById("speedSlider");
  const speedValue = document.getElementById("speedValue");
  const internetSpeed = document.getElementById("internetSpeed");
  const bufferingStatus = document.getElementById("bufferingStatus");

  function updateInternetSpeed(speed) {
    speedValue.textContent = speed;

    let wifiSpeed;
    if (speed < 10) {
      wifiSpeed = 100; // Still
    } else if (speed < 30) {
      wifiSpeed = 50; // Slow walk
    } else if (speed < 60) {
      wifiSpeed = 10; // Fast walk
    } else {
      wifiSpeed = 0.5; // Running
    }

    internetSpeed.textContent = wifiSpeed + " Mbps";

    if (wifiSpeed < 5) {
      bufferingStatus.innerHTML = `<div class="buffering">🔥 Buffering... Please slow down 🙃</div>`;
    } else {
      bufferingStatus.innerHTML = "";
    }
  }

  slider.addEventListener("input", () => {
    const speed = parseInt(slider.value, 10);
    updateInternetSpeed(speed);
  });

  updateInternetSpeed(0); // Initialize
});
