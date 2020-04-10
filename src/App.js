import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import './App.css';
import Header from "./components/header";
import Footer from "./components/footer";
import Home from "./components/home";
import Series from "./components/series";
import ErrorBoundaries from "./components/error-boundaries";

function App() {
  return (
    <div className="App">
      <Header title="Popular Titles"/>
      <ErrorBoundaries>
        <BrowserRouter>
          <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/series" exact component={Series}/>
            <Route path="/movies" exact component={Series}/>
            <Route component={ErrorBoundaries}/>
          </Switch>
        </BrowserRouter>
      </ErrorBoundaries>
      <Footer/>
    </div>
  );
}

export default App;
