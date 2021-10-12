import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import AboutUs from './components/AboutUs/AboutUs';
import BestStudents from './components/BestStudents/BestStudents';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import News from './components/News/News';
import NotFound from './components/NotFound/NotFound';
import Services from './components/Services/Services';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/home">
            <Home />
          </Route>

          <Route path="/service">
            <Services />
          </Route>

          <Route path="/about">
            <AboutUs />
          </Route>

          <Route path="/news">
            <News />
          </Route>

          <Route path="/bestStudents">
            <BestStudents />
          </Route>

          <Route exact path="/">
            <Home />
          </Route>

          <Route exact path="*">
            <NotFound />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;