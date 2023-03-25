// Get DOM elements
const form = document.getElementById("budgetForm");
const viewsInput = document.getElementById("views");
const adsenseSelect = document.getElementById("adsense");
const resultDiv = document.getElementById("result");

// Define adsense cost per view
const ADS_COSTS = {
  "50": 5,
  "250": 25,
  "500": 50
};

// Function to calculate total cost
function calculateCost() {
  const views = parseInt(viewsInput.value);
  const adsense = adsenseSelect.value;
  const costPerView = ADS_COSTS[adsense];
  const totalCost = views * costPerView;
  return totalCost;
}

// Function to display result
function displayResult() {
    if (isNaN(parseInt(viewsInput.value))) {
      resultDiv.textContent = "Please enter a valid number of views.";
    } else {
      const totalCost = calculateCost();
      resultDiv.textContent = `Estimated cost: R$${totalCost}`;
    }
    resultDiv.classList.add("result-shown");
  }
  

// Add event listener to form submit
form.addEventListener("submit", (event) => {
    event.preventDefault();
    displayResult();
  });
  

// Store user preferences
const storedViews = localStorage.getItem("views");
const storedAdsense = localStorage.getItem("adsense");

if (storedViews && storedAdsense) {
  viewsInput.value = storedViews;
  adsenseSelect.value = storedAdsense;
  displayResult();
}

// Add event listener to form inputs to store user preferences
viewsInput.addEventListener("input", () => {
    localStorage.setItem("views", viewsInput.value);
    displayResult();
  });
  
  adsenseSelect.addEventListener("change", () => {
    localStorage.setItem("adsense", adsenseSelect.value);
    displayResult();
  });
