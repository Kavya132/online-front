import React, { useEffect, useState } from 'react';

const EditAssignment = () => {
    const [assignmentId, setAssignmentId] = useState("123");
    const [description, setDescription] = useState("This is my original assignment description.");
    const [dueDate, setDueDate] = useState("2024-12-01");
    const [submittedFile, setSubmittedFile] = useState(null);

    useEffect(() => {
        // Pre-fill the form with existing data
        setAssignmentId("001");
        setDescription("This is my original assignment description.");
        setDueDate("2024-12-01");
    }, []);

    const handleEditAssignment = (event) => {
        event.preventDefault();
        
        if (!submittedFile) {
            alert("Please upload the assignment file.");
            return;
        }

        const formData = new FormData();
        formData.append("assignmentId", assignmentId);
        formData.append("description", description);
        formData.append("dueDate", dueDate);
        formData.append("submittedFile", submittedFile);

        // Call your API or backend to handle the assignment resubmission
        // Example:
        // fetch('/api/resubmit-assignment', {
        //     method: 'POST',
        //     body: formData,
        // })
        // .then(response => response.json())
        // .then(data => alert("Assignment resubmitted successfully!"))
        // .catch(error => console.error('Error:', error));

        alert("Assignment resubmitted successfully!");
        window.location.href = "/StudentDashboard";
    };

    return (
        <div style={styles.container}>
            <header style={styles.header}>
                <h1 style={styles.title}>Resubmit Assignment</h1>
                <nav style={styles.nav}>
                    <ul style={styles.navList}>
                        <li style={styles.navItem}>
                            <a href="/StudentDashboard" style={styles.navLink}>Back to Dashboard</a>
                        </li>
                    </ul>
                </nav>
            </header>

            <section style={styles.formContainer}>
                <h2 style={styles.sectionTitle}>Resubmit Assignment</h2>
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

                   

                    <label htmlFor="submitted-file" style={styles.label}>Upload Updated Assignment:</label>
                    <input
                        type="file"
                        id="submitted-file"
                        onChange={(e) => setSubmittedFile(e.target.files[0])}
                        style={styles.fileInput}
                        required
                    />

                    <button type="submit" style={styles.button}>Resubmit Assignment</button>
                </form>
            </section>

            <footer style={styles.footer}>
                <p>&copy; 2024 Online Assignment Submission & Grading System</p>
            </footer>
        </div>
    );
};

// Internal CSS styles (continuation)
const styles = {
    container: {
        fontFamily: 'Arial, sans-serif',
        backgroundColor: '#f9f9f9',
        color: '#333',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
    },
    header: {
        backgroundColor: '#6a1b9a',
        padding: '20px',
        textAlign: 'center',
        color: 'white',
    },
    title: {
        margin: '0',
    },
    nav: {
        marginTop: '10px',
    },
    navList: {
        listStyle: 'none',
        padding: '0',
        textAlign: 'center',
    },
    navItem: {
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
        width: '80%',
        maxWidth: '600px',
        margin: '30px auto',
        padding: '20px',
        borderRadius: '10px',
        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
    },
    sectionTitle: {
        color: '#6a1b9a',
        marginBottom: '20px',
    },
    label: {
        display: 'block',
        marginBottom: '5px',
        fontWeight: 'bold',
    },
    input: {
        padding: '10px',
        marginBottom: '15px',
        border: '1px solid #ddd',
        borderRadius: '5px',
        width: '100%',
    },
    textarea: {
        padding: '10px',
        marginBottom: '15px',
        border: '1px solid #ddd',
        borderRadius: '5px',
        width: '100%',
        height: '100px',
    },
    select: {
        padding: '10px',
        marginBottom: '15px',
        border: '1px solid #ddd',
        borderRadius: '5px',
        width: '100%',
    },
    fileInput: {
        marginBottom: '15px',
        padding: '10px',
        border: '1px solid #ddd',
        borderRadius: '5px',
        width: '100%',
    },
    button: {
        padding: '10px 20px',
        backgroundColor: '#6a1b9a',
        color: 'white',
        border: 'none',
        borderRadius: '5px',
        fontSize: '16px',
        cursor: 'pointer',
        transition: 'background-color 0.3s',
    },
    buttonHover: {
        backgroundColor: '#5a1590',
    },
    footer: {
        marginTop: 'auto',
        backgroundColor: '#333',
        color: 'white',
        textAlign: 'center',
        padding: '10px',
    },
};

export default EditAssignment;

