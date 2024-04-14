import React from "react";
import { render } from "react-dom";
import GlobalState from "./containers/GlobalState";
import { BrowserRouter } from "react-router-dom";

import App from "./containers/App";

render(<GlobalState>

<BrowserRouter>
<App />
</BrowserRouter>
</GlobalState>
, document.getElementById("root"));