import { createTheme, responsiveFontSizes } from "@mui/material";
import { components, palette, typography } from "./";

let theme = createTheme({
  typography,
  palette,
  components
});

theme = responsiveFontSizes(theme);

export default theme;