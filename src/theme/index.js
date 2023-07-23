import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  fonts: {
    heading: `'Playfair Display', sans-serif`,
    body: `'Nunito','Nunito Variable', sans-serif`,
  },
  colors: {
    main_color: "#25282B",
    gray_text: "#828282",
    yellow_text: "#FDC435",
  },
  textStyles: {
    paragraph: {
      fontSize: "12px",
      fontWeight: "400",
      lineHeight: "140%",
      letterSpacing: "0.005em",
    },
  },
});

export default theme;
