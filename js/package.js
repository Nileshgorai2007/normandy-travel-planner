/* ============================================
   PACKAGE BUILDER — Day-wise Itinerary
   ============================================ */

const packageData = {
  destinations: {
    "Mont Saint-Michel": {
      3: {
        low:    { cost: "€180", days: ["Arrive & explore the village, free walking tour.", "Full day at the Abbey, tidal walk (free), picnic lunch.", "Depart — morning market visit."] },
        medium: { cost: "€420", days: ["Arrive, check in 3-star hotel, guided village tour.", "Abbey guided tour, seafood lunch, evening tidal walk.", "Morning cooking class, depart afternoon."] },
        high:   { cost: "€850", days: ["Arrive La Mère Poulard hotel, private sunset tour.", "Private abbey tour, Michelin lunch, spa evening.", "Helicopter tour, gourmet brunch, depart."] }
      },
      5: {
        low:    { cost: "€300", days: ["Arrive & settle, explore surroundings.", "Abbey free visit, village walks.", "Day trip to Cancale (oyster coast).", "Tidal walk, local market.", "Depart — souvenir shopping."] },
        medium: { cost: "€700", days: ["Arrive, guided tour of Mont Saint-Michel.", "Abbey + museum, seafood dinner.", "Day trip to Saint-Malo.", "Cooking class, cider tasting.", "Brunch, depart."] },
        high:   { cost: "€1400", days: ["Private transfer, luxury suite, sunset dinner.", "Private abbey tour, sailing excursion.", "Saint-Malo yacht day trip.", "Thalassotherapy spa, private dinner.", "Private transfer, depart."] }
      },
      7: {
        low:    { cost: "€420", days: ["Arrive, free walking tour.", "Abbey visit, beach walks.", "Day trip to Cancale.", "Explore Pontorson.", "Cycling the bay.", "Local market day, cider tasting.", "Depart."] },
        medium: { cost: "€1000", days: ["Arrive, guided tour.", "Abbey + museum.", "Day trip to Saint-Malo.", "Cooking class.", "Cancale oyster tour.", "Cycling + cider farm.", "Brunch, depart."] },
        high:   { cost: "€2100", days: ["Private transfer, welcome dinner.", "Private abbey, photography guide.", "Yacht to Saint-Malo.", "Spa day + gourmet lunch.", "Helicopter bay tour.", "Private cooking + wine pairing.", "Farewell brunch, depart."] }
      }
    },
    "Rouen": {
      3: {
        low:    { cost: "€150", days: ["Arrive, free cathedral visit, old town walk.", "Musée des Beaux-Arts (free), Joan of Arc history.", "Market shopping, depart."] },
        medium: { cost: "€380", days: ["Guided Gothic architecture tour.", "Museum visits, Normandy cuisine dinner.", "Panoramic hilltop walk, depart."] },
        high:   { cost: "€750", days: ["Private chauffeur tour, boutique hotel.", "Private guide, Michelin dining.", "Antiques shopping, champagne farewell."] }
      },
      5: {
        low:    { cost: "€250", days: ["Arrive, explore old town.", "Cathedral & museums.", "Day trip to Giverny.", "Markets & parks.", "Depart."] },
        medium: { cost: "€600", days: ["Guided Rouen tour.", "Museum deep dive.", "Giverny day trip.", "Cooking class.", "Farewell dinner, depart."] },
        high:   { cost: "€1200", days: ["Private arrival, suite hotel.", "Private guide, fine dining.", "Chauffeur to Giverny.", "Spa & antiques.", "Farewell gala, depart."] }
      },
      7: {
        low:    { cost: "€350", days: ["Arrive, city walks.", "Cathedral, churches.", "Giverny day trip.", "Étretat cliffs.", "Market day.", "Parks & river walk.", "Depart."] },
        medium: { cost: "€850", days: ["Guided arrival.", "Gothic tour.", "Giverny.", "Étretat.", "Cooking class.", "Wine tasting.", "Farewell, depart."] },
        high:   { cost: "€1800", days: ["Luxury arrival.", "Private Gothic tour.", "Chauffeur Giverny.", "Helicopter to Étretat.", "Spa.", "Private dinner cruise.", "Farewell, depart."] }
      }
    },
    "D-Day Beaches": {
      3: {
        low:    { cost: "€170", days: ["Arrive Bayeux, free walking tour.", "Omaha Beach + American Cemetery (free entry).", "Bayeux Tapestry (budget), depart."] },
        medium: { cost: "€400", days: ["Guided Bayeux tour, 3-star hotel.", "Full D-Day guided tour (Omaha, Pointe du Hoc).", "Tapestry museum, Norman lunch, depart."] },
        high:   { cost: "€900", days: ["Private transfer, château hotel.", "Private D-Day historian guide, all beaches.", "Private tapestry viewing, gala dinner."] }
      },
      5: {
        low:    { cost: "€280", days: ["Arrive Bayeux.", "Omaha & Utah beaches.", "Juno & Gold beaches.", "Bayeux Tapestry.", "Depart."] },
        medium: { cost: "€680", days: ["Guided arrival.", "Omaha & cemetery.", "Utah & Pointe du Hoc.", "Tapestry, cider farm.", "Farewell, depart."] },
        high:   { cost: "€1500", days: ["Château arrival.", "Private all-beach tour.", "Naval museum VIP.", "Gourmet cooking.", "Farewell gala."] }
      },
      7: {
        low:    { cost: "€400", days: ["Arrive.", "Omaha Beach.", "Utah Beach.", "Juno Beach.", "Bayeux town.", "Caen Memorial.", "Depart."] },
        medium: { cost: "€950", days: ["Guided arrival.", "Omaha.", "Utah & Pointe du Hoc.", "Juno & Gold.", "Caen Memorial.", "Cooking class.", "Farewell, depart."] },
        high:   { cost: "€2200", days: ["Luxury transfer.", "Private Omaha tour.", "Private Utah.", "VIP memorial.", "Spa day.", "Private dinner cruise.", "Farewell."] }
      }
    },
    "Étretat": {
      3: {
        low:    { cost: "€160", days: ["Arrive, cliff walk (free).", "Beach day, village exploration.", "Morning market, depart."] },
        medium: { cost: "€370", days: ["Guided cliff hike, charming hotel.", "Gardens visit, seafood dinner.", "Art gallery, brunch, depart."] },
        high:   { cost: "€780", days: ["Boutique clifftop hotel, sunset dining.", "Private guided hike, spa afternoon.", "Helicopter coast tour, depart."] }
      },
      5: {
        low:    { cost: "€260", days: ["Arrive, cliff walk.", "Beach & village.", "Fécamp day trip.", "Local market.", "Depart."] },
        medium: { cost: "€620", days: ["Guided arrival.", "Cliff hikes.", "Fécamp Bénédictine visit.", "Painting class.", "Farewell, depart."] },
        high:   { cost: "€1350", days: ["Luxury arrival.", "Private hike.", "Yacht to Fécamp.", "Spa day.", "Farewell dinner."] }
      },
      7: {
        low:    { cost: "€360", days: ["Arrive.", "North cliff.", "South cliff.", "Fécamp.", "Le Havre.", "Beach day.", "Depart."] },
        medium: { cost: "€900", days: ["Welcome tour.", "North cliff guide.", "South cliff.", "Fécamp.", "Le Havre art.", "Cooking class.", "Farewell."] },
        high:   { cost: "€1900", days: ["Luxury arrival.", "Private cliff.", "Yacht day.", "Le Havre VIP.", "Spa.", "Private dinner.", "Farewell."] }
      }
    },
    "Honfleur": {
      3: {
        low:    { cost: "€150", days: ["Arrive, harbor walk (free).", "Old town, Sainte-Catherine church.", "Market, depart."] },
        medium: { cost: "€360", days: ["Guided walking tour, cozy hotel.", "Art museums, seafood platter dinner.", "Morning market, depart."] },
        high:   { cost: "€750", days: ["Waterfront suite, private tour.", "VIP art gallery, Michelin dinner.", "Sailing trip, depart."] }
      },
      5: {
        low:    { cost: "€250", days: ["Arrive.", "Harbor & churches.", "Day trip Deauville.", "Market day.", "Depart."] },
        medium: { cost: "€600", days: ["Guided arrival.", "Museums.", "Deauville.", "Painting class.", "Farewell."] },
        high:   { cost: "€1300", days: ["Luxury arrival.", "Private tour.", "Yacht to Deauville.", "Spa.", "Farewell gala."] }
      },
      7: {
        low:    { cost: "€340", days: ["Arrive.", "Harbor.", "Deauville.", "Pont-l'Évêque.", "Cycling.", "Market.", "Depart."] },
        medium: { cost: "€820", days: ["Welcome.", "Harbor guide.", "Deauville.", "Cheese tour.", "Museum.", "Cooking.", "Farewell."] },
        high:   { cost: "€1800", days: ["Luxury.", "Private.", "Yacht.", "Cheese VIP.", "Spa.", "Dinner cruise.", "Farewell."] }
      }
    },
    "Giverny": {
      3: {
        low:    { cost: "€140", days: ["Arrive Vernon, walk to Giverny.", "Monet's Garden full day.", "Morning sketch, depart."] },
        medium: { cost: "€350", days: ["Guided garden tour, charming inn.", "Museum of Impressionism, lunch by the Seine.", "Painting class, depart."] },
        high:   { cost: "€720", days: ["Private chauffeur from Paris, boutique stay.", "VIP garden access, private art lesson.", "Monet brunch, depart."] }
      },
      5: {
        low:    { cost: "€230", days: ["Arrive.", "Monet's Garden.", "Vernon town.", "Cycling.", "Depart."] },
        medium: { cost: "€580", days: ["Guided arrival.", "Gardens.", "Museum.", "Painting class.", "Farewell."] },
        high:   { cost: "€1250", days: ["Luxury arrival.", "Private garden.", "River cruise.", "Art retreat.", "Farewell."] }
      },
      7: {
        low:    { cost: "€320", days: ["Arrive.", "Garden.", "Vernon.", "Cycling.", "Rouen day trip.", "Sketching.", "Depart."] },
        medium: { cost: "€780", days: ["Welcome.", "Garden guide.", "Museum.", "Rouen.", "Painting.", "Market.", "Farewell."] },
        high:   { cost: "€1700", days: ["Luxury.", "Private garden.", "Rouen chauffeur.", "Art retreat.", "Spa.", "Dinner cruise.", "Farewell."] }
      }
    },
    "Caen": {
      3: {
        low:    { cost: "€140", days: ["Arrive, castle free visit.", "Caen Memorial Museum.", "Old town walk, depart."] },
        medium: { cost: "€350", days: ["Guided castle & abbeys tour.", "Memorial Museum + WWII dinner experience.", "Market, Norman cuisine lunch, depart."] },
        high:   { cost: "€700", days: ["Boutique hotel, private castle guide.", "VIP Memorial, gourmet dinner.", "Helicopter to beaches, depart."] }
      },
      5: {
        low:    { cost: "€230", days: ["Arrive.", "Castle.", "Memorial.", "Ouistreham beach.", "Depart."] },
        medium: { cost: "€560", days: ["Guided arrival.", "Castle & abbeys.", "Memorial.", "Beach & cooking.", "Farewell."] },
        high:   { cost: "€1200", days: ["Luxury arrival.", "Private guide.", "VIP Memorial.", "Spa.", "Farewell gala."] }
      },
      7: {
        low:    { cost: "€320", days: ["Arrive.", "Castle.", "Abbeys.", "Memorial.", "Ouistreham.", "Market.", "Depart."] },
        medium: { cost: "€780", days: ["Welcome.", "Castle guide.", "Abbeys.", "Memorial.", "Beach.", "Cooking.", "Farewell."] },
        high:   { cost: "€1650", days: ["Luxury.", "Private castle.", "Abbeys VIP.", "Memorial.", "Spa.", "Private dining.", "Farewell."] }
      }
    },
    "Bayeux": {
      3: {
        low:    { cost: "€150", days: ["Arrive, old town promenade.", "Bayeux Tapestry Museum.", "Cathedral, depart."] },
        medium: { cost: "€370", days: ["Guided tapestry + history tour.", "Cathedral, Norman lunch, cider tasting.", "Morning market, depart."] },
        high:   { cost: "€740", days: ["Château hotel, private tapestry viewing.", "Private historian guide, Michelin dinner.", "Sailing, farewell brunch."] }
      },
      5: {
        low:    { cost: "€240", days: ["Arrive.", "Tapestry.", "Cathedral.", "D-Day beaches.", "Depart."] },
        medium: { cost: "€580", days: ["Guided arrival.", "Tapestry.", "Beaches.", "Cider farm.", "Farewell."] },
        high:   { cost: "€1280", days: ["Luxury arrival.", "Private tapestry.", "Private beach tour.", "Spa.", "Farewell gala."] }
      },
      7: {
        low:    { cost: "€340", days: ["Arrive.", "Tapestry.", "Cathedral.", "Omaha.", "Utah.", "Market.", "Depart."] },
        medium: { cost: "€800", days: ["Welcome.", "Tapestry guide.", "Cathedral.", "Beaches.", "Cider.", "Cooking.", "Farewell."] },
        high:   { cost: "€1700", days: ["Luxury.", "VIP tapestry.", "Private beaches.", "Spa.", "Dinner cruise.", "Photography.", "Farewell."] }
      }
    }
  },
  travelTips: {
    low: [
      "💡 Book trains in advance on SNCF Connect for better prices.",
      "🏠 Consider hostels and gîtes (rural lodgings) for affordable stays.",
      "🥖 Eat at local boulangeries and markets for budget-friendly meals."
    ],
    medium: [
      "💡 Look for combo tickets at museums for savings.",
      "🍽️ Reserve restaurants on weekdays for better availability.",
      "🚂 Consider a Normandy rail pass for multi-day travel."
    ],
    high: [
      "💡 Book boutique hotels and châteaux well in advance.",
      "🥂 Ask your hotel concierge for exclusive local experiences.",
      "🚁 Private helicopter and yacht tours can be arranged through specialty agencies."
    ]
  }
};

