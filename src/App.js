import './App.css';
import { Route, Switch, Redirect } from 'react-router-dom';
import Home from './components/pages/Home/HomePage';
import About from './components/pages/About/About';
import Contact from './components/pages/Contact/Contact';
import NotFound from './components/pages/NotFound/NotFound';
import Navbar from './components/Navbar/Navbar';


function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/about' exact component={About} />
        <Route path='/contact' exact component={Contact} />
        <Route path='/404' exact component={NotFound} />
        <Redirect to='/404' />
      </Switch>
    </>
  );
}

export default App;
