const subscriptionEmail = document.getElementById("subscriptionEmail");

const subscription = () => {
  const email = subscriptionEmail.value.trim();
  if (email === "") {
    alert("Please enter your email address.");
    return;
  }
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0 -9.-]+\.[a-zA-Z]{2,}$/;
  if (!emailRegex.test(email)) {
    alert("Invalid email address.");
    return;
  }
  localStorage.setItem("SubscriptionEmail", email);
  window.location.href = "/home.html";
};

document.getElementById("subscriptionForm").addEventListener("submit", (e) => {
  e.preventDefault();
  subscription();
});

// Check for SubscriptionEmail in localStorage and redirect
const checkSubscriptionAndRedirect = () => {
  const subscriptionEmail = localStorage.getItem("SubscriptionEmail");
  if (subscriptionEmail) {
    window.location.href = "/home.html";
  }
};

window.addEventListener("DOMContentLoaded", checkSubscriptionAndRedirect);

// check run time current window location index.html and home.html
const checkCurrentLocation = () => {
  const subscriptionEmail = localStorage.getItem("SubscriptionEmail");
  if (subscriptionEmail) {
    window.location.href = "/home.html";
  }
};

checkCurrentLocation();
