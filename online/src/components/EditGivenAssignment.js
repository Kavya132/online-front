import React, { useState, useEffect } from 'react';

const EditGivenAssignment = () => {
    const [assignmentId, setAssignmentId] = useState('');
    const [description, setDescription] = useState('');
    const [dueDate, setDueDate] = useState('');

    useEffect(() => {
        // Optional: Prefill with existing data
        setAssignmentId('001');
        setDescription('This is an example assignment description.');
        setDueDate('2024-12-01');
    }, []);

    const handleEditAssignment = (event) => {
        event.preventDefault();
        // Logic to handle the form submission
        alert('Assignment updated successfully!');
        window.location.href = '/FacultyDashboard';
    };

    return (
        <div style={styles.container}>
            <header style={styles.header}>
                <h1 style={styles.headerTitle}>Edit Given Assignment</h1>
                <nav style={styles.nav}>
                    <ul style={styles.navList}>
                        <li style={styles.navListItem}>
                            <a href="/FacultyDashboard" style={styles.navLink}>Back to Dashboard</a>
                        </li>
                    </ul>
                </nav>
            </header>

            <section style={styles.formContainer}>
                <h2 style={styles.sectionTitle}>Edit Assignment</h2>
                <form onSubmit={handleEditAssignment} style={styles.form}>
                    <label htmlFor="assignment-id" style={styles.label}>Assignment ID:</label>
                    <select
                        id="assignment-id"
                        value={assignmentId}
                        onChange={(e) => setAssignmentId(e.target.value)}
                        style={styles.select}
                        required
                    >
                        <option value="001">001</option>
                        <option value="002">002</option>
                        <option value="003">003</option>
                    </select>

                    <label htmlFor="assignment-description" style={styles.label}>Description:</label>
                    <textarea
                        id="assignment-description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        style={styles.textarea}
                        required
                    />

                    <label htmlFor="due-date" style={styles.label}>Due Date:</label>
                    <input
                        type="date"
                        id="due-date"
                        value={dueDate}
                        onChange={(e) => setDueDate(e.target.value)}
                        style={styles.input}
                        required
                    />

                    <button type="submit" style={styles.button}>Update Assignment</button>
                </form>
            </section>

            <footer style={styles.footer}>
                <p>&copy; 2024 Online Assignment Submission & Grading System</p>
            </footer>
        </div>
    );
};

// CSS-in-JS styles
const styles = {
    container: {
        fontFamily: 'Arial, sans-serif',
        backgroundColor: '#f5f5f5',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
    },
    header: {
        backgroundColor: '#5e35b1',
        padding: '20px',
        textAlign: 'center',
        color: 'white',
    },
    headerTitle: {
        margin: 0,
        fontSize: '24px',
    },
    nav: {
        marginTop: '10px',
    },
    navList: {
        listStyle: 'none',
        padding: 0,
        textAlign: 'center',
    },
    navListItem: {
        display: 'inline-block',
        marginRight: '15px',
    },
    navLink: {
        color: 'white',
        textDecoration: 'none',
        fontWeight: 'bold',
    },
    formContainer: {
        backgroundColor: 'white',
        width: '85%',
        maxWidth: '600px',
        margin: '40px auto',
        padding: '30px',
        borderRadius: '12px',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
    },
    sectionTitle: {
        color: '#5e35b1',
        marginBottom: '20px',
        fontSize: '22px',
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
    },
    label: {
        marginBottom: '8px',
        fontWeight: 'bold',
        fontSize: '16px',
    },
    select: {
        padding: '12px',
        marginBottom: '15px',
        border: '1px solid #ccc',
        borderRadius: '8px',
        fontSize: '16px',
    },
    textarea: {
        padding: '12px',
        marginBottom: '15px',
        border: '1px solid #ccc',
        borderRadius: '8px',
        fontSize: '16px',
        height: '100px',
    },
    input: {
        padding: '12px',
        marginBottom: '15px',
        border: '1px solid #ccc',
        borderRadius: '8px',
        fontSize: '16px',
    },
    button: {
        padding: '12px',
        backgroundColor: '#5e35b1',
        color: 'white',
        border: 'none',
        borderRadius: '8px',
        fontSize: '18px',
        cursor: 'pointer',
        transition: 'background-color 0.3s ease',
    },
    buttonHover: {
        backgroundColor: '#4527a0',
    },
    footer: {
        marginTop: 'auto',
        backgroundColor: '#333',
        color: 'white',
        textAlign: 'center',
        padding: '10px',
    },
};

export default EditGivenAssignment;
