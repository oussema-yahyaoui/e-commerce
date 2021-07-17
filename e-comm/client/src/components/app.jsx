import React from "react";
import List from "./Listeproduct.jsx"
import Create from "./Createproduct.jsx"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

export default function App() {
    return (
        <Router>
            <div>
                <nav>
                    <ul>

                        <li>
                            <Link to="/home">Home</Link>
                        </li>
                        <li>
                            <Link to="/add">Add product</Link>
                        </li>
                    </ul>
                </nav>

                {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
                <Switch>
                    <Route path="/home">
                        <List />
                    </Route>
                    <Route path="/add">
                        <Create />
                    </Route>

                </Switch>
            </div>
        </Router>
    );
}

