import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import SignUpPage from './components/signUpPage'; // Import SignUpPage component
import TaskListComponent from './components/TaskListComponent';

import './assets/css/App.css'; 

function App() {
  return (
    <div className="form-container">
      <h1>Task Manager</h1>
      <Router>
        <Switch>
          <Route exact path="/">
            <Redirect to="/signUpPage" />
          </Route>
          <Route path="/signUpPage" component={SignUpPage} />
          <Route path="/tasks" component={TaskListComponent} />
         
        </Switch>
      </Router>
    </div>
  );
}

export default App;
