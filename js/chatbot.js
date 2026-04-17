/* ============================================
   CHATBOT — Normandy Travel Assistant
   ============================================ */

const ChatbotKB = {
  greetings: [
    "Bonjour! 🇫🇷 Welcome to the Normandy Travel Assistant. How can I help you plan your trip?",
    "Hello, traveler! I'm here to help you explore Normandy. Ask me anything!"
  ],
  destinations: {
    keywords: ["destination", "places", "visit", "where", "go", "see", "explore", "town", "city", "beach"],
    response: `Here are the top destinations in Normandy:\n\n🏰 **Mont Saint-Michel** — The iconic island abbey, a UNESCO World Heritage Site.\n🏖️ **Étretat** — Stunning white chalk cliffs along the coast.\n⛪ **Rouen** — The medieval capital with its famous cathedral.\n🎖️ **D-Day Beaches** — Omaha, Utah, Juno, Gold, and Sword beaches.\n🌸 **Giverny** — Monet's garden and home.\n🏘️ **Honfleur** — A charming harbor town beloved by artists.\n🧀 **Camembert** — The birthplace of the famous cheese!\n\nWould you like more details on any of these?`
  },
  cost: {
    keywords: ["cost", "budget", "price", "expensive", "cheap", "money", "afford", "euro", "inr", "rupee"],
    response: `Here's a rough cost guide for Normandy:\n\n💰 **Budget Trip (per day):** €50–80 (hostel, street food, public transport)\n💳 **Mid-Range (per day):** €100–180 (3-star hotel, restaurants, some tours)\n💎 **Luxury (per day):** €250+ (boutique hotel, fine dining, private tours)\n\n✈️ **Flights from India:** ₹35,000–₹65,000 round trip\n🚄 **Paris → Normandy Train:** €15–35 one-way\n\nTip: Visit in shoulder season (April-May or Sep-Oct) for the best value!`
  },
  food: {
    keywords: ["food", "eat", "cuisine", "dish", "restaurant", "cheese", "cider", "butter", "cream", "drink"],
    response: `Normandy is a food lover's paradise! 🍽️\n\n🧈 **Camembert & Livarot** — World-famous cheeses.\n🍎 **Cidre & Calvados** — Apple cider and apple brandy.\n🦪 **Oysters of Cancale** — Fresh from the coast.\n🥞 **Galettes** — Savory buckwheat crêpes.\n🐟 **Moules-frites** — Mussels with fries.\n🍰 **Tarte Tatin** — Classic French caramelised apple tart.\n🐄 **Normandy Butter** — The creamiest in France.\n\nDon't leave without trying a Calvados tasting!`
  },
  travel: {
    keywords: ["travel", "transport", "train", "bus", "flight", "fly", "how to get", "route", "reach", "airport"],
    response: `Getting to Normandy from India:\n\n✈️ **Fly:** Delhi/Mumbai → Paris CDG (8-10 hrs)\n🚄 **Train:** Paris Saint-Lazare → Rouen (1h15), Caen (2h), Bayeux (2h30)\n🚌 **Bus:** FlixBus operates Paris → major Normandy towns\n🚗 **Car:** Rent from Paris ≈ 2-3 hours drive\n\n🕐 **Best time:** May-September for pleasant weather\n📌 Use our Trip Planner for a personalized route!`
  },
  history: {
    keywords: ["history", "d-day", "war", "wwii", "world war", "normandy landing", "invasion", "soldier", "memorial"],
    response: `Normandy's D-Day History:\n\n📅 **June 6, 1944** — Allied forces launched the largest seaborne invasion in history.\n\n🏖️ **5 Landing Beaches:**\n• Omaha Beach (US) — Bloodiest, now home to the American Cemetery\n• Utah Beach (US) — Westernmost landing\n• Gold Beach (UK) — British sector\n• Juno Beach (Canada) — Canadian forces\n• Sword Beach (UK) — Easternmost\n\n🏛️ **Must-Visit:**\n• Normandy American Cemetery (9,387 graves)\n• Pointe du Hoc\n• Pegasus Bridge\n• Overlord Museum\n\nA visit to these sites is deeply moving and unforgettable.`
  },
  weather: {
    keywords: ["weather", "temperature", "rain", "climate", "season", "cold", "warm", "winter", "summer"],
    response: `Normandy Weather Guide:\n\n🌸 **Spring (Mar-May):** 8-16°C, blossoming countryside\n☀️ **Summer (Jun-Aug):** 16-24°C, perfect for beaches\n🍂 **Autumn (Sep-Nov):** 8-16°C, stunning foliage\n❄️ **Winter (Dec-Feb):** 2-8°C, quieter but atmospheric\n\n☔ Pack a light rain jacket year-round — Normandy gets its share of showers!\n🌞 Best months: June, July, September`
  },
  default: "I'm not quite sure about that, but I'd love to help! Try asking about:\n\n🗺️ Destinations\n💰 Travel costs\n🍽️ Food & cuisine\n✈️ How to get there\n📜 D-Day history\n🌦️ Weather\n\nOr use the suggestion buttons below!"
};

