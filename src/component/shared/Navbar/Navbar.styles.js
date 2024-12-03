const navbarStyles = {
  appBar: {
    backgroundColor: "white",
    color: "black",
    boxShadow: "none",
  },
  toolbar: {
    justifyContent: "space-between",
  },
  logo: {
    display: "flex",
    alignItems: "center",
  },
  links: {
    display: "flex",
    gap: "20px",
    cursor: "pointer",
    "& > *": {
      fontSize: "1rem",
    },
    "@media (max-width:600px)": {
      display: "none", // Hide links on mobile
    },
  },
  iconContainer: {
    display: "flex",
    gap: "16px",
    alignItems: "center",
  },
};

export default navbarStyles;
