function login() {
    // Redirect to home.html for any input
    window.location.href = "home.html";
  }
  
  function showSubtypes(type) {
    const container = document.getElementById("subtypes");
    const subtypes = {
      "Apartment": ["1BHK", "2BHK", "3BHK"],
      "Villa": ["Luxury", "Standard", "Eco"],
      "Individual": ["1 Floor", "2 Floor", "3 Floor"],
      "Bungalow": ["Sea View", "Garden View", "Heritage"],
      "Duplex": ["Modern", "Classic", "Furnished"]
    };
  
    container.innerHTML = `<h2>${type} Subtypes</h2>`;
    subtypes[type].forEach(sub => {
      const imgName = sub.toLowerCase().replace(/\s/g, '') + ".jpg";
      container.innerHTML += `<div><img src="images/${imgName}" alt="${sub}"><p>${sub}</p></div>`;
    });
  }
  