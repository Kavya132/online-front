import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
// Ensure this component exists

const FacultyDashboard = () => {
    const [assignments, setAssignments] = useState([]);
    const navigate = useNavigate();

    // Example function to simulate fetching assignments from an API
    const loadAssignments = () => {
        // This could be an API call in production
        const exampleAssignments = [
            { id: '001', title: 'JFSD' },
            { id: '002', title: 'MSWD' },
            { id: '003', title: 'PFSD' },
        ];
        setAssignments(exampleAssignments);
    };

    const handleViewSubmissions = (assignmentId) => {
        // Redirect to view submission page with assignmentId as a query param
        navigate(`/ViewSubmissions?assignmentId=${assignmentId}`);
    };

    useEffect(() => {
        loadAssignments(); // Load assignments when the component mounts
    }, []);

    return (
        <div style={styles.body}>
            <header style={styles.header}>
                <h1 style={styles.headerTitle}>Faculty Dashboard</h1>
                <nav>
                    <ul style={styles.navList}>
                        <li style={styles.navItem}>
                            <Link to="/GiveAssignment" style={styles.navLink}>Give Assignment</Link>
                        </li>
                        <li style={styles.navItem}>
                            <Link to="/EditGivenAssignment" style={styles.navLink}>Edit Given Assignment</Link>
                        </li>
                        <li style={styles.navItem}>
                            <Link to="/ViewStudentFeedback" style={styles.navLink}>View Student Feedback</Link>
                        </li>
                        <li style={styles.navItem}>
                            <Link to="/FacultyFeedback" style={styles.navLink}>Feedback</Link>
                        </li>
                        <li style={styles.navItem}>
                            <Link to="/SubmissionCount" style={styles.navLink}>Submission Count</Link>
                        </li>
                        <li style={styles.navItem}>
                            <Link to="/index" style={styles.navLink}>Logout</Link>
                        </li>
                    </ul>
                </nav>
            </header>

            <section style={styles.dashboard}>
                <h2 style={styles.dashboardTitle}>Given Assignments</h2>
                <table style={styles.table}>
                    <thead>
                        <tr>
                            <th style={styles.tableHeader}>Assignment ID</th>
                            <th style={styles.tableHeader}>Assignment Title</th>
                            <th style={styles.tableHeader}>View Submissions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {assignments.map((assignment) => (
                            <tr key={assignment.id}>
                                <td style={styles.tableData}>{assignment.id}</td>
                                <td style={styles.tableData}>{assignment.title}</td>
                                <td style={styles.tableData}>
                                    <button 
                                        style={styles.viewButton} 
                                        onClick={() => handleViewSubmissions(assignment.id)}>
                                        View Submissions
                                    </button>
                                </td>
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
        lineHeight: 1.6,
        margin: 0,
        padding: 0,
    },
    header: {
        backgroundColor: '#4ca8af',
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
        fontSize: '16px',
    },
    dashboard: {
        backgroundColor: 'white',
        width: '90%',
        maxWidth: '800px',
        margin: '40px auto',
        padding: '20px',
        borderRadius: '8px',
        boxShadow: '0 0 15px rgba(0, 0, 0, 0.1)',
        textAlign: 'center',
    },
    dashboardTitle: {
        color: '#4cafaf',
        marginBottom: '20px',
    },
    table: {
        width: '100%',
        borderCollapse: 'collapse',
        marginBottom: '20px',
    },
    tableHeader: {
        border: '1px solid #ccc',
        padding: '10px',
        textAlign: 'center',
        backgroundColor: '#4ca8af',
        color: 'white',
    },
    tableData: {
        border: '1px solid #ccc',
        padding: '10px',
        textAlign: 'center',
        backgroundColor: '#f9f9f9',
    },
    viewButton: {
        backgroundColor: '#4ca8af',
        color: 'white',
        border: 'none',
        padding: '8px 12px',
        borderRadius: '4px',
        cursor: 'pointer',
        transition: 'background-color 0.3s',
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

export default FacultyDashboard;
