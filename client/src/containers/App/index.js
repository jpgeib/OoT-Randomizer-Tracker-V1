import React, { Component } from "react";
import { Route } from "react-router-dom";
import Home from "../../pages/Home";

import { webStyle } from "../../styles";

class App extends Component {
  render() {
    return (
      <div>
        <Route exact path="/" render={() => <Home styles={webStyle} />} />
      </div>
    );
  }
}

export default App;
