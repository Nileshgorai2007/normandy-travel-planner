/* ============================================
   QUIZ — Normandy Travel Personality
   ============================================ */

const quizQuestions = [
  {
    question: "What draws you most to a new place?",
    options: [
      { text: "Ancient history and monuments", tags: ["history", "culture"] },
      { text: "Natural landscapes and scenery", tags: ["nature", "adventure"] },
      { text: "Local food and culinary traditions", tags: ["food", "culture"] },
      { text: "Art, museums, and architecture", tags: ["art", "culture"] }
    ]
  },
  {
    question: "Your ideal vacation pace?",
    options: [
      { text: "Relaxed — I like to take my time", tags: ["relaxed", "nature"] },
      { text: "Adventurous — pack in as much as possible", tags: ["adventure", "history"] },
      { text: "Cultural immersion — live like a local", tags: ["culture", "food"] },
      { text: "Balanced — mix of activity and rest", tags: ["balanced", "art"] }
    ]
  },
  {
    question: "Pick a meal that excites you most:",
    options: [
      { text: "Fresh oysters by the sea 🦪", tags: ["food", "nature"] },
      { text: "Rustic cheese and cider in a farmhouse 🧀", tags: ["food", "culture"] },
      { text: "Fine dining with regional wine 🍷", tags: ["food", "art"] },
      { text: "Street crêpes while exploring 🥞", tags: ["food", "adventure"] }
    ]
  },
  {
    question: "Which activity sounds most appealing?",
    options: [
      { text: "Walking the D-Day beaches at dawn", tags: ["history", "nature"] },
      { text: "Painting by the cliffs of Étretat", tags: ["art", "nature"] },
      { text: "Exploring a medieval old town", tags: ["history", "culture"] },
      { text: "Hiking the Normandy countryside", tags: ["adventure", "nature"] }
    ]
  },
  {
    question: "What would be your perfect souvenir?",
    options: [
      { text: "A vintage map or historical book", tags: ["history", "culture"] },
      { text: "A bottle of Calvados apple brandy", tags: ["food", "culture"] },
      { text: "A local artist's painting", tags: ["art", "nature"] },
      { text: "Handcrafted Normandy lace", tags: ["culture", "art"] }
    ]
  },
  {
    question: "What type of accommodation do you prefer?",
    options: [
      { text: "A charming B&B in a village", tags: ["culture", "relaxed"] },
      { text: "A clifftop hotel with ocean views", tags: ["nature", "adventure"] },
      { text: "A historic château or manor", tags: ["history", "art"] },
      { text: "A cozy farmhouse in the countryside", tags: ["food", "nature"] }
    ]
  }
];

const travelPersonalities = {
  history: {
    title: "The History Seeker",
    emoji: "⚔️",
    description: "You're fascinated by the stories of the past. Normandy's D-Day beaches, medieval castles, and ancient abbeys will captivate your soul.",
    destination: "D-Day Beaches & Bayeux",
    color: "#1a2744"
  },
  nature: {
    title: "The Nature Wanderer",
    emoji: "🌿",
    description: "You seek the beauty of landscapes. The dramatic cliffs of Étretat, the tides of Mont Saint-Michel, and the rolling countryside await you.",
    destination: "Étretat & Mont Saint-Michel",
    color: "#2d5a3d"
  },
  food: {
    title: "The Culinary Explorer",
    emoji: "🧀",
    description: "Your heart follows your stomach! Normandy's Camembert, Calvados, fresh seafood, and crêpes are your perfect travel companions.",
    destination: "Honfleur & Camembert Region",
    color: "#6b5438"
  },
  culture: {
    title: "The Culture Enthusiast",
    emoji: "🎭",
    description: "You immerse yourself in local life. Rouen's gothic streets, village markets, and traditions will make you feel at home.",
    destination: "Rouen & Honfleur",
    color: "#4a2d5a"
  },
  art: {
    title: "The Artistic Soul",
    emoji: "🎨",
    description: "You see beauty everywhere. Monet's Giverny, the Impressionist coast, and Normandy's light will ignite your creative spirit.",
    destination: "Giverny & Étretat",
    color: "#5a3d2d"
  },
  adventure: {
    title: "The Bold Adventurer",
    emoji: "🧭",
    description: "You crave discovery and excitement. From coastal hikes to tidal island explorations, Normandy has endless adventures for you.",
    destination: "Mont Saint-Michel & D-Day Beaches",
    color: "#2d4a5a"
  }
};

