/* ============================================
   TRIP PLANNER — Preloaded Routes JSON
   ============================================ */

const plannerData = {
  indianCities: [
    "New Delhi", "Mumbai", "Bangalore", "Chennai", "Kolkata",
    "Hyderabad", "Pune", "Ahmedabad", "Jaipur", "Kochi"
  ],
  normandyDestinations: [
    "Mont Saint-Michel", "Rouen", "Caen", "Bayeux",
    "Étretat", "Honfleur", "Giverny", "D-Day Beaches"
  ],
  routes: {
    "New Delhi": {
      flight: { airline: "Air France / Air India", route: "DEL → CDG (Paris)", duration: "8h 30m", cost: "₹42,000 – ₹65,000" },
      bestSeason: "May – September"
    },
    "Mumbai": {
      flight: { airline: "Air France / KLM", route: "BOM → CDG (Paris)", duration: "9h 15m", cost: "₹38,000 – ₹60,000" },
      bestSeason: "May – September"
    },
    "Bangalore": {
      flight: { airline: "Air France via Amsterdam", route: "BLR → AMS → CDG", duration: "12h 30m", cost: "₹40,000 – ₹62,000" },
      bestSeason: "April – September"
    },
    "Chennai": {
      flight: { airline: "Lufthansa via Frankfurt", route: "MAA → FRA → CDG", duration: "13h", cost: "₹42,000 – ₹64,000" },
      bestSeason: "May – September"
    },
    "Kolkata": {
      flight: { airline: "Emirates via Dubai", route: "CCU → DXB → CDG", duration: "14h", cost: "₹45,000 – ₹68,000" },
      bestSeason: "May – September"
    },
    "Hyderabad": {
      flight: { airline: "Air France via Paris", route: "HYD → CDG (Paris)", duration: "10h 45m", cost: "₹39,000 – ₹58,000" },
      bestSeason: "April – September"
    },
    "Pune": {
      flight: { airline: "KLM via Amsterdam", route: "PNQ → AMS → CDG", duration: "13h 30m", cost: "₹41,000 – ₹63,000" },
      bestSeason: "May – September"
    },
    "Ahmedabad": {
      flight: { airline: "Turkish Airlines via Istanbul", route: "AMD → IST → CDG", duration: "12h", cost: "₹37,000 – ₹55,000" },
      bestSeason: "April – September"
    },
    "Jaipur": {
      flight: { airline: "Air India via Delhi", route: "JAI → DEL → CDG", duration: "11h", cost: "₹43,000 – ₹66,000" },
      bestSeason: "May – September"
    },
    "Kochi": {
      flight: { airline: "Emirates via Dubai", route: "COK → DXB → CDG", duration: "13h 30m", cost: "₹40,000 – ₹60,000" },
      bestSeason: "May – September"
    }
  },
  normandyRoutes: {
    "Mont Saint-Michel": { train: "Paris Montparnasse → Rennes, then bus", duration: "4h 30m", cost: "€35 – €55", highlight: "Tidal island abbey" },
    "Rouen": { train: "Paris Saint-Lazare → Rouen", duration: "1h 15m", cost: "€12 – €25", highlight: "Gothic cathedral city" },
    "Caen": { train: "Paris Saint-Lazare → Caen", duration: "2h", cost: "€20 – €35", highlight: "William the Conqueror's castle" },
    "Bayeux": { train: "Paris Saint-Lazare → Bayeux", duration: "2h 30m", cost: "€25 – €40", highlight: "Famous medieval tapestry" },
    "Étretat": { train: "Paris → Le Havre, then bus", duration: "3h", cost: "€20 – €35", highlight: "Dramatic white cliffs" },
    "Honfleur": { train: "Paris → Deauville-Trouville, then bus", duration: "2h 30m", cost: "€20 – €35", highlight: "Picturesque harbor" },
    "Giverny": { train: "Paris Saint-Lazare → Vernon, then shuttle", duration: "1h 15m", cost: "€12 – €22", highlight: "Monet's gardens" },
    "D-Day Beaches": { train: "Paris → Caen/Bayeux, then bus/tour", duration: "3h", cost: "€25 – €45", highlight: "WWII landing beaches" }
  }
};

