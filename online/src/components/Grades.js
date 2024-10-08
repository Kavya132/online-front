import React from 'react';

const Grades = () => {
    return (
        <div style={styles.body}>
            <header style={styles.header}>
                <h1 style={styles.headerTitle}>Grades</h1>
                <nav>
                    <ul style={styles.navList}>
                        <li style={styles.navItem}>
                            <a href="/StudentDashboard" style={styles.navLink}>Back to Dashboard</a>
                        </li>
                    </ul>
                </nav>
            </header>

            <section style={styles.gradesContainer}>
                <h2 style={styles.gradesTitle}>Your Grades</h2>
                <table style={styles.table}>
                    <thead>
                        <tr>
                            <th style={styles.tableHeader}>Assignment ID</th>
                            <th style={styles.tableHeader}>Grade</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td style={styles.tableCell}>001</td>
                            <td style={styles.tableCell}>O</td>
                        </tr>
                        <tr>
                            <td style={styles.tableCell}>002</td>
                            <td style={styles.tableCell}>A+</td>
                        </tr>
                        <tr>
                            <td style={styles.tableCell}>003</td>
                            <td style={styles.tableCell}>A</td>
                        </tr>
                        {/* Add more rows as needed */}
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
        backgroundColor: '#f4f4f4',
        color: '#333',
        lineHeight: 1.6,
        margin: 0,
        padding: 0,
    },
    header: {
        backgroundColor: '#4cafad',
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
        marginTop: '10px',
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
    gradesContainer: {
        backgroundColor: 'white',
        width: '90%',
        maxWidth: '800px',
        margin: '40px auto',
        padding: '20px',
        borderRadius: '8px',
        boxShadow: '0 0 15px rgba(0, 0, 0, 0.1)',
    },
    gradesTitle: {
        color: '#4cadaf',
        marginBottom: '20px',
        textAlign: 'center',
    },
    table: {
        width: '100%',
        borderCollapse: 'collapse',
        marginBottom: '20px',
    },
    tableHeader: {
        padding: '12px',
        textAlign: 'left',
        borderBottom: '1px solid #ddd',
        backgroundColor: '#f4f4f4',
        fontWeight: 'bold',
    },
    tableCell: {
        padding: '12px',
        textAlign: 'left',
        borderBottom: '1px solid #ddd',
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

export default Grades;
