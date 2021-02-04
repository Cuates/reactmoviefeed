import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './Views/Home';
import About from './Views/About';
import MovieExtract from './Views/MovieExtract';
import MovieAdd from './Views/MovieAdd';

function App() {
  return (
    <div className = "relative pb-10 min-h-screen bg-blue-900">
      <Router>
        <Header />
        <div className = "p-3">
        {/* <div> */}
          <Switch>
            <Route exact path="/moviefeed">
              <Home />
            </Route>
            <Route path="/moviefeed/about">
              <About />
            </Route>
            <Route path="/moviefeed/movieextract">
              <MovieExtract />
            </Route>
            <Route path="/moviefeed/movieadd">
              <MovieAdd />
            </Route>
          </Switch>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
