let activeTabId = null;
let activeDomain = null;
let startTime = null;

function getDomain(url) {
  try {
    return new URL(url).hostname;
  } catch {
    return null;
  }
}

function updateTime() {
  if (!activeDomain || !startTime) return;

  const timeSpent = Date.now() - startTime;

  chrome.storage.local.get([activeDomain], (result) => {
    const previousTime = result[activeDomain] || 0;
    chrome.storage.local.set({
      [activeDomain]: previousTime + timeSpent
    });
  });
}

chrome.tabs.onActivated.addListener(({ tabId }) => {
  updateTime();

  chrome.tabs.get(tabId, (tab) => {
    activeDomain = getDomain(tab.url);
    startTime = Date.now();
  });
});

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (tab.active && changeInfo.url) {
    updateTime();
    activeDomain = getDomain(tab.url);
    startTime = Date.now();
  }
});
