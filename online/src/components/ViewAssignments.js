import React, { useEffect, useState } from 'react';

const ViewAssignments = () => {
    const [assignments, setAssignments] = useState([]);

    // Function to simulate fetching assignment data (replace with actual API call in production)
    const loadAssignments = () => {
        // Example assignments (replace with data from your backend)
        const exampleAssignments = [
            { id: 1, title: 'Assignment 1', description: 'Description of Assignment 1', dueDate: '2024-10-05' },
            { id: 2, title: 'Assignment 2', description: 'Description of Assignment 2', dueDate: '2024-10-12' },
            { id: 3, title: 'Assignment 3', description: 'Description of Assignment 3', dueDate: '2024-10-19' }
        ];

        setAssignments(exampleAssignments);
    };

    useEffect(() => {
        loadAssignments(); // Load assignments when the component mounts
    }, []);

    return (
        <div style={styles.body}>
            <header style={styles.header}>
                <h1 style={styles.headerTitle}>View Assignments</h1>
                <nav>
                    <ul style={styles.navList}>
                        <li style={styles.navItem}>
                            <a href="StudentDashboard" style={styles.navLink}>Back to Dashboard</a>
                        </li>
                    </ul>
                </nav>
            </header>

            <section style={styles.assignmentsContainer}>
                <h2 style={styles.assignmentsTitle}>Assignments Given by Faculty</h2>
                <table style={styles.table}>
                    <thead>
                        <tr>
                            <th style={styles.tableHeader}>Assignment Title</th>
                            <th style={styles.tableHeader}>Description</th>
                            <th style={styles.tableHeader}>Due Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {assignments.map(assignment => (
                            <tr key={assignment.id}>
                                <td style={styles.tableCell}>{assignment.title}</td>
                                <td style={styles.tableCell}>{assignment.description}</td>
                                <td style={styles.tableCell}>{assignment.dueDate}</td>
                            </tr>
                        ))}
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
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
    },
    header: {
        backgroundColor: '#2196F3',
        padding: '20px',
        textAlign: 'center',
        color: 'white',
    },
    headerTitle: {
        margin: 0,
    },
    navList: {
        listStyle: 'none',
        display: 'flex',
        justifyContent: 'center',
        padding: '10px 0',
        backgroundColor: '#1976D2',
    },
    navItem: {
        margin: '0 10px',
    },
    navLink: {
        color: 'white',
        textDecoration: 'none',
        fontWeight: 'bold',
        padding: '10px 15px',
        borderRadius: '5px',
        transition: 'background-color 0.3s ease',
    },
    assignmentsContainer: {
        padding: '20px',
        flexGrow: 1,
        maxWidth: '800px',
        margin: '0 auto',
        backgroundColor: 'white',
        borderRadius: '8px',
        boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
    },
    assignmentsTitle: {
        marginBottom: '20px',
    },
    table: {
        width: '100%',
        borderCollapse: 'collapse',
        marginTop: '10px',
    },
    tableHeader: {
        border: '1px solid #ccc',
        padding: '10px',
        textAlign: 'left',
        backgroundColor: '#f2f2f2',
    },
    tableCell: {
        border: '1px solid #ccc',
        padding: '10px',
        textAlign: 'left',
    },
    footer: {
        backgroundColor: '#333',
        color: 'white',
        textAlign: 'center',
        padding: '10px',
    },
};

export default ViewAssignments;
