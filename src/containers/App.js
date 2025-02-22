import React, { Fragment } from "react";
import { Route, Switch } from "react-router-dom";

import Todos from "../components/Task/Todos";
import AddNewTask from "../components/Task/AddNewTask";
import About from "../components/common/About";
import Nav from './../components/common/Nav';

const App = () => {
    return (

        <Fragment>
            <Nav/>
            <div className="d-flex justify-content-center container">
                <div className="col-md-8">
                    <div className="card-hover-shadow-2x mb-3 card">
                        <Switch>
                            <Route path="/" exact component={Todos} />
                            <Route path="/about" render={()=><About teachersName="امیر فدایی"/>} />
                            </Switch>
                        {/* <Todos />
                        <About /> */}
                    </div>
                </div>
            </div>
            <AddNewTask />
        </Fragment>
    );
};

export default App;