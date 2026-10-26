document.querySelectorAll(".card").forEach((card) => {
  card.addEventListener("click", () => {
    const title = card.querySelector("h3").textContent;
    const tutor = card.querySelector(".provider").textContent;
    alert(title + " with " + tutor + "\n" + card.dataset.info);
  });
});

let skills = [
  { title: 'Python Tutoring', category: 'Programming', price: 20 },
  { title: 'Guitar Lessons', category: 'Music', price: 15 },
  { title: 'Resume Review', category: 'Career', price: 0 },
  { title: 'Web Development', category: 'Programming', price: 25 }
];

let filterButtons = document.querySelectorAll(".filter-buttons button");
let cards = document.querySelectorAll(".card");

filterButtons.forEach(function(button) {
  button.addEventListener("click", function() {
    let category = button.textContent;
    let result = filterSkillsByCategory(skills, category);

    cards.forEach(function(card) {
      let title = card.querySelector("h3").textContent;
      let show = false;

      result.forEach(function(skill) {
        if (skill.title === title) {
          show = true;
        }
      });
      if (show) {
        card.classList.remove("hidden");
      } else {
        card.classList.add("hidden");
      }
    });
  });
});

let calculateButton = document.getElementById("calculate-btn");

calculateButton.addEventListener("click", function() {
  let hourlyRate = parseFloat(document.getElementById("HourlyRate").value);
  let hours = parseFloat(document.getElementById("hours").value);
  let totalCost = calculateTotalCost(hourlyRate, hours);
  let resultDiv = document.getElementById("cost-result");
  resultDiv.textContent = `Total Cost: $${totalCost}`;
});