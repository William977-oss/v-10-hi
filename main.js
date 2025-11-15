import './styles.scss';

const statusText = document.getElementById("status");

function handleVisibilityChange() {
  if (document.hidden) {
    console.log("Tab is hidden");
    statusText.textContent = "The tab is hidden.";
  } else {
    console.log("Tab is visible");
    statusText.textContent = "The tab is visible.";
  }
}

document.addEventListener("visibilitychange", handleVisibilityChange);