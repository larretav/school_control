import { createTheme, responsiveFontSizes } from "@mui/material";
import { components, palette, typography, breakpoints } from "./";

let theme = createTheme({
  typography,
  palette,
  components,
  breakpoints
});

theme = responsiveFontSizes(theme);

export default theme;