function initPackageBuilder() {
  const destSelect = document.getElementById('pkgDest');
  const durationBtns = document.querySelectorAll('.duration-option');
  const budgetBtns = document.querySelectorAll('.budget-option');
  const buildBtn = document.getElementById('buildPackageBtn');
  const resultDiv = document.getElementById('packageResult');
  const savedPlansDiv = document.getElementById('savedPlans');

  if (!destSelect) return;

  // Populate destinations
  Object.keys(packageData.destinations).forEach(dest => {
    const opt = document.createElement('option');
    opt.value = dest;
    opt.textContent = dest;
    destSelect.appendChild(opt);
  });

  // Check URL params (from planner redirect)
  const params = new URLSearchParams(window.location.search);
  const preselectedDest = params.get('dest');
  if (preselectedDest && Array.from(destSelect.options).some(opt => opt.value === preselectedDest)) {
    destSelect.value = preselectedDest;
    const plannerForm = document.querySelector('.planner-form');
    if (plannerForm) {
      const msg = document.createElement('div');
      msg.className = "alert alert-warning mt-3 mb-4 text-center";
      msg.innerHTML = `<strong><i class="bi bi-geo-alt"></i> ${preselectedDest} Selected!</strong><br>Please select your Duration and Budget to build your package.`;
      plannerForm.insertBefore(msg, destSelect);
    }
  }

  let selectedDuration = null;
  let selectedBudget = null;

  // Duration selection
  durationBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      durationBtns.forEach(b => b.classList.remove('selected'));
      btn.classList.add('selected');
      selectedDuration = parseInt(btn.dataset.days);
    });
  });

  // Budget selection
  budgetBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      budgetBtns.forEach(b => b.classList.remove('selected'));
      btn.classList.add('selected');
      selectedBudget = btn.dataset.budget;
    });
  });

  // Build package
  buildBtn.addEventListener('click', () => {
    const dest = destSelect.value;
    if (!dest || !selectedDuration || !selectedBudget) {
      alert('Please select a destination, duration, and budget level.');
      return;
    }

    const destData = packageData.destinations[dest];
    if (!destData || !destData[selectedDuration] || !destData[selectedDuration][selectedBudget]) {
      alert('Package not available for this combination. Try a different selection.');
      return;
    }

    const pkg = destData[selectedDuration][selectedBudget];
    const tips = packageData.travelTips[selectedBudget];

    resultDiv.style.display = 'block';
    resultDiv.innerHTML = `
      <div class="d-flex justify-content-between align-items-start flex-wrap mb-4">
        <div>
          <h3 class="text-gold mb-1"><i class="bi bi-box-seam me-2"></i>${dest}</h3>
          <p class="text-parchment mb-0">${selectedDuration} Days · ${selectedBudget.charAt(0).toUpperCase() + selectedBudget.slice(1)} Budget</p>
        </div>
        <div class="text-end">
          <div style="font-size: 2rem; font-weight: 800; color: var(--gold); font-family: var(--font-heading);">${pkg.cost}</div>
          <small class="text-parchment" style="opacity: 0.6;">estimated per person</small>
        </div>
      </div>

      <div class="mb-4">
        ${pkg.days.map((day, i) => `
          <div class="itinerary-card mb-3" style="background: rgba(255,255,255,0.08); border: 1px solid rgba(201,168,76,0.15);">
            <div class="day-header" style="background: rgba(201,168,76,0.15); color: var(--gold);">
              <i class="bi bi-calendar3 me-2"></i>Day ${i + 1}
            </div>
            <div class="day-body" style="padding: 1rem 1.25rem;">
              <p style="color: var(--parchment); margin: 0;">${day}</p>
            </div>
          </div>
        `).join('')}
      </div>

      <div style="background: rgba(201,168,76,0.1); border-radius: 12px; padding: 1.25rem; margin-bottom: 1.5rem; border: 1px solid rgba(201,168,76,0.15);">
        <h5 style="color: var(--gold); margin-bottom: 0.75rem;"><i class="bi bi-lightbulb me-1"></i>Travel Tips</h5>
        ${tips.map(t => `<p style="color: var(--parchment); margin: 0.3rem 0; font-size: 0.9rem;">${t}</p>`).join('')}
      </div>

      <div class="text-center">
        <button class="btn btn-gold" id="savePlanBtn" data-i18n="save-plan"><i class="bi bi-bookmark me-1"></i> Save This Plan</button>
      </div>
    `;
    if(typeof applyLang === 'function') applyLang(currentLang);

    // Save functionality
    document.getElementById('savePlanBtn').addEventListener('click', () => {
      const plan = {
        destination: dest,
        duration: selectedDuration,
        budget: selectedBudget,
        cost: pkg.cost,
        days: pkg.days,
        savedAt: new Date().toLocaleDateString()
      };
      const plans = JSON.parse(localStorage.getItem('normandyPlans') || '[]');
      plans.push(plan);
      localStorage.setItem('normandyPlans', JSON.stringify(plans));
      const btn = document.getElementById('savePlanBtn');
      btn.innerHTML = '<i class="bi bi-check-lg me-1"></i> Plan Saved!';
      btn.setAttribute('data-i18n', 'plan-saved');
      btn.disabled = true;
      loadSavedPlans();
    });

    resultDiv.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });

  // Load saved plans
  function loadSavedPlans() {
    if (!savedPlansDiv) return;
    const plans = JSON.parse(localStorage.getItem('normandyPlans') || '[]');
    if (plans.length === 0) {
      savedPlansDiv.innerHTML = '<p class="text-center" style="color: var(--brown-soft);" data-i18n="no-plans">No saved plans yet. Build one above!</p>';
      if(typeof applyLang === 'function') applyLang(currentLang);
      return;
    }
    savedPlansDiv.innerHTML = `
      <h4 class="mb-3" data-i18n="saved-plans-title"><i class="bi bi-bookmark-star me-2"></i>Your Saved Plans</h4>
      ${plans.map((p, i) => `
        <div class="d-flex justify-content-between align-items-center p-3 mb-2" style="background: var(--parchment); border-radius: 12px; border: 1px solid rgba(26,39,68,0.06);">
          <div>
            <strong style="color: var(--navy);">${p.destination}</strong>
            <span style="color: var(--brown-soft); font-size: 0.85rem;"> · ${p.duration} days · ${p.budget} · ${p.cost}</span>
          </div>
          <div class="d-flex gap-2">
            <small style="color: var(--brown-light);">${p.savedAt}</small>
            <button class="btn btn-sm" style="color: var(--red-accent); background: none; border: none;" onclick="deletePlan(${i})">
              <i class="bi bi-trash"></i>
            </button>
          </div>
        </div>
      `).join('')}
      <div class="text-center mt-3">
        <button class="btn btn-sm btn-outline-gold" onclick="clearAllPlans()" data-i18n="clear-all">Clear All Plans</button>
      </div>
    `;
    if(typeof applyLang === 'function') applyLang(currentLang);
  }

  window.deletePlan = function(index) {
    const plans = JSON.parse(localStorage.getItem('normandyPlans') || '[]');
    plans.splice(index, 1);
    localStorage.setItem('normandyPlans', JSON.stringify(plans));
    loadSavedPlans();
  };

  window.clearAllPlans = function() {
    localStorage.removeItem('normandyPlans');
    loadSavedPlans();
  };

  loadSavedPlans();
}

document.addEventListener('DOMContentLoaded', initPackageBuilder);
