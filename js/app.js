/* ============================================
   APP.JS — Global Script / AOS / Surprise
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {
  // Initialize AOS
  if (typeof AOS !== 'undefined') {
    AOS.init({
      duration: 800,
      easing: 'ease-out-cubic',
      once: true,
      offset: 80
    });
  }

  // --- Navbar scroll effect ---
  const navbar = document.querySelector('.navbar-normandy');
  if (navbar) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        navbar.style.background = 'rgba(15,26,48,0.98)';
        navbar.style.boxShadow = '0 4px 20px rgba(0,0,0,0.2)';
      } else {
        navbar.style.background = 'rgba(15,26,48,0.95)';
        navbar.style.boxShadow = 'none';
      }
    });
  }

  // --- Surprise Button ---
  const surpriseBtn = document.getElementById('surpriseBtn');
  if (surpriseBtn) {
    const normandyFacts = [
      "🏰 Mont Saint-Michel gets over 3 million visitors per year!",
      "🍎 Normandy produces over 10 million hectolitres of cider annually!",
      "🎨 Claude Monet lived in Giverny, Normandy for 43 years.",
      "🧀 Camembert cheese was invented in Normandy in 1791!",
      "⚔️ William the Conqueror, who invaded England, was from Normandy.",
      "🌊 The tides at Mont Saint-Michel can move as fast as a galloping horse!",
      "🏖️ Over 156,000 Allied troops landed on D-Day, June 6, 1944.",
      "🎭 Rouen was where Joan of Arc was burned at the stake in 1431.",
      "🐄 Normandy is home to the famous brown-spotted Norman cow breed.",
      "🏗️ The Bayeux Tapestry is nearly 70 meters long and almost 1000 years old!",
      "🍷 Calvados, the famous apple brandy, must be aged at least 2 years.",
      "🌊 The Étretat cliffs inspired Guy de Maupassant and many Impressionist painters."
    ];
    let lastIndex = -1;

    surpriseBtn.addEventListener('click', () => {
      let idx;
      do { idx = Math.floor(Math.random() * normandyFacts.length); } while (idx === lastIndex);
      lastIndex = idx;
      showFactPopup(normandyFacts[idx]);
    });
  }

  function showFactPopup(fact) {
    // Remove existing
    const existing = document.querySelector('.fact-popup');
    if (existing) existing.remove();

    const popup = document.createElement('div');
    popup.className = 'fact-popup';
    popup.style.cssText = `
      position: fixed; bottom: 100px; left: 30px; max-width: 320px;
      background: linear-gradient(135deg, #1a2744, #2a3d5e);
      color: #f5efe0; padding: 1.5rem; border-radius: 16px;
      box-shadow: 0 8px 30px rgba(0,0,0,0.3); z-index: 998;
      animation: chatSlideUp 0.3s ease; border: 1px solid rgba(201,168,76,0.2);
      font-size: 0.95rem; line-height: 1.6;
    `;
    popup.innerHTML = `
      <div style="font-family: 'Playfair Display',serif; color: #c9a84c; margin-bottom: 0.5rem; font-size: 1rem; font-weight: 600;">
        ✨ Fun Fact
      </div>
      <div>${fact}</div>
      <button onclick="this.parentElement.remove()" style="
        position: absolute; top: 8px; right: 12px;
        background: none; border: none; color: #f5efe0;
        font-size: 1.2rem; cursor: pointer; opacity: 0.6;
      ">×</button>
    `;
    document.body.appendChild(popup);
    setTimeout(() => { if (popup.parentElement) popup.remove(); }, 6000);
  }

  // --- Counter animation ---
  const counters = document.querySelectorAll('.stat-number');
  if (counters.length) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });
    counters.forEach(c => observer.observe(c));
  }

  function animateCounter(el) {
    const target = parseInt(el.getAttribute('data-target'));
    const suffix = el.getAttribute('data-suffix') || '';
    const duration = 2000;
    const start = performance.now();

    function update(timestamp) {
      const elapsed = timestamp - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
      const current = Math.floor(eased * target);
      el.textContent = current.toLocaleString() + suffix;
      if (progress < 1) requestAnimationFrame(update);
    }
    requestAnimationFrame(update);
  }

  // --- Active nav link highlighting ---
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.navbar-normandy .nav-link').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });
});
