import React from 'react';
import './App.css';
import Home from "./pages/Home";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import SearchPage from "./pages/SearchPage";

function App() {
    return (
        <div className="dark:text-gray-100 dark:bg-gray-900 transition h-screen">
            <Router>
                <Switch>
                    <Route path="/search">
                        <SearchPage/>
                    </Route>
                    <Route path="/">
                        <Home/>
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
