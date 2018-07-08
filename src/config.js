let APP_CONFIG = {};
if (typeof window !== "undefined") {
    APP_CONFIG = window.APP_CONFIG || {};
}

export const GOOGLE_ANALYTICS_ID = APP_CONFIG.GOOGLE_ANALYTICS_ID;
