import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import StudentDashboard from './components/StudentDashboard';
import EditAssignment from './components/EditAssignment';
import ViewAssignment from './components/ViewAssignment';
import Grades from './components/Grades';
import StudentFeedback from './components/StudentFeedback';
import ViewFacultyFeedback from './components/ViewFacultyFeedback';

const App = () => {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={StudentDashboard} />
                <Route path="/EditAssignment" component={EditAssignment} />
                <Route path="/ViewAssignment" component={ViewAssignment} />
                <Route path="/Grades" component={Grades} />
                <Route path="/StudentFeedback" component={StudentFeedback} />
                <Route path="/ViewFacultyFeedback" component={ViewFacultyFeedback} />
            </Switch>
        </Router>
    );
};

export default App;
