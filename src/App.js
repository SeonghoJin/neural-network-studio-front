import './App.css';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import { Landing, Signup } from './routes/index';

function App() {
  return (
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/signup" component={Signup} />
      </Switch>
  );
}

export default App;
