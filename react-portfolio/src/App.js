import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from './containers/About/About';
import Projects from './containers/Projects/Projects';
import Resume from './containers/Resume/Resume';
import Contact from './containers/Contact/Contact';
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Router>
        <Switch>
          
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/resume" component={Resume} />
          <Route exact path="/contact" component={Contact} />
          <Route path="/" component={About} />
        </Switch>
      </Router>
      <Footer></Footer>
    </div>
  );
}

export default App;
