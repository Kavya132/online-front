import React from 'react';

const ViewFacultyFeedback = () => {
    return (
        <div style={styles.body}>
            <header style={styles.header}>
                <h1 style={styles.headerTitle}>View Faculty Feedback</h1>
                <nav>
                    <ul style={styles.navList}>
                        <li style={styles.navItem}>
                            <a href="/StudentDashboard" style={styles.navLink}>Back to Dashboard</a>
                        </li>
                    </ul>
                </nav>
            </header>

            <section style={styles.feedbackContainer}>
                <h2 style={styles.feedbackTitle}>Your Faculty Feedback</h2>

                <div style={styles.feedback}>
                    <strong style={styles.feedbackFaculty}>Faculty: Dr. Smith</strong>
                    <strong style={styles.feedbackId}>Assignment Id: 003</strong>
                    <p style={styles.feedbackText}>Great job on the last assignment! Your understanding of the material is evident. Keep up the good work!</p>
                </div>

                <div style={styles.feedback}>
                    <strong style={styles.feedbackFaculty}>Faculty: Prof. Johnson</strong>
                    <strong style={styles.feedbackId}>Assignment Id: 002</strong>
                    <p style={styles.feedbackText}>I appreciate your effort in participating in class discussions. Your insights are valuable!</p>
                </div>

                <div style={styles.feedback}>
                    <strong style={styles.feedbackFaculty}>Faculty: Ms. Lee</strong>
                    <strong style={styles.feedbackId}>Assignment Id: 001</strong>
                    <p style={styles.feedbackText}>Good progress on your projects! However, please pay attention to the details in your reports.</p>
                </div>

                {/* Add more feedback display logic as needed */}
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
        textAlign: 'left',
    },
    feedbackTitle: {
        color: '#4cafaa',
        marginBottom: '20px',
    },
    feedback: {
        border: '1px solid #ccc',
        borderRadius: '5px',
        padding: '15px',
        marginBottom: '15px',
        backgroundColor: '#f9f9f9',
    },
    feedbackFaculty: {
        display: 'block',
        marginBottom: '5px',
    },
    feedbackId: {
        display: 'block',
        marginBottom: '5px',
    },
    feedbackText: {
        margin: 0,
    },
    footer: {
        textAlign: 'center',
        backgroundColor: '#333',
        color: 'white',
        padding: '10px',
        position: 'fixed',
        bottom: 0,
        width: '100%',
    },
};

export default ViewFacultyFeedback;
