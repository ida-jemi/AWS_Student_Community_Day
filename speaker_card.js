// Check if element is in viewport
function isElementInViewport(el) {
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// Scroll animation — skips hidden cards
function handleScroll() {
  const cards = document.querySelectorAll(".speaker-card");
  cards.forEach((card) => {
    if (card.classList.contains("hidden")) return;
    if (isElementInViewport(card)) {
      card.classList.add("show");
    } else {
      card.classList.remove("show");
    }
  });
}

window.addEventListener("scroll", handleScroll);

// Smart Search
document.addEventListener("DOMContentLoaded", function () {
  handleScroll();

  const searchInput = document.getElementById("speakerSearch");
  if (!searchInput) return;

  searchInput.addEventListener("input", function () {
    filterSpeakers(this.value);
  });
});

function filterSpeakers(query) {
  const cards = document.querySelectorAll(".speaker-card");
  const q = query.toLowerCase().trim();
  let visibleCount = 0;

  cards.forEach((card) => {
    const details = card.querySelector(".speaker-details");
    const name    = (details?.querySelector("h3")?.textContent || "").toLowerCase();
    const allP    = details?.querySelectorAll("p");
    const company = (allP?.[0]?.textContent || "").toLowerCase();
    const topic   = (allP?.[1]?.textContent || "").toLowerCase();

    const match = !q || name.includes(q) || company.includes(q) || topic.includes(q);

    if (match) {
      card.classList.remove("hidden");
      card.classList.add("show");
      visibleCount++;
    } else {
      card.classList.add("hidden");
      card.classList.remove("show");
    }
  });

  const msg = document.getElementById("no-results-msg");
  if (msg) msg.style.display = (visibleCount === 0 && q) ? "block" : "none";

  const countEl = document.getElementById("result-count");
  if (countEl) countEl.textContent = q ? `Showing ${visibleCount} of 9 speakers` : "";
}

function clearSearch() {
  const input = document.getElementById("speakerSearch");
  const clearBtn = document.getElementById("clearBtn");
  if (input) input.value = "";
  if (clearBtn) clearBtn.style.display = "none";

  document.querySelectorAll(".speaker-card").forEach((card) => {
    card.classList.remove("hidden");
    card.classList.add("show");
  });

  const msg = document.getElementById("no-results-msg");
  if (msg) msg.style.display = "none";

  const countEl = document.getElementById("result-count");
  if (countEl) countEl.textContent = "";
}