import { BrowserRouter, Route, Switch } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Home from './Home'

function App() {
  return (
    <div className="App">
      <Switch>
          <Route path="/" component={Home} exact /> 
          {/* <Route path="/buglist" component={Buglist} /> */}
      </Switch>
    </div>
  );
}

export default App;
