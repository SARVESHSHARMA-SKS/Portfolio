import React from "react";
import { Route } from "react-router-dom";
import { Navbar } from "./Navbar"
import About from "./About"

function Routes() {
    return (
        <div>
            <Navbar />
            <Route path="/about">
              <About/>
            </Route>
        </div>
    );
}
export {Routes};