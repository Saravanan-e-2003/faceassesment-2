// Function to display students in the table
function displayStudents() {
    const students = JSON.parse(localStorage.getItem("students")) || []; // Retrieve students from localStorage
    const tableBody = document.getElementById('studentTable').getElementsByTagName('tbody')[0];
    tableBody.innerHTML = ''; // Clear the existing rows

    students.forEach(student => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${student.id}</td>
            <td>${student.name}</td>
            <td>${student.age}</td>
            <td>${student.grade}</td>
        `;
        tableBody.appendChild(row);
    });
}

// Call the displayStudents function to populate the table on page load
window.onload = displayStudents;
