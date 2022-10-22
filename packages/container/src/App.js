import React, { useRef, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import { mount } from "marketing/Marketing";
import Header from '../components/header';


function MarketingApp() {
  const ref = useRef(null);

  useEffect(() => {
    mount(ref.current);
  }, []);

  return <div id="marketing-app" ref={ref} />;
}

// 
function App() {
  return (
    <BrowserRouter>
      <Header />
      <MarketingApp />
    </BrowserRouter>
  );
}

export default App;
