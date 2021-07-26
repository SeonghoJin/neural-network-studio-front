import './App.css';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import { Landing, Signup, Dashboard } from './routes/index';

function App() {
  return (
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/signup" component={Signup} />
        <Route path="/dashboard" component={Dashboard} />
      </Switch>
  );
}

export default App;
