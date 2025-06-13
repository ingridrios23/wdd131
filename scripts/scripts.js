const currentYear = new Date().getFullYear();
document.querySelector('footer p:first-of-type').innerHTML = `&copy; ${currentYear} 🌸 Ingrid Rios 🌸 Peru`;

const lastModified = document.lastModified;
document.querySelector('footer p:nth-of-type(2)').innerHTML = `Last modified: ${lastModified}`;

function calculateWindChill(tempF, speedMph) {
  return (
    35.74 +
    0.6215 * tempF -
    35.75 * Math.pow(speedMph, 0.16) +
    0.4275 * tempF * Math.pow(speedMph, 0.16)
  ).toFixed(1);
}

document.addEventListener("DOMContentLoaded", () => {
  const yearSpan = document.getElementById("currentyear");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  const lastModifiedElem = document.getElementById("lastModified");
  if (lastModifiedElem) {
    lastModifiedElem.textContent = `Last modified: ${document.lastModified}`;
  }

  const tempC = parseFloat(document.getElementById("temperature").textContent);
  const windKph = parseFloat(document.getElementById("windSpeed").textContent);

  const tempF = (tempC * 9) / 5 + 32;
  const windMph = windKph / 1.609;

  const isMetricValid = tempC <= 10 && windKph > 4.8;
  const isImperialValid = tempF <= 50 && windMph > 3;

  const windChillSpan = document.getElementById("windChill");

  if (isMetricValid || isImperialValid) {
    const windChillF = calculateWindChill(tempF, windMph);
    const windChillC = ((windChillF - 32) * 5) / 9;
    windChillSpan.textContent = `${windChillC.toFixed(1)} °C`;
  } else {
    windChillSpan.textContent = "N/A";
  }
});
