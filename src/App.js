import React from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Welcome from "./Components/Welcome/Welcome";
import Chat from "./Components/Chat/Chat";


function App(){
    return (
        <Router>
            <Route path="/" exact component={Welcome}/>
            <Route path="/chat" component={Chat}/>
        </Router>
    )
}

export default App;