
(function() {
  const modelsCatalog = [
    {
        "id": "anthropic/claude-opus-5.5",
        "name": "Claude Opus 5.5",
        "author": "Anthropic",
        "ctx": "1.0M",
        "price": "$2.00 / 1M (50% OFF)",
        "tag": "50% OFF"
    },
    {
        "id": "anthropic/claude-sonnet-5-5",
        "name": "Claude Sonnet 5.5",
        "author": "Anthropic",
        "ctx": "1.0M",
        "price": "$1.00 / 1M (50% OFF)",
        "tag": "50% OFF"
    },
    {
        "id": "anthropic/claude-fable-5-1",
        "name": "Claude Fable 5.1",
        "author": "Anthropic",
        "ctx": "1.0M",
        "price": "$5.00 / 1M (50% OFF)",
        "tag": "50% OFF"
    },
    {
        "id": "anthropic/claude-haiku-5-5",
        "name": "Claude Haiku 5.5",
        "author": "Anthropic",
        "ctx": "1.0M",
        "price": "$0.05 / 1M (50% OFF)",
        "tag": "50% OFF"
    },
    {
        "id": "anthropic/claude-opus-4-7",
        "name": "Claude Opus 4.7",
        "author": "Anthropic",
        "ctx": "1.0M",
        "price": "$2.50 / 1M (50% OFF)",
        "tag": "50% OFF"
    },
    {
        "id": "anthropic/claude-opus-4-6",
        "name": "Claude Opus 4.6",
        "author": "Anthropic",
        "ctx": "1.0M",
        "price": "$2.50 / 1M (50% OFF)",
        "tag": "50% OFF"
    },
    {
        "id": "anthropic/claude-opus-4-5",
        "name": "Claude Opus 4.5",
        "author": "Anthropic",
        "ctx": "200K",
        "price": "$2.50 / 1M (50% OFF)",
        "tag": "50% OFF"
    },
    {
        "id": "anthropic/claude-haiku-4-5",
        "name": "Claude Haiku 4.5",
        "author": "Anthropic",
        "ctx": "200K",
        "price": "$0.125 / 1M (50% OFF)",
        "tag": "50% OFF"
    },
    {
        "id": "anthropic/claude-opus-4-1",
        "name": "Claude Opus 4.1",
        "author": "Anthropic",
        "ctx": "200K",
        "price": "$7.50 / 1M (50% OFF)",
        "tag": "50% OFF"
    },
    {
        "id": "anthropic/claude-opus-4-0",
        "name": "Claude Opus 4.0",
        "author": "Anthropic",
        "ctx": "200K",
        "price": "$7.50 / 1M (50% OFF)",
        "tag": "50% OFF"
    },
    {
        "id": "zhipu/glm-5-3-flashx-legal",
        "name": "GLM-5.3 FlashX Legal",
        "author": "Zhipu AI",
        "ctx": "1.05M",
        "price": "$0.185 / 1M (50% OFF)",
        "tag": "50% OFF"
    },
    {
        "id": "zhipu/glm-5-3-flashx",
        "name": "GLM-5.3 FlashX",
        "author": "Zhipu AI",
        "ctx": "1.05M",
        "price": "$0.05 / 1M (50% OFF)",
        "tag": "50% OFF"
    },
    {
        "id": "zhipu/glm-5-3-flash",
        "name": "GLM-5.3 Flash",
        "author": "Zhipu AI",
        "ctx": "1.05M",
        "price": "$0.0142 / 1M (50% OFF)",
        "tag": "50% OFF"
    },
    {
        "id": "zhipu/glm-5-3",
        "name": "GLM-5.3",
        "author": "Zhipu AI",
        "ctx": "1.05M",
        "price": "$0.035 / 1M (50% OFF)",
        "tag": "50% OFF"
    },
    {
        "id": "zhipu/glm-5-2",
        "name": "GLM-5.2",
        "author": "Zhipu AI",
        "ctx": "1.05M",
        "price": "$0.025 / 1M (50% OFF)",
        "tag": "50% OFF"
    },
    {
        "id": "openai/gpt-6.1-terra",
        "name": "GPT-6.1 Terra",
        "author": "OpenAI",
        "ctx": "1.05M",
        "price": "$0.50 / 1M (50% OFF)",
        "tag": "50% OFF"
    },
    {
        "id": "openai/gpt-6.1-sol",
        "name": "GPT-6.1 Sol",
        "author": "OpenAI",
        "ctx": "1.05M",
        "price": "$1.00 / 1M (50% OFF)",
        "tag": "50% OFF"
    },
    {
        "id": "openai/gpt-6-sol",
        "name": "GPT-6 Sol",
        "author": "OpenAI",
        "ctx": "1.05M",
        "price": "$1.00 / 1M (50% OFF)",
        "tag": "50% OFF"
    },
    {
        "id": "openai/gpt-6-astra",
        "name": "GPT-6 Astra",
        "author": "OpenAI",
        "ctx": "1.05M",
        "price": "$5.00 / 1M (50% OFF)",
        "tag": "50% OFF"
    },
    {
        "id": "openai/gpt-6-luna",
        "name": "GPT-6 Luna",
        "author": "OpenAI",
        "ctx": "1.05M",
        "price": "$1.10 / 1M (50% OFF)",
        "tag": "50% OFF"
    },
    {
        "id": "openai/gpt-6",
        "name": "GPT-6",
        "author": "OpenAI",
        "ctx": "1.05M",
        "price": "$2.00 / 1M (50% OFF)",
        "tag": "50% OFF"
    },
    {
        "id": "openai/gpt-5-6",
        "name": "GPT-5.6",
        "author": "OpenAI",
        "ctx": "1.05M",
        "price": "$1.00 / 1M (50% OFF)",
        "tag": "50% OFF"
    },
    {
        "id": "openai/gpt-5-5",
        "name": "GPT-5.5",
        "author": "OpenAI",
        "ctx": "1.05M",
        "price": "$2.50 / 1M (50% OFF)",
        "tag": "50% OFF"
    },
    {
        "id": "openai/gpt-5-4",
        "name": "GPT-5.4",
        "author": "OpenAI",
        "ctx": "1.05M",
        "price": "$1.10 / 1M (50% OFF)",
        "tag": "50% OFF"
    },
    {
        "id": "openai/gpt-5-3-codex",
        "name": "GPT-5.3 Codex",
        "author": "OpenAI",
        "ctx": "400K",
        "price": "$1.00 / 1M (50% OFF)",
        "tag": "50% OFF"
    },
    {
        "id": "openai/gpt-5-2",
        "name": "GPT-5.2",
        "author": "OpenAI",
        "ctx": "400K",
        "price": "$1.25 / 1M (50% OFF)",
        "tag": "50% OFF"
    },
    {
        "id": "openai/gpt-5-1",
        "name": "GPT-5.1",
        "author": "OpenAI",
        "ctx": "400K",
        "price": "$1.50 / 1M (50% OFF)",
        "tag": "50% OFF"
    },
    {
        "id": "openai/gpt-5",
        "name": "GPT-5",
        "author": "OpenAI",
        "ctx": "400K",
        "price": "$0.625 / 1M (50% OFF)",
        "tag": "50% OFF"
    },
    {
        "id": "openai/o3",
        "name": "o3",
        "author": "OpenAI",
        "ctx": "200K",
        "price": "$1.00 / 1M (50% OFF)",
        "tag": "50% OFF"
    },
    {
        "id": "openai/o4-mini",
        "name": "o4-mini",
        "author": "OpenAI",
        "ctx": "128K",
        "price": "$0.55 / 1M (50% OFF)",
        "tag": "50% OFF"
    },
    {
        "id": "openai/gpt-6-instant",
        "name": "GPT-6 Instant",
        "author": "OpenAI",
        "ctx": "128K",
        "price": "$0.30 / 1M (50% OFF)",
        "tag": "50% OFF"
    }
];

  function showToast(msg) {
    let t = document.getElementById("orToast");
    if (!t) {
      t = document.createElement("div");
      t.id = "orToast";
      t.className = "or-toast";
      document.body.appendChild(t);
    }
    t.textContent = msg;
    t.style.display = "block";
    setTimeout(() => { t.style.display = "none"; }, 3500);
  }
  window.showToast = showToast;

  function closeAllModals() {
    document.querySelectorAll(".or-modal-overlay").forEach(m => m.classList.remove("or-active"));
  }
  window.closeAllModals = closeAllModals;

  function openSearchModal() {
    closeAllModals();
    const modal = document.getElementById("orSearchModal");
    if (modal) {
      modal.classList.add("or-active");
      const input = document.getElementById("orSearchInput");
      if (input) {
        input.value = "";
        input.focus();
      }
      renderSearchResults(modelsCatalog);
    }
  }
  window.openSearchModal = openSearchModal;

  function handleModelSearch(query) {
    const q = (query || "").toLowerCase().trim();
    const filtered = modelsCatalog.filter(m => m.name.toLowerCase().includes(q) || m.id.toLowerCase().includes(q) || m.author.toLowerCase().includes(q));
    renderSearchResults(filtered);
  }
  window.handleModelSearch = handleModelSearch;

  function renderSearchResults(models) {
    const list = document.getElementById("orSearchResults");
    if (!list) return;
    if (models.length === 0) {
      list.innerHTML = '<div style="padding: 24px; text-align: center; color: #9ca3af;">No matching models found.</div>';
      return;
    }
    list.innerHTML = models.map(m => `
      <div class="or-result-item" onclick="location.href='/chat?model=' + encodeURIComponent('${m.id}')">
        <div>
          <div style="font-weight: 700; font-size: 14px;">${m.name}</div>
          <div style="font-size: 11px; opacity: 0.6; font-family: monospace;">${m.id} • by ${m.author}</div>
        </div>
        <div style="text-align: right;">
          <div style="font-size: 12px; font-weight: 700; color: #3b82f6;">${m.price}</div>
          <div style="font-size: 10px; opacity: 0.7;">${m.ctx} context</div>
        </div>
      </div>
    `).join("");
  }

    function openAuthModal(mode) {
    if (mode === "apikey") {
      window.location.href = "/keys";
    } else {
      window.location.href = "/login";
    }
  } else {
      if (title) title.textContent = "Sign up for Free Router";
      if (sub) sub.textContent = "Access 600+ frontier & open-weights models through a unified interface.";
    }
    modal.classList.add("or-active");
  }
  window.openAuthModal = openAuthModal;

  function triggerOAuth(provider) {
    closeAllModals();
    const key = "sk-or-v1-" + Math.random().toString(36).substring(2, 12) + Math.random().toString(36).substring(2, 12);
    navigator.clipboard.writeText(key).catch(() => {});
    showToast("✓ Authenticated with " + provider + "! API key generated: " + key.substring(0, 16) + "...");
  }
  window.triggerOAuth = triggerOAuth;

  function setTheme(mode) {
    const html = document.documentElement;
    const isDark = mode === "dark" || (mode === "system" && window.matchMedia("(prefers-color-scheme: dark)").matches);
    html.classList.remove("light", "dark");
    html.classList.add(isDark ? "dark" : "light");
    html.style.colorScheme = isDark ? "dark" : "light";
    localStorage.setItem("or_theme", mode);
    showToast("Theme set to: " + mode);
  }
  window.setTheme = setTheme;

  document.addEventListener("DOMContentLoaded", () => {
    const saved = localStorage.getItem("or_theme") || "dark";
    setTheme(saved);

    // Search Buttons
    document.querySelectorAll("button, [role='button']").forEach(b => {
      const text = (b.textContent || "").toLowerCase();
      if (text.includes("search") || b.getAttribute("aria-label")?.toLowerCase().includes("search")) {
        b.style.cursor = "pointer";
        b.onclick = (e) => { e.preventDefault(); openSearchModal(); };
      }
      if (text.includes("sign up") || text.includes("sign in")) { b.style.cursor = "pointer"; b.onclick = (e) => { e.preventDefault(); window.location.href = "/login"; }; };
      }
      if (text.includes("get api key")) {
        b.style.cursor = "pointer";
        b.onclick = () => { window.location.href = "/keys"; };
      }
      if (text.includes("subscribe")) {
        b.onclick = (e) => {
          e.preventDefault();
          const emailInput = document.querySelector("input[type='email'], input[placeholder*='@']");
          if (emailInput && emailInput.value.includes("@")) {
            showToast("✓ Subscribed to the Free Router newsletter!");
            emailInput.value = "";
          } else {
            showToast("Please enter a valid email address");
          }
        };
      }
    });

    // Theme Radios in footer
    document.querySelectorAll("label, input[type='radio']").forEach(el => {
      const text = (el.textContent || el.value || "").trim().toLowerCase();
      if (["light", "dark", "system"].includes(text)) {
        el.style.cursor = "pointer";
        el.addEventListener("click", () => setTheme(text));
      }
    });

    // Keyboard Shortcuts (⌘K / Ctrl+K and ESC)
    window.addEventListener("keydown", (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        openSearchModal();
      }
      if (e.key === "Escape") {
        closeAllModals();
      }
    });
  });

  // Inject Professional Header User Menu & Keys Link into Navbar
  function injectNavbarUserMenu() {
    if (location.pathname.startsWith("/keys") || document.getElementById("profileDropdownBtn")) return;
    const nav = document.querySelector('header nav, header div[class*="items-center"]:has(a)');
    const headerRight = document.querySelector('header div[class*="items-center"]:last-child, header .nav-actions') || document.querySelector('header');
    
    // Add 'Keys' link to nav if missing
    document.querySelectorAll('nav').forEach(n => {
      if (!n.querySelector('a[href="/keys"]')) {
        const link = document.createElement('a');
        link.href = '/keys';
        link.textContent = 'Keys';
        link.className = n.querySelector('a')?.className || 'keys-sidebar-link';
        link.style.cssText = 'padding: 6px 12px; font-weight: 600; font-size: 13px; text-decoration: none; color: inherit;';
        n.appendChild(link);
      }
    });

    // Add Profile / Balance dropdown if not present
    if (!document.getElementById('orGlobalUserMenuBtn') && headerRight) {
      const menuWrap = document.createElement('div');
      menuWrap.style.cssText = 'position: relative; display: inline-flex; align-items: center; gap: 10px; margin-left: 10px;';
      menuWrap.innerHTML = `
        <a href="/keys" style="display: flex; align-items: center; gap: 6px; background: rgba(212, 255, 0, 0.12); border: 1px solid rgba(212, 255, 0, 0.3); color: #d4ff00; padding: 4px 10px; border-radius: 9999px; font-size: 11px; font-weight: 700; text-decoration: none; font-family: monospace;">
          <span>$100.00</span>
        </a>
        <button id="orGlobalUserMenuBtn" style="background: none; border: none; cursor: pointer; display: flex; align-items: center; gap: 6px; padding: 0;">
          <div style="width: 30px; height: 30px; border-radius: 50%; background: linear-gradient(135deg, #3b82f6, #6366f1); color: #fff; font-weight: 700; font-size: 12px; display: flex; align-items: center; justify-content: center; box-shadow: 0 0 10px rgba(59, 130, 246, 0.3);">
            OR
          </div>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m6 9 6 6 6-6"/></svg>
        </button>
        <div id="orGlobalProfileDropdown" style="display: none; position: absolute; right: 0; top: 40px; width: 220px; background: #12151a; border: 1px solid #1f242d; border-radius: 12px; box-shadow: 0 12px 32px rgba(0,0,0,0.7); padding: 6px; z-index: 100000; font-family: 'Plus Jakarta Sans', sans-serif;">
          <div style="padding: 10px 12px; border-bottom: 1px solid #1f242d; margin-bottom: 4px;">
            <div style="font-weight: 700; font-size: 13px; color: #fff;">Personal Workspace</div>
            <div style="font-size: 11px; color: #9ca3af;">owner@freerouter.ai</div>
          </div>
          <a href="/keys" style="display: flex; align-items: center; gap: 10px; padding: 8px 12px; border-radius: 6px; font-size: 13px; color: #f4f5f7; text-decoration: none;">
            <span>🔑</span> <strong>API Keys</strong>
          </a>
          <a href="/chat" style="display: flex; align-items: center; gap: 10px; padding: 8px 12px; border-radius: 6px; font-size: 13px; color: #f4f5f7; text-decoration: none;">
            <span>💬</span> <strong>Chat Playground</strong>
          </a>
          <a href="/models" style="display: flex; align-items: center; gap: 10px; padding: 8px 12px; border-radius: 6px; font-size: 13px; color: #f4f5f7; text-decoration: none;">
            <span>🧠</span> <strong>Models Catalog</strong>
          </a>
          <a href="/rankings" style="display: flex; align-items: center; gap: 10px; padding: 8px 12px; border-radius: 6px; font-size: 13px; color: #f4f5f7; text-decoration: none;">
            <span>📊</span> <strong>Rankings</strong>
          </a>
          <div style="border-top: 1px solid #1f242d; margin: 4px 0;"></div>
          <button onclick="setTheme(document.documentElement.classList.contains('dark') ? 'light' : 'dark')" style="display: flex; align-items: center; justify-content: space-between; width: 100%; padding: 8px 12px; border-radius: 6px; font-size: 13px; color: #f4f5f7; background: none; border: none; cursor: pointer; text-align: left;">
            <span>🌓 Toggle Theme</span>
          </button>
        </div>
      `;
      headerRight.appendChild(menuWrap);

      const btn = document.getElementById('orGlobalUserMenuBtn');
      const drop = document.getElementById('orGlobalProfileDropdown');
      btn.onclick = (e) => {
        e.stopPropagation();
        drop.style.display = drop.style.display === 'block' ? 'none' : 'block';
      };
      document.addEventListener('click', (e) => {
        if (!menuWrap.contains(e.target)) drop.style.display = 'none';
      });
    }
  }

  window.addEventListener('DOMContentLoaded', injectNavbarUserMenu);

})();
