import { createMuiTheme } from "@material-ui/core/styles";
import indigo from "@material-ui/core/colors/indigo";
import red from "@material-ui/core/colors/red";

export default createMuiTheme({
  palette: {
    primary: indigo,
    secondary: red,
  },
  status: {
    danger: "orange",
  },
  typography: {
    useNextVariants: true,
  },
});
