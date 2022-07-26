import { Auth0Provider } from "@auth0/auth0-react";
import React from "react";
import ReactDom from "react-dom/client";
import App from "./App";
import "./main.css";

ReactDom.createRoot(document.getElementById("root")).render(<Auth0Provider
    domain="dev-rbw3odnb.us.auth0.com"
    clientId="xiRasMtG6XIaPRbd7MLPq1mOPfPtb6h1"
    redirectUri={window.location.origin}
  ><App /></Auth0Provider>);
