# MELVIN NWABUISI - 101304547

# COMP 3005 Assignment 3(Q1) — Database Interaction with PostgreSQL and Application Programming

## Project Description

This project implements a PostgreSQL database containing student records and a Node.js application that performs Create, Read, Update, and Delete (CRUD) operations.

The application uses the `pg` package to connect to PostgreSQL and execute SQL queries.

## Technologies Used

- PostgreSQL
- pgAdmin 4
- Node.js
- JavaScript
- node-postgres (`pg`)

## Project Structure

COMP3005-Assignment/
├── app/
│   ├── db.js
│   └── main.js
├── database/
│   └── setup.sql
├── .gitignore
├── package.json
├── package-lock.json
└── README.md

## Database Setup

1. Install PostgreSQL and pgAdmin 4.
2. Open pgAdmin 4 and connect to your PostgreSQL server.
3. Create a new database named `student_db`.
4. Open the Query Tool for `student_db`.
5. Execute the SQL statements from `database/setup.sql`.

The script creates the `students` table and inserts the three initial records.

## Application Setup

**1. Install Node.js**
Ensure that Node.js and npm are installed on your computer.

**2. Install dependencies**

Open a terminal in the **project root directory** and execute:
*please ensure you are in the project directory else the dependencies to run the program wont work!!!*
```bash
npm install
```
This installs the PostgreSQL client package required by the application.

**3. Configure the PostgreSQL connection**

Open `app/db.js` and verify that the PostgreSQL username, host, database name, and port match your local setup.
The application reads the PostgreSQL password from the `DB_PASSWORD` environment variable.

For Windows PowerShell:
```powershell
$env:DB_PASSWORD = "YOUR_POSTGRES_PASSWORD"
```

For Windows Command Prompt:
```cmd
set "DB_PASSWORD=YOUR_POSTGRES_PASSWORD"
```

Replace `YOUR_POSTGRES_PASSWORD` with your local PostgreSQL password. Do not commit passwords to GitHub.

**4. Run the application**

From the project root directory, execute:
```bash
node app/main.js
```

## CRUD Functions

The application implements four functions:

### 1. getAllStudents()

Retrieves all records from the `students` table and displays them in the terminal.                            

### 2. addStudent(first_name, last_name, email, enrollment_date)

Adds a new student record to the database using the provided information.

### 3. updateStudentEmail(student_id, new_email)

Updates the email address of an existing student identified by their student ID.

### 4. deleteStudent(student_id)

Deletes a student record using the provided student ID.

## Testing the Application

To test the functions, uncomment the appropriate function call inside `main()` in `app/main.js`.

For example:

To show the students table
```javascript
await getAllStudents();
```

To insert a student:
```javascript
await addStudent("Michael", "Scott", "michael.scott@example.com", "2024-01-10");
```

To update a student's email:
```javascript
await updateStudentEmail(4, "mscott@dundermifflin.com");
```

To delete a student:
```javascript
await deleteStudent(4);
```

Replace `4` with the correct student ID from your database.
Run `node app/main.js` after selecting the desired operation. Use the pgAdmin Query Tool to verify database changes:
```sql
SELECT * FROM students;
```

## Demonstration Video
[Add demonstration video URL here]
