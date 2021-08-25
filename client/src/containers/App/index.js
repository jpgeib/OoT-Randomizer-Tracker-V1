import React, { Component } from "react";
import { Route } from "react-router-dom";
import { Grid } from "semantic-ui-react";
import Home from "../../pages/Home";

class App extends Component {
  render() {
    return (
      <>
        <Grid>
          <Route exact path="/" render={() => <Home />} />
        </Grid>
      </>
    );
  }
}

export default App;