function initPlanner() {
  const originSelect = document.getElementById('plannerOrigin');
  const destSelect = document.getElementById('plannerDest');
  const planBtn = document.getElementById('planTripBtn');
  const resultDiv = document.getElementById('plannerResult');

  if (!originSelect || !destSelect) return;

  // Populate selects
  plannerData.indianCities.forEach(city => {
    const opt = document.createElement('option');
    opt.value = city;
    opt.textContent = city;
    originSelect.appendChild(opt);
  });
  plannerData.normandyDestinations.forEach(dest => {
    const opt = document.createElement('option');
    opt.value = dest;
    opt.textContent = dest;
    destSelect.appendChild(opt);
  });

  // Handle pre-selected destination from URL
  const urlParams = new URLSearchParams(window.location.search);
  const urlDest = urlParams.get('dest');
  if (urlDest && Array.from(destSelect.options).some(opt => opt.value === urlDest)) {
    destSelect.value = urlDest;
    const plannerForm = document.querySelector('.planner-form');
    if (plannerForm) {
      const msg = document.createElement('div');
      msg.className = "alert alert-warning mt-3 mb-4 text-center";
      msg.innerHTML = `<strong><i class="bi bi-geo-alt"></i> ${urlDest} Selected!</strong><br>Please select your Departure City (India) to continue.`;
      const formRow = plannerForm.querySelector('.row');
      if (formRow) {
        plannerForm.insertBefore(msg, formRow);
      }
    }
  }

  planBtn.addEventListener('click', () => {
    const origin = originSelect.value;
    const dest = destSelect.value;
    if (!origin || !dest) {
      alert('Please select both an Indian city and a Normandy destination.');
      return;
    }
    showPlanResult(origin, dest);
  });

  function showPlanResult(origin, dest) {
    const flightInfo = plannerData.routes[origin];
    const normandyInfo = plannerData.normandyRoutes[dest];

    if (!flightInfo || !normandyInfo) return;

    const totalMinDuration = parseDuration(flightInfo.flight.duration) + parseDuration(normandyInfo.duration);
    const totalHrs = Math.floor(totalMinDuration / 60);
    const totalMins = totalMinDuration % 60;

    resultDiv.style.display = 'block';
    resultDiv.innerHTML = `
      <h3><i class="bi bi-map me-2"></i>Your Route: ${origin} → ${dest}</h3>

      <div class="route-step">
        <div class="route-icon"><i class="bi bi-airplane"></i></div>
        <div class="route-info">
          <h5>✈️ Flight: ${flightInfo.flight.route}</h5>
          <p><strong>Airline:</strong> ${flightInfo.flight.airline}<br>
          <strong>Duration:</strong> ${flightInfo.flight.duration}<br>
          <strong>Cost:</strong> ${flightInfo.flight.cost}</p>
        </div>
      </div>

      <div class="route-step">
        <div class="route-icon"><i class="bi bi-train-front"></i></div>
        <div class="route-info">
          <h5>🚄 Train/Bus: ${normandyInfo.train}</h5>
          <p><strong>Duration:</strong> ${normandyInfo.duration}<br>
          <strong>Cost:</strong> ${normandyInfo.cost}</p>
        </div>
      </div>

      <div class="route-step">
        <div class="route-icon"><i class="bi bi-clock"></i></div>
        <div class="route-info">
          <h5>⏱️ Total Travel Time</h5>
          <p>Approximately <strong>${totalHrs}h ${totalMins}m</strong> (including transit)</p>
        </div>
      </div>

      <div class="route-step">
        <div class="route-icon"><i class="bi bi-calendar-heart"></i></div>
        <div class="route-info">
          <h5>🌸 Best Season to Visit</h5>
          <p>${flightInfo.bestSeason}</p>
        </div>
      </div>

      <div class="route-step">
        <div class="route-icon"><i class="bi bi-star"></i></div>
        <div class="route-info">
          <h5>✨ Destination Highlight</h5>
          <p>${normandyInfo.highlight}</p>
        </div>
      </div>

      <div class="text-center mt-4">
        <a href="package.html?dest=${encodeURIComponent(dest)}" class="btn btn-gold">
          <i class="bi bi-box-seam me-1"></i> Build Your Package
        </a>
      </div>
    `;
    resultDiv.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  function parseDuration(str) {
    let mins = 0;
    const hm = str.match(/(\d+)h\s*(\d+)?m?/);
    if (hm) {
      mins += parseInt(hm[1]) * 60;
      if (hm[2]) mins += parseInt(hm[2]);
    }
    return mins;
  }
}

document.addEventListener('DOMContentLoaded', initPlanner);
