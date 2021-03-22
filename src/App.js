import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Dashboard from './components/pages/Dashboard';
import page2 from './components/pages/page2';



function App() {
  return (
    <Router>
    
  <Switch>
      <Route path='/' exact component={Dashboard} />   
      <Route path='/page2' exact component={page2} />   
     </Switch>
   </Router>
  );
}

export default App;
