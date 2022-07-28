import React from "react"
import ReactDOM from "react-dom"
import "../client/public/index.html"
import App from "./App"
import "./css/index.css"
import * as serviceWorker from "./serviceWorker"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById("root")
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
serviceWorker.register()
