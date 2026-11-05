/**
 * Free Router Client Frontend Configuration
 * Clean modular architecture ready for client backend integration.
 */
window.FREEROUTER_CONFIG = {
  // Client Backend URL (Set to your client's backend origin, or leave empty for same-origin proxy)
  BACKEND_API_URL: window.location.origin,

  // REST Endpoints
  ENDPOINTS: {
    STATUS: "/api/v1/status",
    CHAT: "/api/v1/chat/completions",
    MODELS: "/api/v1/models",
    KEYS: "/api/v1/keys",
    CREDITS: "/api/v1/credits"
  },

  // Pure Client-Side Mode: Zero external third-party API keys consumed
  STANDALONE_MODE: true
};
