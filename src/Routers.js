import React from "react";
import { BrowserRouter as Router, Link,Route, Routes } from "react-router-dom";
import {About} from "./components/About";
import {Home} from "./components/Home";
import {Notes} from "./components/Notes";
export function Routers()
{
    return(
        <div>
            <h2>Simple routing Demo</h2>
            <Router>
                <ul>
                    <li>
                        <Link to="/">To Home</Link>
                     </li>
                     <li>
                        <Link to="/About">To About</Link>
                     </li>
                     <li>
                        <Link to="/Notes">To Notes</Link>
                     </li>
                </ul>
                <Routes>
                    <Route  path="/" element={<Home name="vamshi"/>}/>
                    <Route  path="/About" element={<About />}/>
                    <Route  path="/Notes" element={<Notes/>}/>
                </Routes>
            </Router>
        </div>
    )

}
export default Routers