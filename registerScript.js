document.getElementById("registerForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const newUsername = document.getElementById("newUsername").value;
    const newPassword = document.getElementById("newPassword").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    // Simple validation check for password matching
    if (newPassword !== confirmPassword) {
        const errorMessage = document.getElementById("registerErrorMessage");
        errorMessage.style.display = "block";
        errorMessage.textContent = "Passwords do not match!";
    } else {
        alert("Registration successful!");
        // Optionally redirect to the login page after successful registration
        window.location.href = "index.html";
    }
});
