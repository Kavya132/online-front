import React from 'react';

const ViewStudentFeedback = () => {
    return (
        <div style={styles.body}>
            <header style={styles.header}>
                <h1 style={styles.headerTitle}>View Student Feedback</h1>
                <nav>
                    <ul style={styles.navList}>
                        <li style={styles.navItem}>
                            <a href="/FacultyDashboard" style={styles.navLink}>Back to Dashboard</a>
                        </li>
                    </ul>
                </nav>
            </header>

            <section style={styles.feedbackContainer}>
                <h2 style={styles.feedbackTitle}>Feedback from Students</h2>

                <div style={styles.feedback}>
                    <span style={styles.studentName}>John Doe:</span>
                    <p style={styles.feedbackText}>The assignments were well-structured and helped me understand the subject better. I appreciate the clear instructions.</p>
                </div>

                <div style={styles.feedback}>
                    <span style={styles.studentName}>Jane Smith:</span>
                    <p style={styles.feedbackText}>I found the assignments challenging but fair. The topics covered were relevant and engaging.</p>
                </div>

                <div style={styles.feedback}>
                    <span style={styles.studentName}>Emily Johnson:</span>
                    <p style={styles.feedbackText}>I think the assignment deadlines were a bit tight. It would be helpful to have more time for completion.</p>
                </div>

                <div style={styles.feedback}>
                    <span style={styles.studentName}>Michael Brown:</span>
                    <p style={styles.feedbackText}>Overall, the assignments were great! They really helped reinforce the material we learned in class.</p>
                </div>

                <div style={styles.feedback}>
                    <span style={styles.studentName}>Sophia Davis:</span>
                    <p style={styles.feedbackText}>I appreciated the variety in assignments. It made learning more enjoyable.</p>
                </div>
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
        lineHeight: '1.6',
        backgroundColor: '#f4f4f4',
        color: '#333',
        margin: 0,
        padding: 0,
    },
    header: {
        backgroundColor: '#4ca2af',
        padding: '20px',
        color: 'white',
        textAlign: 'center',
    },
    headerTitle: {
        margin: 0,
    },
    navList: {
        listStyle: 'none',
        padding: 0,
    },
    navItem: {
        display: 'inline',
        marginRight: '15px',
    },
    navLink: {
        color: 'white',
        textDecoration: 'none',
    },
    feedbackContainer: {
        backgroundColor: 'white',
        width: '90%',
        maxWidth: '800px',
        margin: '30px auto',
        padding: '20px',
        borderRadius: '8px',
        boxShadow: '0 0 15px rgba(0, 0, 0, 0.1)',
    },
    feedbackTitle: {
        marginBottom: '20px',
        textAlign: 'center',
        color: '#4cafa2',
    },
    feedback: {
        borderBottom: '1px solid #ccc',
        padding: '10px 0',
    },
    feedbackLast: {
        border: 'none', // To remove border from the last feedback
    },
    studentName: {
        fontWeight: 'bold',
        color: '#4ca2af',
    },
    feedbackText: {
        marginTop: '5px',
    },
    footer: {
        textAlign: 'center',
        padding: '10px',
        backgroundColor: '#333',
        color: 'white',
        position: 'fixed',
        bottom: 0,
        width: '100%',
    },
};

export default ViewStudentFeedback;
