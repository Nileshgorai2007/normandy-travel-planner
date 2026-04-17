/* ============================================
   MAP.JS — Leaflet Map for Destinations
   ============================================ */

function initMap() {
  const mapEl = document.getElementById('map');
  if (!mapEl) return;

  // Center on Normandy
  const map = L.map('map', {
    scrollWheelZoom: false
  }).setView([48.85, -0.75], 8);

  // Use a stylish tile layer
  L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/">OSM</a> &copy; <a href="https://carto.com/">CARTO</a>',
    maxZoom: 18
  }).addTo(map);

  // Custom gold marker icon
  const goldIcon = L.divIcon({
    className: 'custom-map-marker',
    html: `<div style="
      width: 30px; height: 30px;
      background: linear-gradient(135deg, #c9a84c, #b8943f);
      border-radius: 50% 50% 50% 0;
      transform: rotate(-45deg);
      border: 3px solid #1a2744;
      box-shadow: 0 3px 10px rgba(0,0,0,0.3);
      display: flex; align-items: center; justify-content: center;
    "><span style="transform: rotate(45deg); color: #1a2744; font-weight: bold; font-size: 14px;">★</span></div>`,
    iconSize: [30, 30],
    iconAnchor: [15, 30],
    popupAnchor: [0, -30]
  });

  // Normandy locations
  const locations = [
    {
      name: "Mont Saint-Michel",
      coords: [48.6361, -1.5115],
      description: "Iconic island abbey and UNESCO World Heritage Site. One of France's most recognizable landmarks.",
      type: "Heritage"
    },
    {
      name: "Rouen",
      coords: [49.4432, 1.0999],
      description: "Medieval capital of Normandy, famous for its Gothic cathedral and Joan of Arc connections.",
      type: "City"
    },
    {
      name: "Étretat",
      coords: [49.7071, 0.2038],
      description: "Dramatic white chalk cliffs along the Alabaster Coast, inspiring artists for centuries.",
      type: "Nature"
    },
    {
      name: "Bayeux",
      coords: [49.2764, -0.7024],
      description: "Home to the famous 11th-century Bayeux Tapestry and a beautifully preserved medieval center.",
      type: "Heritage"
    },
    {
      name: "Caen",
      coords: [49.1829, -0.3707],
      description: "City of William the Conqueror, featuring the Caen Memorial and twin abbeys.",
      type: "City"
    },
    {
      name: "Honfleur",
      coords: [49.4181, 0.2331],
      description: "A picturesque harbor town that has inspired countless Impressionist painters.",
      type: "City"
    },
    {
      name: "Giverny",
      coords: [49.0758, 1.5335],
      description: "Claude Monet's home and gardens, the birthplace of Impressionism.",
      type: "Art"
    },
    {
      name: "Omaha Beach",
      coords: [49.3628, -0.8724],
      description: "D-Day landing beach and site of the Normandy American Cemetery with 9,387 graves.",
      type: "D-Day"
    },
    {
      name: "Utah Beach",
      coords: [49.4150, -1.1744],
      description: "Westernmost D-Day landing beach. Home to the Utah Beach Museum.",
      type: "D-Day"
    },
    {
      name: "Juno Beach",
      coords: [49.3389, -0.4597],
      description: "Canadian D-Day landing beach. The Juno Beach Centre honors Canadian soldiers.",
      type: "D-Day"
    },
    {
      name: "Pointe du Hoc",
      coords: [49.3953, -0.9895],
      description: "Clifftop fortification scaled by US Army Rangers on D-Day. Craters still visible.",
      type: "D-Day"
    },
    {
      name: "Deauville",
      coords: [49.3559, 0.0762],
      description: "Elegant seaside resort known for its races, film festival, and boardwalk.",
      type: "Beach"
    }
  ];

  const typeColors = {
    Heritage: '#c9a84c',
    City: '#2a3d5e',
    Nature: '#2d5a3d',
    Art: '#5a3d2d',
    'D-Day': '#9e3a3a',
    Beach: '#3d7ea6'
  };

  locations.forEach(loc => {
    const marker = L.marker(loc.coords, { icon: goldIcon }).addTo(map);
    const typeColor = typeColors[loc.type] || '#c9a84c';
    marker.bindPopup(`
      <div style="font-family: 'Inter', sans-serif; min-width: 220px;">
        <div style="display: inline-block; background: ${typeColor}; color: white; font-size: 0.7rem; padding: 2px 8px; border-radius: 20px; margin-bottom: 6px; font-weight: 600;">${loc.type}</div>
        <h6 style="font-family: 'Playfair Display', serif; color: #1a2744; margin: 4px 0; font-size: 1.1rem;">${loc.name}</h6>
        <p style="color: #6b5438; font-size: 0.85rem; line-height: 1.5; margin: 0 0 8px;">${loc.description}</p>
        <a href="planner.html" style="color: #c9a84c; font-size: 0.8rem; font-weight: 600; text-decoration: none;">Plan a trip →</a>
      </div>
    `, { maxWidth: 280 });
  });
}

document.addEventListener('DOMContentLoaded', initMap);
