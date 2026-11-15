const pool = require("./db");

// Retrieve and display all students from the database
async function getAllStudents() {
    try {
        // Execute the SQL query
        const result = await pool.query("SELECT * FROM students");

        // Display the returned student records
        console.log("All Students:");
        console.table(result.rows);

    } catch (error) {
        // Display an error if the query fails
        console.error("Error retrieving students:", error.message);
    }
}


// Add a new student to the database
async function addStudent(first_name, last_name, email, enrollment_date) {
    try {
        // SQL query with placeholders for student information
        const query = `
            INSERT INTO students (first_name, last_name, email, enrollment_date)
            VALUES ($1, $2, $3, $4)
        `;

        // Values that replace the placeholders in the query
        const values = [first_name, last_name, email, enrollment_date];

        // Execute the INSERT query
        await pool.query(query, values);
        console.log("Student added successfully!");

    } catch (error) {
        console.error("Error adding student:", error.message);
    }
}


// Update the email address of an existing student
async function updateStudentEmail(student_id, new_email) {
    try {
        // SQL query with placeholders for the new email and student ID
        const query = `
            UPDATE students
            SET email = $1
            WHERE student_id = $2
        `;

        // Values that replace the placeholders
        const values = [new_email, student_id];

        // Execute the UPDATE query
        const result = await pool.query(query, values);

        // Check whether a student was actually updated
        if (result.rowCount > 0) {
            console.log("Student email updated successfully!");
        } else {
            console.log("Student not found.");
        }

    } catch (error) {
        console.error("Error updating student:", error.message);
    }
}

// Delete a student from the database using their student ID
async function deleteStudent(student_id) {
    try {
        // SQL query to delete a student with the specified ID
        const query = `
            DELETE FROM students
            WHERE student_id = $1
        `;

        // Execute the query with the provided student ID
        const result = await pool.query(query, [student_id]);

        // Check whether a student was deleted
        if (result.rowCount > 0) {
            console.log("Student deleted successfully!");
        } else {
            console.log("Student not found.");
        }

    } catch (error) {
        // Display any database errors
        console.error("Error deleting student:", error.message);
    }
}


async function main() {
    // READ: Display all existing students
    await getAllStudents();

    // CREATE: Add a new student
    // await addStudent("Jensen", "Huang", "notceo.ai@nvidia.com", "2026-11-12");

    // UPDATE: Change a student's email
    // await updateStudentEmail(4, "bubbleburst@honeypot.com");

    // DELETE: Remove a student
    // await deleteStudent(4);

    // Close the database connections
    await pool.end();
}

main();


