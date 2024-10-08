import React from 'react';

const FacultyFeedback = () => {
    const handleFeedback = (event) => {
        event.preventDefault(); // Prevent form submission

        const feedbackText = document.getElementById("feedback-text").value;
        if (feedbackText.trim() === "") {
            alert("Please enter your feedback.");
            return;
        }

        // Logic to save the feedback can be added here

        // Alert the user and redirect
        alert("Feedback submitted successfully!");
        window.location.href = "/FacultyDashboard"; // Redirect to faculty dashboard
    };

    return (
        <div style={styles.body}>
            <header style={styles.header}>
                <h1 style={styles.headerTitle}>Faculty Feedback</h1>
                <nav>
                    <ul style={styles.navList}>
                        <li style={styles.navItem}><a href="/FacultyDashboard" style={styles.navLink}>Back to Dashboard</a></li>
                    </ul>
                </nav>
            </header>

            <section style={styles.feedbackContainer}>
                <h2 style={styles.feedbackTitle}>Your Feedback on Student Assignments</h2>
                <form id="faculty-feedback-form" onSubmit={handleFeedback} style={styles.form}>
                    <textarea id="feedback-text" placeholder="Write your feedback here..." required style={styles.textarea}></textarea>
                    <button type="submit" style={styles.button}>Submit Feedback</button>
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
        backgroundColor: '#e0f7fa',
        color: '#333',
        lineHeight: 1.6,
        margin: 0,
        padding: 0
    },
    header: {
        backgroundColor: '#00897b',
        padding: '20px',
        textAlign: 'center',
        color: 'white'
    },
    headerTitle: {
        margin: 0
    },
    navList: {
        listStyle: 'none',
        padding: 0,
        textAlign: 'center',
        margin: '10px 0'
    },
    navItem: {
        display: 'inline-block',
        marginRight: '20px'
    },
    navLink: {
        color: 'white',
        textDecoration: 'none',
        fontWeight: 'bold',
        fontSize: '16px'
    },
    feedbackContainer: {
        backgroundColor: 'white',
        width: '90%',
        maxWidth: '600px',
        margin: '40px auto',
        padding: '20px',
        borderRadius: '8px',
        boxShadow: '0 0 15px rgba(0, 0, 0, 0.1)',
        textAlign: 'center'
    },
    feedbackTitle: {
        color: '#00796b',
        marginBottom: '20px'
    },
    form: {
        display: 'flex',
        flexDirection: 'column'
    },
    textarea: {
        padding: '15px',
        marginBottom: '20px',
        border: '1px solid #ccc',
        borderRadius: '5px',
        fontSize: '16px',
        width: '100%',
        height: '150px',
        resize: 'vertical'
    },
    button: {
        padding: '10px',
        backgroundColor: '#00897b',
        color: 'white',
        border: 'none',
        borderRadius: '5px',
        fontSize: '18px',
        cursor: 'pointer',
        transition: 'background-color 0.3s'
    },
    buttonHover: {
        backgroundColor: '#00796b'
    },
    footer: {
        textAlign: 'center',
        backgroundColor: '#333',
        color: 'white',
        padding: '10px',
        position: 'fixed',
        bottom: 0,
        width: '100%'
    }
};

export default FacultyFeedback;
