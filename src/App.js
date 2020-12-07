import React from "react";
import Student from "./student-ad"
import School from "./school-ad"
import Page1 from "./page"
import io from "socket.io-client";
import {BrowserRouter as Router,Route,Link} from "react-router-dom";
const socket=io("http://localhost:4000");
function App() {
  return (
    <Router>
    <div>
       <Route path="/" component={Page1}/>
       <Route path="/student-admin" component={Student}/>
       <Route path="/school-admin"  component={School}/>
    </div>
    </Router>
  );
}

export default App;
