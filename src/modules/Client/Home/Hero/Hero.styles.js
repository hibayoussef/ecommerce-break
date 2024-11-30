const useStyles = (BgHero) => ({
  heroContainer: {
    height: "100vh",
    display: "flex",
    width: "100%",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundImage: `url(${BgHero})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    color: "white",
    textAlign: "center",
    position: "relative",
    zIndex: 1,
    "::before": {
      content: '""',
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      backgroundColor: "rgba(0, 0, 0, 0.5)", // Adds a dark overlay
      zIndex: -1,
    },
  },
  heroTitle: {
    fontWeight: "bold",
    mb: 2,
    textShadow: "0 2px 4px rgba(0, 0, 0, 0.8)",
  },
  heroSubtitle: {
    mb: 4,
    textShadow: "0 2px 4px rgba(0, 0, 0, 0.8)",
  },
  heroButton: {
    px: 4,
    py: 2,
    fontSize: "1rem",
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    color: "black",
    "&:hover": {
      backgroundColor: "rgba(255, 255, 255, 1)",
    },
  },
});

export default useStyles;