function initQuiz() {
  const container = document.getElementById('quizContainer');
  if (!container) return;

  let currentQ = 0;
  const answers = [];

  renderQuestion();

  function renderQuestion() {
    if (currentQ >= quizQuestions.length) {
      showResult();
      return;
    }

    const q = quizQuestions[currentQ];
    const progress = ((currentQ) / quizQuestions.length) * 100;

    container.innerHTML = `
      <div class="quiz-progress">
        <div class="quiz-progress-bar" style="width: ${progress}%"></div>
      </div>
      <div class="mb-3 text-end" style="color: var(--brown-soft); font-size: 0.85rem;">
        <span data-i18n="q-prog1">Question</span> ${currentQ + 1} <span data-i18n="q-prog2">of</span> ${quizQuestions.length}
      </div>
      <div class="quiz-question">
        <h3 data-i18n="q${currentQ + 1}-text">${q.question}</h3>
        <div class="quiz-options">
          ${q.options.map((opt, i) => `
            <button class="quiz-option" data-index="${i}" data-i18n="q${currentQ + 1}-o${i + 1}">${opt.text}</button>
          `).join('')}
        </div>
      </div>
    `;
    if(typeof applyLang === 'function') applyLang(currentLang);

    container.querySelectorAll('.quiz-option').forEach(btn => {
      btn.addEventListener('click', () => {
        const idx = parseInt(btn.dataset.index);
        answers.push(...q.options[idx].tags);
        currentQ++;
        renderQuestion();
      });
    });
  }

  function showResult() {
    // Count tags
    const tagCount = {};
    answers.forEach(tag => {
      tagCount[tag] = (tagCount[tag] || 0) + 1;
    });

    // Find top tag
    const topTag = Object.entries(tagCount).sort((a, b) => b[1] - a[1])[0][0];
    const personality = travelPersonalities[topTag] || travelPersonalities.culture;

    const progress = 100;

    container.innerHTML = `
      <div class="quiz-progress">
        <div class="quiz-progress-bar" style="width: ${progress}%"></div>
      </div>
      <div class="quiz-result" data-aos="fade-up">
        <div style="font-size: 4rem; margin-bottom: 1rem;">${personality.emoji}</div>
        <h2><span data-i18n="you-are">You are:</span> <span data-i18n="res-${topTag}-title">${personality.title}</span></h2>
        <p style="color: var(--brown-soft); font-size: 1.1rem; max-width: 500px; margin: 1rem auto;" data-i18n="res-${topTag}-desc">
          ${personality.description}
        </p>
        <div style="background: var(--parchment); border-radius: 12px; padding: 1.5rem; margin: 1.5rem 0; border: 1px solid rgba(201,168,76,0.2);">
          <h5 style="color: var(--navy); margin-bottom: 0.3rem;">
            <i class="bi bi-geo-alt me-1"></i><span data-i18n="rec-dest">Recommended Destination</span>
          </h5>
          <p style="color: var(--gold-muted); font-size: 1.2rem; font-weight: 600; font-family: var(--font-heading); margin: 0;" data-i18n="res-${topTag}-dest">
            ${personality.destination}
          </p>
        </div>
        <div class="d-flex gap-3 justify-content-center flex-wrap mt-4">
          <a href="planner.html" class="btn btn-gold" data-i18n="plan-trip"><i class="bi bi-map me-1"></i> Plan Your Trip</a>
          <button class="btn btn-outline-gold" onclick="location.reload()" data-i18n="retake-quiz"><i class="bi bi-arrow-repeat me-1"></i> Retake Quiz</button>
        </div>
      </div>
    `;
    if(typeof applyLang === 'function') applyLang(currentLang);
  }
}

document.addEventListener('DOMContentLoaded', initQuiz);
