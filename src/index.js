import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.css";
import "antd/dist/antd.min.css";
import reportWebVitals from "./reportWebVitals";
import { sendToVercelAnalytics } from "./vitals";
import { ConfigProvider } from "antd";
import { BrowserRouter } from "react-router-dom";
import RoutesComponent from './utils/Routes'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ConfigProvider>
        <RoutesComponent />
      </ConfigProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals(sendToVercelAnalytics);
