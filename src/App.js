import './App.css';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import {Landing, Signup, Dashboard, NewProject, LoginPage, Profile} from './routes/index';

function App() {
  return (
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/signup" component={Signup} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/newProject" component={NewProject} />
        <Route path="/login" component={LoginPage} />
        <Route path="/profile" component={Profile} />
      </Switch>
  );
}

export default App;
