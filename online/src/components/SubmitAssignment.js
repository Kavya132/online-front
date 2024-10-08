import React from 'react';

const SubmitAssignment = () => {
    const handleSubmit = (event) => {
        event.preventDefault(); // Prevent the form from submitting the usual way

        // Show an alert message to the user
        alert("Assignment submitted successfully!");

        // Redirect to the student dashboard after clicking OK
        window.location.href = "/StudentDashboard";
    };

    return (
        <div style={styles.body}>
            <header style={styles.header}>
                <h1 style={styles.headerTitle}>Submit Assignment</h1>
                <nav>
                    <ul style={styles.navList}>
                        <li style={styles.navItem}>
                            <a href="/StudentDashboard" style={styles.navLink}>Back to Dashboard</a>
                        </li>
                    </ul>
                </nav>
            </header>

            <section style={styles.formContainer}>
                <form id="assignment-form" onSubmit={handleSubmit}>
                    <label htmlFor="assignment-file" style={styles.label}>Upload File:</label>
                    <input type="file" id="assignment-file" required style={styles.inputFile} />

                    <label htmlFor="remarks" style={styles.label}>Remarks:</label>
                    <input type="text" id="remarks" required style={styles.inputText} />

                    <button type="submit" style={styles.button}>Submit</button>
                </form>
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
        backgroundColor: '#f4f4f4',
        color: '#333',
        lineHeight: '1.6',
        margin: 0,
    },
    header: {
        backgroundColor: '#4caf9b',
        padding: '20px',
        textAlign: 'center',
        color: 'white',
    },
    headerTitle: {
        margin: 0,
    },
    navList: {
        listStyle: 'none',
        padding: 0,
        textAlign: 'center',
        margin: '10px 0',
    },
    navItem: {
        display: 'inline-block',
        marginRight: '20px',
    },
    navLink: {
        color: 'white',
        textDecoration: 'none',
        fontWeight: 'bold',
    },
    formContainer: {
        backgroundColor: 'white',
        width: '90%',
        maxWidth: '500px',
        margin: '40px auto',
        padding: '20px',
        borderRadius: '8px',
        boxShadow: '0 0 15px rgba(0, 0, 0, 0.1)',
        textAlign: 'center',
    },
    label: {
        marginBottom: '5px',
        fontWeight: 'bold',
    },
    inputFile: {
        padding: '10px',
        marginBottom: '15px',
        border: '1px solid #ccc',
        borderRadius: '5px',
        fontSize: '16px',
        width: '100%',
    },
    inputText: {
        padding: '10px',
        marginBottom: '15px',
        border: '1px solid #ccc',
        borderRadius: '5px',
        fontSize: '16px',
        width: '100%',
    },
    button: {
        padding: '10px',
        backgroundColor: '#4cadaf',
        color: 'white',
        border: 'none',
        borderRadius: '5px',
        fontSize: '18px',
        cursor: 'pointer',
        transition: 'background-color 0.3s',
    },
    buttonHover: {
        backgroundColor: '#45a095',
    },
    footer: {
        textAlign: 'center',
        backgroundColor: '#333',
        color: 'white',
        padding: '10px',
        position: 'fixed',
        bottom: '0',
        width: '100%',
    },
};

export default SubmitAssignment;
