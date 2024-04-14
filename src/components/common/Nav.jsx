import React from 'react'
import {Link,withRouter,NavLink} from "react-router-dom"
const Nav = (props) => {
    console.log(props);
    return (
        <div className="m-3">
            <ul className="nav nav-pills justify-content-center">
                <li className="nav-item">
                    <NavLink activeStyle={{color:"red"}} to="/" className="nav-link" exact>
                        کارهای روزمره
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink activeStyle={{color:"red"}} to='/about' className="nav-link">
                        درباره ی سازنده
                    </NavLink>
                </li>
            </ul>
        </div>
    );
}

export default withRouter(Nav);