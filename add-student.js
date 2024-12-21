document.getElementById("addStudentForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const studentId = document.getElementById("studentId").value;
    const studentName = document.getElementById("studentName").value;
    const studentAge = document.getElementById("studentAge").value;
    const studentGrade = document.getElementById("studentGrade").value;

    // Create a new student object
    const newStudent = {
        id: studentId,
        name: studentName,
        age: studentAge,
        grade: studentGrade
    };

    // Get existing students from localStorage or initialize an empty array if none exist
    let students = JSON.parse(localStorage.getItem("students")) || [];

    // Add the new student to the students array
    students.push(newStudent);

    // Store the updated students array in localStorage
    localStorage.setItem("students", JSON.stringify(students));

    // Redirect back to the student management page
    window.location.href = 'student-management.html';
});
