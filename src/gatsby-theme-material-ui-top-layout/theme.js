import { createMuiTheme } from "@material-ui/core";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#16161A",
      textColor: "#FFFFFF",
    },
    secondary: {
      main: "#6851fe",
      textColor: "#94A1B2",
      socialIconColor: "#72757E",
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 1024,
      lg: 1280,
      xl: 1920,
    },
  },
  overrides: {
    MuiButton: {
      containedSecondary: {
        color: "#16161A",
        "&:hover": {
          color: "#fff",
        },
      },
    },
  },
});

export default theme;
