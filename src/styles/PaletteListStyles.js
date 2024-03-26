export default {
    root: {
      backgroundColor: "#8686d3",
      height: "100vh",
      display: "flex",
      alignItems: "flex-start",
      justifyContent: "center",
      'padding-bottom': "20px",
      margin: '0 auto',
    },
    container: {
      width: "50%",
      display: "flex",
      alignItems: "flex-start",
      flexDirection: "column",
      flexWrap: "wrap"
    },
    nav: {
      width: "100%",
      justifyContent: "space-between",
      color: "white",
      "& a" : {
        color: 'inherit',
      }
    },
    palettes: {
      boxSizing: "border-box",
      width: "100%",
      display: "flex",
      flexWrap: 'wrap',
      "& a" : {
        textDecoration: 'none'
      }
    }
  };
