document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault();

    // Retrieve entered username and password
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Simple validation for demonstration purposes
    if (username === "admin" && password === "password123") {
        // If login is successful, redirect to the student management page
        window.location.href = "student-management.html";
    } else {
        // Display error message if login fails
        const errorMessage = document.getElementById("errorMessage");
        errorMessage.style.display = "block";
        errorMessage.textContent = "Invalid username or password!";
    }
});

alert("userName: admin \n password: password123");
