import React from 'react';
import { Link } from 'react-router-dom';

const StudentDashboard = () => {
    return (
        <div style={styles.body}>
            <header style={styles.header}>
                <h1 style={styles.headerTitle}>Student Dashboard</h1>
                <nav>
                    <ul style={styles.navList}>
                        <li style={styles.navItem}><Link to="/EditAssignment" style={styles.navLink}>Edit Assignment</Link></li>
                        <li style={styles.navItem}><Link to="/Grades" style={styles.navLink}>View Grades</Link></li>
                        <li style={styles.navItem}><Link to="/StudentFeedback" style={styles.navLink}>Feedback</Link></li>
                        <li style={styles.navItem}><Link to="/ViewFacultyFeedback" style={styles.navLink}>View Faculty Feedback</Link></li>
                        <li style={styles.navItem}><Link to="/" style={styles.navLink}>Logout</Link></li>
                    </ul>
                </nav>
            </header>

            <section style={styles.assignmentsContainer}>
                <h2 style={styles.assignmentsTitle}>Assignments Given by Faculty</h2>
                <table style={styles.table}>
                    <thead>
                        <tr>
                            <th style={styles.tableHeader}>Assignment Id</th>
                            <th style={styles.tableHeader}>Assignment Title</th>
                            <th style={styles.tableHeader}>Description</th>
                            <th style={styles.tableHeader}>Due Date</th>
                            <th style={styles.tableHeader}>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>001</td>
                            <td>JFSD</td>
                            <td>How to create a Spring Starter project.</td>
                            <td>2024-10-05</td>
                            <td><Link to="/SubmitAssignment"><button style={styles.button}>Submit Assignment</button></Link></td>
                        </tr>
                        <tr>
                            <td>002</td>
                            <td>MSWD</td>
                            <td>Write a short note on React.js, Node.js, MongoDB.</td>
                            <td>2024-10-12</td>
                            <td><Link to="/SubmitAssignment"><button style={styles.button}>Submit Assignment</button></Link></td>
                        </tr>
                        <tr>
                            <td>003</td>
                            <td>PFSD</td>
                            <td>How to build a simple web application using Flask and JavaScript.</td>
                            <td>2024-10-19</td>
                            <td><Link to="/SubmitAssignment"><button style={styles.button}>Submit Assignment</button></Link></td>
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

// Styles for StudentDashboard
const styles = {
    body: {
        fontFamily: 'Arial, sans-serif',
        backgroundColor: '#e9f1f4',
        color: '#333',
        lineHeight: '1.6',
        margin: 0,
        paddingBottom: '60px',
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
    assignmentsContainer: {
        backgroundColor: 'white',
        width: '90%',
        maxWidth: '800px',
        margin: '40px auto',
        padding: '20px',
        borderRadius: '8px',
        boxShadow: '0 0 15px rgba(0, 0, 0, 0.1)',
        textAlign: 'center',
    },
    assignmentsTitle: {
        color: '#4cafaa',
        marginBottom: '20px',
    },
    table: {
        width: '100%',
        borderCollapse: 'collapse',
        marginTop: '20px',
    },
    tableHeader: {
        padding: '10px',
        border: '1px solid #ccc',
        textAlign: 'left',
        backgroundColor: '#4caf9b',
        color: 'white',
    },
    button: {
        padding: '5px 10px',
        backgroundColor: '#4cadaf',
        color: 'white',
        border: 'none',
        borderRadius: '5px',
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

export default StudentDashboard;
