import {
  signInWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

import { auth } from "./firebase.js";

const form = document.getElementById("login-form");
const email = document.getElementById("email");
const password = document.getElementById("password");
const statusText = document.getElementById("form-status");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  try {
    statusText.textContent = "Logging in...";

    await signInWithEmailAndPassword(
      auth,
      email.value,
      password.value
    );

   window.location.replace("dashboard.html");
  } catch (err) {
    statusText.textContent = err.message;
  }
});