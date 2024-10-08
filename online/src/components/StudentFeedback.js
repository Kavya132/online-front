import React from 'react';

const StudentFeedback = () => {
    const handleFeedbackSubmit = (event) => {
        event.preventDefault(); // Prevent the form from submitting the default way

        // Show an alert to the user
        alert("Thank you for your feedback!");

        // Redirect to the student dashboard after clicking "OK" on the alert
        window.location.href = "/StudentDashboard";
    };

    return (
        <div style={styles.body}>
            <header style={styles.header}>
                <h1 style={styles.headerTitle}>Student Feedback</h1>
                <nav>
                    <ul style={styles.navList}>
                        <li style={styles.navItem}><a href="/StudentDashboard" style={styles.navLink}>Back to Dashboard</a></li>
                    </ul>
                </nav>
            </header>

            <section style={styles.feedbackContainer}>
                <h2 style={styles.feedbackTitle}>Your Feedback</h2>
                <form id="student-feedback-form" onSubmit={handleFeedbackSubmit}>
                    <textarea 
                        style={styles.textarea} 
                        placeholder="Write your feedback here..." 
                        required 
                    ></textarea>
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
        backgroundColor: '#e9f1f4',
        color: '#333',
        lineHeight: '1.6',
        paddingBottom: '60px', // Ensure footer doesn't overlap content
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
    feedbackContainer: {
        backgroundColor: 'white',
        width: '90%',
        maxWidth: '600px',
        margin: '40px auto',
        padding: '20px',
        borderRadius: '8px',
        boxShadow: '0 0 15px rgba(0, 0, 0, 0.1)',
        textAlign: 'center',
    },
    feedbackTitle: {
        color: '#4cafaa',
        marginBottom: '20px',
    },
    textarea: {
        width: '100%',
        height: '150px',
        padding: '10px',
        marginBottom: '15px',
        border: '1px solid #ccc',
        borderRadius: '5px',
        fontSize: '16px',
        resize: 'none', // Prevent resizing
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

export default StudentFeedback;
