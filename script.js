document.addEventListener("DOMContentLoaded", () => {
  // Only run if profile page
  if (document.getElementById("profileForm")) {
    const form = document.getElementById("profileForm");
    const callsignInput = document.getElementById("callsign");
    const statusSelect = document.getElementById("status");
    const displayCallsign = document.getElementById("displayCallsign");
    const displayStatus = document.getElementById("displayStatus");

    // Load saved values from localStorage
    const savedCallsign = localStorage.getItem("callsign");
    const savedStatus = localStorage.getItem("status");

    if (savedCallsign) {
      callsignInput.value = savedCallsign;
      displayCallsign.textContent = savedCallsign;
    }

    if (savedStatus) {
      statusSelect.value = savedStatus;
      displayStatus.textContent = savedStatus;
    }

    // Save on submit
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const callsign = callsignInput.value.trim();
      const status = statusSelect.value;

      if (callsign !== "") {
        localStorage.setItem("callsign", callsign);
        localStorage.setItem("status", status);

        displayCallsign.textContent = callsign;
        displayStatus.textContent = status;
      }
    });
  }
});
