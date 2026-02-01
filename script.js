const form = document.getElementById("riskForm");
const resultBox = document.getElementById("resultBox");
const riskLevel = document.getElementById("riskLevel");
const riskMessage = document.getElementById("riskMessage");
const tipsList = document.getElementById("tipsList");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const location = document.getElementById("location").value;
  const water = document.getElementById("water").value;
  const nets = document.getElementById("nets").value;
  const rain = document.getElementById("rain").value;
  const vulnerable = document.getElementById("vulnerable").value;

  let score = 0;

  if (location === "rural") score += 2;
  if (water === "yes") score += 3;

  if (nets === "sometimes") score += 1;
  if (nets === "never") score += 3;

  if (rain === "medium") score += 1;
  if (rain === "high") score += 3;

  if (vulnerable === "yes") score += 2;

  let level = "";
  let message = "";
  let tips = [];

  if (score <= 3) {
    level = "Low Risk";
    message = "Your current situation shows a low risk of malaria, but prevention is still important.";
    tips = [
      "Continue using bed nets every night",
      "Keep surroundings clean and dry",
      "Seek testing if any fever symptoms appear"
    ];
  } else if (score <= 7) {
    level = "Moderate Risk";
    message = "There is a moderate risk of malaria in your environment. Strengthening prevention steps is recommended.";
    tips = [
      "Sleep under treated bed nets every night",
      "Drain or cover standing water near your home",
      "Use mosquito repellent in the evenings",
      "Visit a clinic if fever or chills occur"
    ];
  } else {
    level = "High Risk";
    message = "Your environment and habits suggest a high risk of malaria. Immediate prevention and awareness steps are strongly advised.";
    tips = [
      "Use treated bed nets consistently for all household members",
      "Remove or treat standing water sources immediately",
      "Seek regular malaria testing for vulnerable individuals",
      "Consult a health worker about preventive treatment options"
    ];
  }

  displayResults(level, message, tips);
});

function displayResults(level, message, tips) {
  riskLevel.textContent = `Risk Level: ${level}`;
  riskMessage.textContent = message;

  tipsList.innerHTML = "";
  tips.forEach((tip) => {
    const li = document.createElement("li");
    li.textContent = tip;
    tipsList.appendChild(li);
  });

  resultBox.classList.remove("hidden");
}
