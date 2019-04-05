import React from "react";
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";

import Overview from "../Overview/OverviewContainer";
import Modals from "../Modals/ModalsContainer";
import AddTaskButton from "../AddTaskButton/AddTaskButtonContainer";

import muiTheme from "../../constants/materialStyles";

class App extends React.Component {
  render() {
    return (
      <MuiThemeProvider theme={muiTheme}>
        <Overview />
        <Modals />
        <AddTaskButton />
      </MuiThemeProvider>
    );
  }
}

export default App;
