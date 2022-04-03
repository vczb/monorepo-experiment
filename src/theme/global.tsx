import GlobalStyles from "@mui/material/GlobalStyles";

export const globalStyles = (
  <GlobalStyles
    styles={{
      "*": {
        margin: 0,
        padding: 0,
        boxSizing: "border-box",
        fontFamily: `Inter, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
                 Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif`,
        WebkitFontSmoothing: "antialiased",
        MozOsxFontSmoothing: "grayscale",
        WebkitTapHighlightColor: "transparent",
      },
      html: {
        WebkitOverflowScrolling: "touch",
      },
      body: {
        width: "100%",
        height: "100%",
        overflowX: "hidden",
      },
    }}
  />
);
