import React from "react";

import "./components/styles/style.css";
import SideNav from "./components/SideNav";
import Adds from "./components/Adds";
import Feed from "./components/Feed/Feed";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <React.Fragment>
      <Navbar />
      <div className="container outside">
        <div className="row" style={{ marginTop: "14vh" }}>
          <SideNav />
          <Feed />
          <Adds />
        </div>
      </div>
    </React.Fragment>
  );
};

export default App;
