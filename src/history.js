/* eslint-disable no-unused-vars */

const HISTORY_KEY = "save-in-history";

const SaveHistory = {
  add: async (entry) => {
    browser.storage.local.get(HISTORY_KEY, function(current) {
      browser.storage.local.set({
        [HISTORY_KEY]: [...((current || {})[HISTORY_KEY] || []), entry],
      })
    });
  },
  get: async () => (await browser.storage.local.get(HISTORY_KEY)) || [],
};
