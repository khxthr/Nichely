// DOM Elements
const tabButtons = document.querySelectorAll(".tab-btn")
const formContainers = document.querySelectorAll(".form-container")
const signinForm = document.getElementById("signin")
const signupForm = document.getElementById("signup")

// Tab Switching Functionality
tabButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const targetTab = button.getAttribute("data-tab")

    // Remove active class from all tabs and forms
    tabButtons.forEach((btn) => btn.classList.remove("active"))
    formContainers.forEach((form) => form.classList.remove("active"))

    // Add active class to clicked tab and corresponding form
    button.classList.add("active")
    document.getElementById(`${targetTab}-form`).classList.add("active")

    // Add fade-in animation
    document.getElementById(`${targetTab}-form`).classList.add("fade-in")

    // Remove animation class after animation completes
    setTimeout(() => {
      document.getElementById(`${targetTab}-form`).classList.remove("fade-in")
    }, 300)
  })
})

// Form Validation Functions
function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

function validatePassword(password) {
  return password.length >= 8
}

function showError(input, message) {
  // Remove existing error
  const existingError = input.parentNode.querySelector(".error-message")
  if (existingError) {
    existingError.remove()
  }

  // Add error styling
  input.style.borderColor = "var(--error-color)"

  // Create and add error message
  const errorDiv = document.createElement("div")
  errorDiv.className = "error-message"
  errorDiv.style.color = "var(--error-color)"
  errorDiv.style.fontSize = "0.75rem"
  errorDiv.style.marginTop = "0.25rem"
  errorDiv.textContent = message

  input.parentNode.appendChild(errorDiv)
}

function clearError(input) {
  const existingError = input.parentNode.querySelector(".error-message")
  if (existingError) {
    existingError.remove()
  }
  input.style.borderColor = "var(--border-color)"
}

// Sign In Form Handler
signinForm.addEventListener("submit", (e) => {
  e.preventDefault()

  const email = document.getElementById("signin-email")
  const password = document.getElementById("signin-password")
  let isValid = true

  // Clear previous errors
  clearError(email)
  clearError(password)

  // Validate email
  if (!email.value.trim()) {
    showError(email, "Email is required")
    isValid = false
  } else if (!validateEmail(email.value)) {
    showError(email, "Please enter a valid email address")
    isValid = false
  }

  // Validate password
  if (!password.value.trim()) {
    showError(password, "Password is required")
    isValid = false
  }

  if (isValid) {
    // Simulate login process
    const submitBtn = signinForm.querySelector(".auth-btn.primary")
    const originalText = submitBtn.textContent

    submitBtn.textContent = "Signing In..."
    submitBtn.disabled = true

    setTimeout(() => {
      alert("Sign in successful! (This is a demo)")
      submitBtn.textContent = originalText
      submitBtn.disabled = false

      // In a real app, you would redirect to dashboard
      // window.location.href = 'dashboard.html';
    }, 2000)
  }
})

// Sign Up Form Handler
signupForm.addEventListener("submit", (e) => {
  e.preventDefault()

  const firstname = document.getElementById("signup-firstname")
  const lastname = document.getElementById("signup-lastname")
  const email = document.getElementById("signup-email")
  const password = document.getElementById("signup-password")
  const confirmPassword = document.getElementById("signup-confirm")
  const termsCheckbox = signupForm.querySelector('input[name="terms"]')
  let isValid = true

  // Clear previous errors
  ;[firstname, lastname, email, password, confirmPassword].forEach(clearError)

  // Validate first name
  if (!firstname.value.trim()) {
    showError(firstname, "First name is required")
    isValid = false
  }

  // Validate last name
  if (!lastname.value.trim()) {
    showError(lastname, "Last name is required")
    isValid = false
  }

  // Validate email
  if (!email.value.trim()) {
    showError(email, "Email is required")
    isValid = false
  } else if (!validateEmail(email.value)) {
    showError(email, "Please enter a valid email address")
    isValid = false
  }

  // Validate password
  if (!password.value.trim()) {
    showError(password, "Password is required")
    isValid = false
  } else if (!validatePassword(password.value)) {
    showError(password, "Password must be at least 8 characters long")
    isValid = false
  }

  // Validate confirm password
  if (!confirmPassword.value.trim()) {
    showError(confirmPassword, "Please confirm your password")
    isValid = false
  } else if (password.value !== confirmPassword.value) {
    showError(confirmPassword, "Passwords do not match")
    isValid = false
  }

  // Validate terms checkbox
  if (!termsCheckbox.checked) {
    alert("Please accept the Terms of Service and Privacy Policy")
    isValid = false
  }

  if (isValid) {
    // Simulate registration process
    const submitBtn = signupForm.querySelector(".auth-btn.primary")
    const originalText = submitBtn.textContent

    submitBtn.textContent = "Creating Account..."
    submitBtn.disabled = true

    setTimeout(() => {
      alert("Account created successfully! (This is a demo)")
      submitBtn.textContent = originalText
      submitBtn.disabled = false

      // Switch to sign in tab
      document.querySelector('[data-tab="signin"]').click()
    }, 2000)
  }
})

// Real-time validation
document.addEventListener("input", (e) => {
  if (e.target.matches('input[type="email"]')) {
    if (e.target.value && validateEmail(e.target.value)) {
      clearError(e.target)
    }
  }

  if (e.target.matches('input[type="password"]')) {
    if (e.target.value && validatePassword(e.target.value)) {
      clearError(e.target)
    }
  }

  // Check password match for confirm password field
  if (e.target.id === "signup-confirm") {
    const password = document.getElementById("signup-password").value
    if (e.target.value && e.target.value === password) {
      clearError(e.target)
    }
  }
})

// Google Sign In Simulation
document.querySelectorAll(".auth-btn.secondary").forEach((btn) => {
  btn.addEventListener("click", () => {
    alert("Google Sign In would be implemented here (This is a demo)")
  })
})

// Keyboard navigation for tabs
document.addEventListener("keydown", (e) => {
  if (e.key === "Tab" && e.target.classList.contains("tab-btn")) {
    e.preventDefault()
    const currentIndex = Array.from(tabButtons).indexOf(e.target)
    const nextIndex = e.shiftKey
      ? (currentIndex - 1 + tabButtons.length) % tabButtons.length
      : (currentIndex + 1) % tabButtons.length

    tabButtons[nextIndex].focus()
    tabButtons[nextIndex].click()
  }
})

// Initialize page
document.addEventListener("DOMContentLoaded", () => {
  // Focus first input of active form
  const activeForm = document.querySelector(".form-container.active")
  const firstInput = activeForm.querySelector("input")
  if (firstInput) {
    firstInput.focus()
  }
})
