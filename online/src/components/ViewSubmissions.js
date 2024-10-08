import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const ViewSubmissions = () => {
    const [submissions, setSubmissions] = useState([]);
    const navigate = useNavigate();
    const location = useLocation();

    // Function to simulate fetching submission data (replace with actual API call in production)
    const loadSubmissions = () => {
        const params = new URLSearchParams(location.search);
        const assignmentId = params.get('assignmentId');

        // Example submissions (replace with data from your backend)
        const exampleSubmissions = [
            { id: 1, studentName: 'John Doe', fileName: 'assignment1_student1.pdf', fileUrl: 'uploads/assignment1_student1.pdf', assignmentId: '1' },
            { id: 2, studentName: 'Jane Smith', fileName: 'assignment1_student2.docx', fileUrl: 'uploads/assignment1_student2.docx', assignmentId: '1' },
            { id: 3, studentName: 'Tom Brown', fileName: 'assignment1_student3.txt', fileUrl: 'uploads/assignment1_student3.txt', assignmentId: '1' }
        ];

        setSubmissions(exampleSubmissions.filter(sub => sub.assignmentId === assignmentId));
    };

    useEffect(() => {
        loadSubmissions(); // Load submissions when the component mounts
    }, [location.search, loadSubmissions]); // Re-run when URL changes

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
            backgroundColor: '#4c96af',
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
        navButton: {
            backgroundColor: 'transparent',
            color: 'white',
            border: 'none',
            cursor: 'pointer',
        },
        submissionContainer: {
            padding: '20px',
        },
        submissionTitle: {
            marginBottom: '20px',
        },
        table: {
            width: '100%',
            borderCollapse: 'collapse',
        },
        tableHeader: {
            backgroundColor: '#4c96af',
            color: 'white',
            padding: '10px',
        },
        actionBtn: {
            marginRight: '10px',
            backgroundColor: '#4c96af',
            color: 'white',
            border: 'none',
            padding: '10px',
            cursor: 'pointer',
        },
        noSubmissions: {
            textAlign: 'center',
            color: '#777',
        },
        footer: {
            backgroundColor: '#4c96af',
            color: 'white',
            textAlign: 'center',
            padding: '10px',
            position: 'absolute',
            bottom: '0',
            width: '100%',
        },
    };

    return (
        <div style={styles.body}>
            <header style={styles.header}>
                <h1 style={styles.headerTitle}>View Student Submissions</h1>
                <nav>
                    <ul style={styles.navList}>
                        <li style={styles.navItem}>
                            <button onClick={() => navigate('/FacultyDashboard')} style={styles.navButton}>Back to Dashboard</button>
                        </li>
                    </ul>
                </nav>
            </header>

            <section style={styles.submissionContainer}>
                <h2 style={styles.submissionTitle}>Submissions for Assignment</h2>

                <table style={styles.table}>
                    <thead>
                        <tr>
                            <th style={styles.tableHeader}>Submission ID</th>
                            <th style={styles.tableHeader}>Student Name</th>
                            <th style={styles.tableHeader}>File Name</th>
                            <th style={styles.tableHeader}>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {submissions.length > 0 ? submissions.map(submission => (
                            <tr key={submission.id}>
                                <td>{submission.id}</td>
                                <td>{submission.studentName}</td>
                                <td>{submission.fileName}</td>
                                <td>
                                    <a href={submission.fileUrl} className="action-btn" style={styles.actionBtn} download>View File</a>
                                    <button onClick={() => navigate(`/evaluate-assignment?submissionId=${submission.id}`)} className="action-btn" style={styles.actionBtn}>Evaluate</button>
                                </td>
                            </tr>
                        )) : (
                            <tr>
                                <td colSpan="4" style={styles.noSubmissions}>No submissions found for this assignment.</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </section>

            <footer style={styles.footer}>
                <p>&copy; 2024 Online Assignment Submission & Grading System</p>
            </footer>
        </div>
    );
};

export default ViewSubmissions;
