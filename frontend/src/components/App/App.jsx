import React from "react";
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";

import AppWrapper from "./App.js";
import Overview from "../Overview/OverviewContainer";
import Modals from "../Modals/ModalsContainer";
import AddTaskButton from "../AddTaskButton/AddTaskButtonContainer";

import muiTheme from "../../constants/materialStyles";

class App extends React.Component {
  render() {
    return (
      <MuiThemeProvider theme={muiTheme}>
        <AppWrapper>
          <Overview />
          <Modals />
          <AddTaskButton />
        </AppWrapper>
      </MuiThemeProvider>
    );
  }
}

export default App;
