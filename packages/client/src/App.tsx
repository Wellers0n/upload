
import React, { Suspense } from "react";
import Router from "./Router"

function App() {
  return (
    <Suspense fallback={"Loading..."}>
      <Router />
    </Suspense>
  );
}

export default App;
