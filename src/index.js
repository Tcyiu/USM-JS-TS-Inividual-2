import getRandomActivity from "./activity"

const updateActivity = () => {
  const activityRef = document.getElementById('activity');
  getRandomActivity().then(data => activityRef.textContent = data);
} 

window.onload = () => {
  updateActivity();
  setInterval(() => {
    updateActivity()
  }, 3000)
}