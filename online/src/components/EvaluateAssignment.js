import React, { useEffect, useState } from 'react';
import { useLocation, useHistory } from 'react-router-dom';

const EvaluateAssignment = () => {
    const location = useLocation();
    const history = useHistory();
    const [assignmentId, setAssignmentId] = useState('');
    const [submissionId, setSubmissionId] = useState('');
    const [grade, setGrade] = useState('');
    const [feedback, setFeedback] = useState('');

    useEffect(() => {
        const params = new URLSearchParams(location.search);
        const assignmentIdParam = params.get('assignmentId');
        const submissionIdParam = params.get('submissionId');

        if (assignmentIdParam && submissionIdParam) {
            setAssignmentId(assignmentIdParam);
            setSubmissionId(submissionIdParam);
        }
    }, [location]);

    const handleEvaluation = (event) => {
        event.preventDefault();

        // You can handle submission logic here (e.g., send data to your backend)

        alert('Evaluation submitted successfully!'); // Alert the user
        history.push('/FacultyDashboard'); // Redirect to faculty dashboard
    };

    return (
        <div>
            <header style={headerStyle}>
                <h1>Evaluate Assignment</h1>
                <nav>
                    <ul style={navStyle}>
                        <li><a href="/FacultyDashboard" style={linkStyle}>Back to Dashboard</a></li>
                    </ul>
                </nav>
            </header>

            <section style={containerStyle}>
                <div style={infoStyle}>
                    Assignment ID: {assignmentId} | Submission ID: {submissionId}
                </div>

                <h2 style={headingStyle}>Evaluate Student Assignment</h2>
                <form onSubmit={handleEvaluation} style={formStyle}>
                    <label htmlFor="grade" style={labelStyle}>Grade:</label>
                    <input
                        type="number"
                        id="grade"
                        placeholder="Enter grade (out of 100)"
                        required
                        min="0"
                        max="100"
                        value={grade}
                        onChange={(e) => setGrade(e.target.value)}
                        style={inputStyle}
                    />

                    <label htmlFor="feedback" style={labelStyle}>Remarks:</label>
                    <textarea
                        id="feedback"
                        placeholder="Remarks"
                        required
                        value={feedback}
                        onChange={(e) => setFeedback(e.target.value)}
                        style={textareaStyle}
                    ></textarea>

                    <button type="submit" style={buttonStyle}>Submit Evaluation</button>
                </form>
            </section>

            <footer style={footerStyle}>
                <p>&copy; 2024 Online Assignment Submission & Grading System</p>
            </footer>
        </div>
    );
};

// Styles
const headerStyle = {
    backgroundColor: '#4a90e2',
    padding: '15px',
    color: 'white',
    textAlign: 'center'
};

const navStyle = {
    listStyle: 'none',
    padding: 0,
    marginTop: '10px'
};

const linkStyle = {
    color: 'white',
    textDecoration: 'none',
    fontWeight: 'bold'
};

const containerStyle = {
    backgroundColor: 'white',
    width: '90%',
    maxWidth: '600px',
    margin: '40px auto',
    padding: '25px',
    borderRadius: '10px',
    boxShadow: '0 0 20px rgba(0, 0, 0, 0.1)'
};

const infoStyle = {
    backgroundColor: '#d9edf7',
    padding: '15px',
    borderRadius: '8px',
    marginBottom: '20px',
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#31708f'
};

const headingStyle = {
    marginBottom: '20px',
    textAlign: 'center',
    color: '#4a90e2'
};

const formStyle = {
    display: 'flex',
    flexDirection: 'column'
};

const labelStyle = {
    fontWeight: 'bold',
    marginBottom: '5px',
    color: '#333'
};

const inputStyle = {
    padding: '12px',
    marginBottom: '15px',
    border: '2px solid #4a90e2',
    borderRadius: '5px',
    width: '100%',
    fontSize: '16px'
};

const textareaStyle = {
    padding: '12px',
    marginBottom: '15px',
    border: '2px solid #4a90e2',
    borderRadius: '5px',
    width: '100%',
    fontSize: '16px',
    resize: 'vertical',
    height: '150px'
};

const buttonStyle = {
    padding: '12px',
    backgroundColor: '#5cb85c',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    fontSize: '18px',
    cursor: 'pointer'
};

const footerStyle = {
    textAlign: 'center',
    padding: '12px',
    backgroundColor: '#333',
    color: 'white',
    position: 'fixed',
    bottom: 0,
    width: '100%'
};

export default EvaluateAssignment;
