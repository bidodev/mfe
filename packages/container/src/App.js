import React, { useRef, useEffect } from "react";

import { mount } from "marketing/MarketingApp";

function MarketingApp() {
  const ref = useRef(null);

  useEffect(() => {
    mount(ref.current);
  }, []);

  return <div id="marketing-app" ref={ref} />;
}

// ! To remove this comment
function App() {
  return (
    <>
      <h1>Hello World</h1>
      <hr/>
      <MarketingApp />
    </>
  );
}

export default App;
