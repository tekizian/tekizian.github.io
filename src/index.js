import React from "react";
import ReactDOM from "react-dom/client";
import { Auth0Provider } from "@auth0/auth0-react";

import "./index.css";
import App from "./App";
import config from "./utils/config.js";

const DOMAIN = config.get("AUTH0_DOMAIN");
const CLIENT_ID = config.get("AUTH0_CLIENT_ID");
const AUDIENCE = config.get("AUTH0_AUDIENCE");

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Auth0Provider
      domain={DOMAIN}
      clientId={CLIENT_ID}
      authorizationParams={{
        redirect_uri: window.location.origin,
        audience: AUDIENCE,
      }}
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>
);
