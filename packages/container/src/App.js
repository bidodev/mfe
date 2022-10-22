import React, { useRef, useEffect } from "react";
import {
  StylesProvider,
  createGenerateClassName,
} from "@material-ui/core/styles";
import { BrowserRouter } from "react-router-dom";
import { mount } from "marketing/Marketing";
import Header from "../components/header";

function MarketingApp() {
  const ref = useRef(null);

  useEffect(() => {
    mount(ref.current);
  }, []);

  return <div id="marketing-app" ref={ref} />;
}

const generateClassName = createGenerateClassName({
  productionPrefix: "container",
});

//
function App() {
  return (
    <BrowserRouter>
      <StylesProvider generateClassName={generateClassName}>
        <Header />
        <MarketingApp />
      </StylesProvider>
    </BrowserRouter>
  );
}

export default App;
