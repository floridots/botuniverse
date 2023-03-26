// Get DOM elements
const form = document.getElementById("budgetForm");
const viewsInput = document.getElementById("views");
const adsenseSelect = document.getElementById("adsense");
const resultDiv = document.getElementById("result");
const optionInfoDiv = document.querySelector(".option-info");

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

// Function to update option info
function updateOptionInfo() {
  const adsense = adsenseSelect.value;
  let optionText = "";
  
  switch (adsense) {
    case "50":
      optionText = "No Ads: Funciona em Nuvem, não precisa ser instalado na máquina do cliente, funciona 24/7, porém não visualiza anúncios da Twitch.";
      break;
    case "250":
      optionText = "Medium Ads: Funciona em Nuvem, não precisa ser instalado na máquina do cliente, funciona 24/7, assiste todos os adsense e contas da twitch conectada para maior segurança.";
      break;
    case "500":
      optionText = "High Ads: Funciona em Nuvem, não precisa ser instalado na máquina do cliente, funciona 24/7, assiste todos os adsense e contas da twitch conectadas, chatbot incluso e o bot abre o site dos anuncios e simulam compras e registro de email que ira gerar uma renda de até 6x a mais para o cliente.";
      break;
    default:
      optionText = "Selecione uma opção para ver a descrição.";
  }

  optionInfoDiv.textContent = optionText;
} 

// Add event listener to adsenseSelect
adsenseSelect.addEventListener("change", () => {
  updateOptionInfo();
});

// Initialize option info
updateOptionInfo();
  

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

  // Get DOM elements for nav links
const navLinks = document.querySelectorAll(".nav-link");

// Add event listeners for smooth scrolling
navLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    // Add smooth scrolling behavior here
  });
});
