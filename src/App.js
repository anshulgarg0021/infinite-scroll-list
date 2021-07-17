import './App.scss';
import { BrowserRouter as Router } from "react-router-dom";
import { Route, Switch } from "react-router-dom";
import { connect } from 'react-redux';

//components
import Dashboard from "./Components/Dashboard/Index"
import Login from "./Components/Login/Index"

//redux
import { Provider } from 'react-redux'
import configureStore from './store';

function App() {
  return (
    <div className="App">
       <Provider store={configureStore()}>
     <Router>
     <Route path="/" exact component={Login} />
     <Route path="/home" exact component={Dashboard} />
     </Router>
     </Provider>
    </div>
  );
}

export default App;
