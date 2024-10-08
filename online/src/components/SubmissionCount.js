import React from 'react';

const SubmissionCount = () => {
    return (
        <div style={styles.body}>
            <header style={styles.header}>
                <h1 style={styles.headerTitle}>Submission Count</h1>
                <nav>
                    <ul style={styles.navList}>
                        <li style={styles.navItem}><a href="/FacultyDashboard" style={styles.navLink}>Back to Dashboard</a></li>
                    </ul>
                </nav>
            </header>

            <section style={styles.submissionCountContainer}>
                <h2 style={styles.title}>Submission Summary</h2>
                <table style={styles.table}>
                    <thead>
                        <tr>
                            <th style={styles.tableHeader}>Assignment ID</th>
                            <th style={styles.tableHeader}>Number of Students Submitted</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td style={styles.tableCell}>001</td>
                            <td style={styles.tableCell}>5</td>
                        </tr>
                        <tr>
                            <td style={styles.tableCell}>002</td>
                            <td style={styles.tableCell}>3</td>
                        </tr>
                        <tr>
                            <td style={styles.tableCell}>003</td>
                            <td style={styles.tableCell}>2</td>
                        </tr>
                        <tr>
                            <td style={styles.tableCell}>004</td>
                            <td style={styles.tableCell}>0</td>
                        </tr>
                        <tr>
                            <td style={styles.tableCell}>005</td>
                            <td style={styles.tableCell}>4</td>
                        </tr>
                    </tbody>
                </table>
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
    submissionCountContainer: {
        backgroundColor: 'white',
        width: '90%',
        maxWidth: '800px',
        margin: '30px auto',
        padding: '20px',
        borderRadius: '8px',
        boxShadow: '0 0 15px rgba(0, 0, 0, 0.1)',
    },
    title: {
        marginBottom: '20px',
        textAlign: 'center',
        color: '#4cafa2',
    },
    table: {
        width: '100%',
        borderCollapse: 'collapse',
        marginTop: '20px',
    },
    tableHeader: {
        border: '1px solid #ccc',
        padding: '10px',
        textAlign: 'center',
        backgroundColor: '#4ca2af',
        color: 'white',
    },
    tableCell: {
        border: '1px solid #ccc',
        padding: '10px',
        textAlign: 'center',
    },
    footer: {
        textAlign: 'center',
        padding: '10px',
        backgroundColor: '#333',
        color: 'white',
        position: 'fixed',
        bottom: '0',
        width: '100%',
    },
};

export default SubmissionCount;
