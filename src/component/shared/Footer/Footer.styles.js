const useStyles = (BgFooter, BgFooter2) => ({
  footerContainer: {
    backgroundColor: "#5C3E9E", // Purple background
    color: "white",
    padding: "40px 20px",
    position: "relative",
    "::before": {
      content: '""',
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      backgroundImage: `url(${BgFooter})`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "auto",
      backgroundPosition: "top right",
      //   opacity: 0.1, // Make it subtle
    },
  },
  logo: {
    fontWeight: "bold",
    fontSize: "1.5rem",
    marginBottom: "10px",
  },
  description: {
    fontSize: "18px",
    lineHeight: 1.5,
  },
  columnHeader: {
    fontWeight: "bold",
    marginBottom: "10px",
  },
  link: {
    display: "block",
    color: "#D1D1D1",
    textDecoration: "none",
    fontSize: "18px",
    marginBottom: "8px",
    mt: 2,
    "&:hover": {
      textDecoration: "underline",
    },
  },
  text: {
    fontSize: "18px",
    marginBottom: "8px",
    color: "#D1D1D1",
  },
  copyRight: {
    textAlign: "center",
    marginTop: "20px",
    fontSize: "0.8rem",
    opacity: 0.8,
  },
});

export default useStyles;
