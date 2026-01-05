const list = document.getElementById("list");

function formatTime(ms) {
  const totalSeconds = Math.floor(ms / 1000);
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  return `${minutes}m ${seconds}s`;
}

chrome.storage.local.get(null, (data) => {
  Object.entries(data).forEach(([site, time]) => {
    const li = document.createElement("li");
    li.textContent = `${site}: ${formatTime(time)}`;
    list.appendChild(li);
  });
});
