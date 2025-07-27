const registerform = document.getElementById("registerModal");
const loginform = document.getElementById("loginModal");
const loginBtn = document.getElementById("login");
const regBtn = document.getElementById("register");
const logoutBtn = document.getElementById("logout");
const userId = document.querySelector("#userid");
logoutBtn.classList.add("hidden");
// Open the modal
function openRegModal() {
  registerform.style.display = "flex";
}
function openLogModal() {
  loginform.style.display = "flex";
}

// Close the modal
function closeModal() {
  registerform.style.display = "none";
  loginform.style.display = "none";
}

// Handle form submission
function regHandleSubmit(e) {
  e.preventDefault();

  const formData = new FormData(e.target);
  const username = formData.get("username"); // Gets the value of the "username" field
  const email = formData.get("email"); // Gets the value of the "email" field
  const password = formData.get("password");
  if (localStorage.getItem(email)) {
    alert("Email is already registered. Please log in.");
  } else {
    // Save user data in localStorage
    const user = { username, email, password };
    localStorage.setItem(email, JSON.stringify(user));
    alert("Registration Successfull! Welcome....");
    window.location.href = "/index.html";
    register();
  }
}

function loginHandleSubmit(e) {
  e.preventDefault();
  const email = document.getElementById("logEmail").value;
  const password = document.getElementById("logPassword").value;
  const user = JSON.parse(localStorage.getItem(email));
  

  if (user && user.password === password) {
   
    alert("Log in Successful! Welcome....");
    window.location.href = "./index.html";
 
    signIn();
  } else {
    alert("Invalid email or password. Please try again.");
  }
}

registerform.addEventListener("submit", regHandleSubmit);
loginform.addEventListener("submit", loginHandleSubmit);

// On page load, check the user's login status from localStorage
document.addEventListener("DOMContentLoaded", () => {
  if (localStorage.getItem("isAuthenticated") === "true") {
    signIn(); // If the user is authenticated, simulate a sign-in state
  }
});

// Function to sign in
function signIn() {
  // Hide Sign In and Register buttons, show Log Out button
  // Or "block" based on layout
  regBtn.classList.add("hidden");
  loginBtn.classList.add("hidden");
  logoutBtn.classList.remove("hidden");
  // Store the login status in localStorage
  localStorage.setItem("isAuthenticated", "true");
 
}

// Function to register (simulated)
function register() {
  signIn();
}

// Function to log out
function logOut() {
  // Show Sign In and Register buttons, hide Log Out button
  regBtn.classList.remove("hidden");
  loginBtn.classList.remove("hidden");
  logoutBtn.classList.add("hidden");
  // Reset content to the default state
  alert("You successfully logged out");
  // Remove the login status from localStorage
  localStorage.removeItem("isAuthenticated");
}

logoutBtn.addEventListener("click", logOut);

function recipe1ClickHandle(){
  if (localStorage.getItem("isAuthenticated") === "true") {
    window.location.href = "/recipe.html"; // If the user is authenticated, simulate a sign-in state
  }else{
    alert("Please,Log in first.");
  }
}
function recipe2ClickHandle(){
  if (localStorage.getItem("isAuthenticated") === "true") {
    window.location.href = "/recipe2.html"; // If the user is authenticated, simulate a sign-in state
  }else{
    alert("Please,Log in first.");
  }
}
function recipe3ClickHandle(){
  if (localStorage.getItem("isAuthenticated") === "true") {
    window.location.href = "/recipe3.html"; // If the user is authenticated, simulate a sign-in state
  }else{
    alert("Please,Log in first.");
  }
}

