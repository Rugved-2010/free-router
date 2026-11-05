# Free Router Frontend Platform

A production client-side frontend platform for **Free Router** built with pure HTML5, CSS3 design tokens (Tailwind & Radix compiled), and vanilla ES6+ modules.

## Key Features

- **100% Pure Frontend:** Zero external API keys or developer tokens required. All sessions, keys, and benchmarks operate via local storage and client-side simulations.
- **Client Backend Ready:** Fully modular backend configuration in `assets/js/config.js`. Connect any REST backend by updating `BACKEND_API_URL`.
- **31 Frontier Models:** Verified maximum context windows (`1.0M`, `1.05M`, `400K`, `200K`, `128K`) with official vector logos for Anthropic, OpenAI, and Zhipu AI.
- **50% Official Discount Pricing:** All models displayed at 50% below standard provider rates with original prices crossed out.
- **Zero Data Retention (ZDR):** Enforced by default with dedicated compliance indicators.
- **Interactive Modules:**
  - `⌘K` Quick Search / Command Palette across all 31 models.
  - Interactive AI Chat Playground with side-by-side prompt execution and benchmark presets.
  - API Key Generator with instant reveal, clipboard copy, and revocation.
  - Live System & Model Availability Status dashboard (`/status`) with automatic polling.
  - Clean authentication flow (`/login`) with Google and GitHub options.

## Directory Structure

```
/
├── index.html              # Free Router Homepage (Hero, 4 Pillars, Featured Models, Blog & Footer)
├── models/
│   └── index.html          # Models Catalog with 31 verified models, category tabs, and real-time search
├── chat/
│   └── index.html          # AI Chat Playground with side-by-side prompt benchmarking and presets
├── keys/
│   └── index.html          # API Keys & Workspace Manager (Key generation, reveal, copy & delete)
├── status/
│   └── index.html          # Live Model & System Availability Dashboard
├── pricing/
│   └── index.html          # Transparent 50% Discount Pricing & Zero-Subscription Guarantee
├── login/
│   └── index.html          # Sign In / Sign Up with Google and GitHub
├── assets/
│   ├── css/
│   │   └── openrouter.css  # Production compiled Tailwind & Radix design tokens
│   ├── js/
│   │   ├── config.js       # Client backend API configuration
│   │   └── openrouter.js   # Command Palette (⌘K), Modals, and Theme controllers
│   └── icons/
│       ├── anthropic.png   # Official Anthropic brand logo
│       ├── openai.png      # Official OpenAI brand logo
│       └── zhipu.png       # Official Zhipu AI brand logo
├── models.json             # 31 verified models specifications dataset
├── server.js               # Clean-URL Node.js static & status API development server
└── package.json            # npm start / dev scripts
```

## Quick Start

```bash
# 1. Install dependencies (Optional: zero external npm dependencies required)
npm start

# 2. Or start directly with Node.js
node server.js
```

The application runs at **`http://localhost:4188/`**.

## Routes Reference

| Route | Description |
|---|---|
| `/` | Free Router Homepage |
| `/models` | 31 Models Catalog with live search & modality tabs |
| `/chat` | Side-by-side AI Chat Playground |
| `/keys` | API Key generation and workspace settings |
| `/status` | Live system and model availability health dashboard |
| `/pricing` | Transparent pricing and 50% discount terms |
| `/login` | Authentication page (Google & GitHub) |
| `/api/v1/status` | Backend health check endpoint |
