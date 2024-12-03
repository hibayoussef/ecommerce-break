const aboutUsStyles = {
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: { xs: "column", md: "row" },
    gap: "2rem",
    bgcolor: "#f4f4f4",
    py: 6,
    px: 3,
  },
  imageContainer: {
    flex: 1,
    maxWidth: "700px",
    overflow: "hidden",
    borderRadius: "12px",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
  },
  image: {
    width: "100%",
    height: "400px",
    objectFit: "cover",
  },
  content: {
    flex: 1,
    textAlign: { xs: "center", md: "left" },
  },
  title: {
    fontSize: "2rem",
    fontWeight: "bold",
    mb: 2,
  },
  subtitle: {
    fontSize: "1rem",
    color: "#555",
  },
};

export default aboutUsStyles;
