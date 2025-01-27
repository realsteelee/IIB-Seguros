// Extended Car and Motorcycle Brands with Models
const vehicleData = {
    Auto: {
      Nissan: ["Altima", "Sentra", "Versa", "X-Trail", "Kicks", "Leaf"],
      Toyota: ["Corolla", "Camry", "RAV4", "Hilux", "Yaris", "Tacoma"],
      Ford: ["Fiesta", "Focus", "Escape", "Explorer", "Ranger", "Mustang"],
      Chevrolet: ["Aveo", "Spark", "Tracker", "Malibu", "Equinox", "Tahoe"],
      Honda: ["Civic", "Accord", "CR-V", "Fit", "Pilot", "HR-V"],
      Volkswagen: ["Jetta", "Golf", "Tiguan", "Passat", "Polo", "Taos"],
      Mazda: ["Mazda3", "Mazda6", "CX-3", "CX-5", "CX-9"],
      Hyundai: ["Elantra", "Tucson", "Santa Fe", "Accent", "Kona"],
      Kia: ["Rio", "Sportage", "Sorento", "Seltos", "Soul"],
      BMW: ["Series 3", "Series 5", "X3", "X5"],
      Mercedes: ["C-Class", "E-Class", "GLA", "GLE"]
    },
    Moto: {
      Yamaha: ["YZF-R3", "MT-07", "FZ-09", "Tenere 700"],
      Honda: ["CBR500R", "Rebel 500", "Africa Twin", "Shadow Phantom"],
      Suzuki: ["GSX-R750", "Boulevard", "V-Strom 650", "DR-Z400"],
      Kawasaki: ["Ninja 400", "Z650", "Versys 650", "Vulcan S"],
      BMW: ["G310R", "R1250GS", "S1000RR", "F900R"],
      HarleyDavidson: ["Iron 883", "Street Glide", "Fat Boy", "Road King"],
      KTM: ["Duke 390", "RC 390", "1290 Super Adventure", "500 EXC-F"],
      Ducati: ["Panigale V4", "Monster 821", "Scrambler", "Multistrada"]
    }
  };
  
  // Populate the brand dropdown based on the vehicle type
  function populateBrands(vehicleType) {
    const brandSelect = document.getElementById("vehicleBrand");
    brandSelect.innerHTML = '<option value="" disabled selected>Selecciona la marca...</option>'; // Reset options
  
    if (vehicleData[vehicleType]) {
      Object.keys(vehicleData[vehicleType]).forEach((brand) => {
        const option = document.createElement("option");
        option.value = brand;
        option.textContent = brand;
        brandSelect.appendChild(option);
      });
      brandSelect.disabled = false;
    } else {
      brandSelect.disabled = true;
    }
  }
  
  // Populate the models dropdown based on the selected brand
  function populateModels(vehicleType, selectedBrand) {
    const modelSelect = document.getElementById("vehicleModel");
    modelSelect.innerHTML = '<option value="" disabled selected>Selecciona el modelo...</option>'; // Reset options
  
    if (vehicleData[vehicleType] && vehicleData[vehicleType][selectedBrand]) {
      vehicleData[vehicleType][selectedBrand].forEach((model) => {
        const option = document.createElement("option");
        option.value = model;
        option.textContent = model;
        modelSelect.appendChild(option);
      });
      modelSelect.disabled = false;
    } else {
      modelSelect.disabled = true;
    }
  }
  
  // Populate years for the dropdown
  function populateYears() {
    const yearSelect = document.getElementById("vehicleYear");
    yearSelect.innerHTML = '<option value="" disabled selected>Selecciona el año...</option>'; // Reset options
  
    for (let year = 2025; year >= 1970; year--) {
      const option = document.createElement("option");
      option.value = year;
      option.textContent = year;
      yearSelect.appendChild(option);
    }
  }
  
  // Setup vehicle type buttons and their behavior
  function setupVehicleTypeButtons() {
    const vehicleButtons = document.querySelectorAll(".vehicle-btn");
    const vehicleTypeInput = document.getElementById("vehicleType");
  
    vehicleButtons.forEach((button) => {
      button.addEventListener("click", () => {
        vehicleButtons.forEach((btn) => btn.classList.remove("selected")); // Clear selection
        button.classList.add("selected"); // Highlight the selected button
        vehicleTypeInput.value = button.dataset.type; // Set the hidden input value
        populateBrands(button.dataset.type); // Populate brands based on type
        document.getElementById("vehicleModel").innerHTML = '<option value="" disabled selected>Selecciona el modelo...</option>'; // Reset models
      });
    });
  }
  
  // Display rates section after form submission
  function showRates() {
    const ratesSection = document.getElementById("rates");
    ratesSection.style.display = "block";
  }
  
  // Initialize form dropdowns and event listeners
  document.addEventListener("DOMContentLoaded", () => {
    populateYears(); // Populate year dropdown
    setupVehicleTypeButtons(); // Setup vehicle type buttons
  
    const brandSelect = document.getElementById("vehicleBrand");
    brandSelect.addEventListener("change", (e) => {
      const vehicleType = document.getElementById("vehicleType").value;
      populateModels(vehicleType, e.target.value);
    });
  
    const vehicleForm = document.getElementById("vehicleForm");
    vehicleForm.addEventListener("submit", (e) => {
      e.preventDefault();
  
      // Validate that vehicle type is selected
      if (!document.getElementById("vehicleType").value) {
        alert("Por favor selecciona si es un Coche o una Moto.");
        return;
      }
  
      showRates(); // Display rates section
    });
  });
  