const chatSuggestions = [
  "Top destinations",
  "Travel costs",
  "Best food to try",
  "How to get there",
  "D-Day history",
  "Weather guide"
];

function initChatbot() {
  // Create chatbot HTML
  const chatHTML = `
    <button class="chatbot-toggle" id="chatbotToggle" aria-label="Open chat assistant">
      <i class="bi bi-chat-dots-fill"></i>
    </button>
    <div class="chatbot-window" id="chatbotWindow">
      <div class="chatbot-header">
        <h6><i class="bi bi-compass me-2"></i>Normandy Assistant</h6>
        <button class="close-chat" id="chatbotClose" aria-label="Close chat"><i class="bi bi-x-lg"></i></button>
      </div>
      <div class="chatbot-body" id="chatbotBody"></div>
      <div class="chatbot-footer">
        <input type="text" id="chatInput" placeholder="Ask me about Normandy..." autocomplete="off">
        <button id="chatSend" aria-label="Send message"><i class="bi bi-send-fill"></i></button>
      </div>
    </div>
  `;
  document.body.insertAdjacentHTML('beforeend', chatHTML);

  const toggle = document.getElementById('chatbotToggle');
  const window_ = document.getElementById('chatbotWindow');
  const close = document.getElementById('chatbotClose');
  const body = document.getElementById('chatbotBody');
  const input = document.getElementById('chatInput');
  const send = document.getElementById('chatSend');

  let isOpen = false;

  toggle.addEventListener('click', () => {
    isOpen = !isOpen;
    window_.classList.toggle('open', isOpen);
    if (isOpen && body.children.length === 0) {
      addBotMessage(ChatbotKB.greetings[Math.floor(Math.random() * ChatbotKB.greetings.length)]);
      addSuggestions();
    }
    if (isOpen) input.focus();
  });

  close.addEventListener('click', () => {
    isOpen = false;
    window_.classList.remove('open');
  });

  send.addEventListener('click', sendMessage);
  input.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') sendMessage();
  });

  function sendMessage() {
    const text = input.value.trim();
    if (!text) return;
    addUserMessage(text);
    input.value = '';
    showTyping();
    setTimeout(() => {
      removeTyping();
      const response = getResponse(text);
      addBotMessage(response);
      addSuggestions();
    }, 800 + Math.random() * 700);
  }

  function getResponse(input) {
    const lower = input.toLowerCase();
    for (const [key, data] of Object.entries(ChatbotKB)) {
      if (key === 'greetings' || key === 'default') continue;
      if (data.keywords && data.keywords.some(kw => lower.includes(kw))) {
        return data.response;
      }
    }
    // Check greetings
    if (['hi', 'hello', 'hey', 'bonjour', 'help', 'start'].some(g => lower.includes(g))) {
      return ChatbotKB.greetings[Math.floor(Math.random() * ChatbotKB.greetings.length)];
    }
    return ChatbotKB.default;
  }

  function addBotMessage(text) {
    const div = document.createElement('div');
    div.className = 'chat-message bot';
    div.innerHTML = `<div class="chat-bubble">${formatMessage(text)}</div>`;
    body.appendChild(div);
    body.scrollTop = body.scrollHeight;
  }

  function addUserMessage(text) {
    const div = document.createElement('div');
    div.className = 'chat-message user';
    div.innerHTML = `<div class="chat-bubble">${escapeHTML(text)}</div>`;
    body.appendChild(div);
    body.scrollTop = body.scrollHeight;
  }

  function addSuggestions() {
    const existing = body.querySelector('.chat-suggestions');
    if (existing) existing.remove();
    const div = document.createElement('div');
    div.className = 'chat-suggestions';
    chatSuggestions.forEach(s => {
      const btn = document.createElement('button');
      btn.className = 'chat-suggestion-btn';
      btn.textContent = s;
      btn.addEventListener('click', () => {
        input.value = s;
        sendMessage();
      });
      div.appendChild(btn);
    });
    body.appendChild(div);
    body.scrollTop = body.scrollHeight;
  }

  function showTyping() {
    const div = document.createElement('div');
    div.className = 'chat-message bot typing-msg';
    div.innerHTML = `<div class="typing-indicator"><span class="typing-dot"></span><span class="typing-dot"></span><span class="typing-dot"></span></div>`;
    body.appendChild(div);
    body.scrollTop = body.scrollHeight;
  }

  function removeTyping() {
    const t = body.querySelector('.typing-msg');
    if (t) t.remove();
  }

  function formatMessage(text) {
    return text
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      .replace(/\n/g, '<br>');
  }

  function escapeHTML(str) {
    const div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
  }
}

document.addEventListener('DOMContentLoaded', initChatbot);
