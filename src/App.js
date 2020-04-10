import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import './App.css';
import Header from "./components/header";
import Footer from "./components/footer";
import Home from "./components/home";
import Feed from "./components/feed";
import ErrorBoundaries from "./components/error-boundaries";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header title="Popular Titles"/>
        <ErrorBoundaries>

          <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/series" exact component={Feed}/>
            <Route path="/movies" exact component={Feed}/>
            <Route component={ErrorBoundaries}/>
          </Switch>
        </ErrorBoundaries>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
