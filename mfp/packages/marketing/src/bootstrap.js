import React from "react";
import ReactDOM from "react-dom";
import App from './App'

function mount(element) {
  ReactDOM.render(<App/>, element);
}

// App is running in isolation mode
if (process.env.NODE_ENV === "development") {
  const root = document.querySelector('[mode="isolation"]#marketing-root');
  if (root) {
    mount(root);
  }
}

// App is called by external container
export { mount };
