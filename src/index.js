import React from "react";
import { ThemeProvider } from "./context/ThemeContext";
import ReactDOM from "react-dom";
import App from "./App";

import { datadogRum } from "@datadog/browser-rum";

datadogRum.init({
    applicationId: "45017602-17b9-4f91-bba2-c186a1225e5b",
    clientToken: "pub1bf993aa27dbae22507c5dd773c4c6bf",
    site: "datadoghq.com",
    service: "portfolio",
    env: "prod",
    // Specify a version number to identify the deployed version of your application in Datadog
    // version: '1.0.0',
    sampleRate: 100,
    trackInteractions: true,
});

ReactDOM.render(
    <React.StrictMode>
        <ThemeProvider>
            <App />
        </ThemeProvider>
    </React.StrictMode>,
    document.getElementById("root")
);
