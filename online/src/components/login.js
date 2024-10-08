import React from 'react';

const Login = () => {
    const handleLogin = (event) => {
        event.preventDefault(); // Prevent form submission

        const role = document.getElementById("role").value;

        if (role === "student") {
            window.location.href = "StudentDashboard"; // Redirect to student dashboard
        } else if (role === "faculty") {
            window.location.href = "FacultyDashboard"; // Redirect to faculty dashboard
        } else {
            alert("Please select a valid role.");
        }
    };

    return (
        <div style={styles.body}>
            <header style={styles.header}>
                <h1 style={styles.headerTitle}>Login</h1>
            </header>

            <section style={styles.loginContainer}>
                <h2 style={styles.loginTitle}>Login to Your Account</h2>
                <form id="login-form" onSubmit={handleLogin}>
                    <label htmlFor="role" style={styles.label}>Select Role:</label>
                    <select id="role" name="role" required style={styles.select}>
                        <option value="" disabled selected>Select your role</option>
                        <option value="student">Student</option>
                        <option value="faculty">Faculty</option>
                    </select>
                    <input type="text" placeholder="Enter your username" required style={styles.input} />
                    <input type="password" placeholder="Enter your password" required style={styles.input} />
                    <button type="submit" style={styles.button}>Login</button>
                </form>
                <p style={styles.linkText}>
                    Don't have an account? <a href="index.js" style={styles.link}>SignUp</a>
                </p>
            </section>

            <footer style={styles.footer}>
                <p>&copy; 2024 Online Assignment Submission & Grading System</p>
            </footer>
        </div>
    );
};

// Styles
const styles = {
    body: {
        fontFamily: 'Arial, sans-serif',
        backgroundColor: '#e0f7fa',
        color: '#004d40',
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
    },
    header: {
        backgroundColor: '#00796b',
        padding: '20px',
        textAlign: 'center',
        color: 'white',
    },
    headerTitle: {
        margin: 0,
    },
    loginContainer: {
        backgroundColor: 'white',
        width: '90%',
        maxWidth: '400px',
        margin: '40px auto',
        padding: '20px',
        borderRadius: '8px',
        boxShadow: '0 0 15px rgba(0, 0, 0, 0.2)',
        textAlign: 'center',
    },
    loginTitle: {
        color: '#00796b',
        marginBottom: '20px',
    },
    label: {
        marginBottom: '5px',
        fontWeight: 'bold',
    },
    input: {
        padding: '10px',
        margin: '10px 0',
        fontSize: '16px',
        borderRadius: '5px',
        border: '1px solid #ccc',
    },
    select: {
        padding: '10px',
        margin: '10px 0',
        fontSize: '16px',
        borderRadius: '5px',
        border: '1px solid #ccc',
        backgroundColor: 'white',
    },
    button: {
        padding: '10px',
        margin: '10px 0',
        fontSize: '16px',
        borderRadius: '5px',
        border: 'none',
        backgroundColor: '#00796b',
        color: 'white',
        cursor: 'pointer',
    },
    linkText: {
        marginTop: '10px',
    },
    link: {
        color: '#00796b',
        textDecoration: 'none',
    },
    footer: {
        textAlign: 'center',
        backgroundColor: '#333',
        color: 'white',
        padding: '10px',
        marginTop: 'auto',
    },
};

export default Login;
