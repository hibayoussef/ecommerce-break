const useStyles = () => ({
  card: {
    maxWidth: 300,
    margin: "20px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    borderRadius: "8px",
    transition: "transform 0.2s ease-in-out",
    "&:hover": {
      transform: "scale(1.05)",
    },
  },
  media: {
    objectFit: "cover",
  },
  title: {
    fontWeight: "bold",
    textAlign: "center",
  },
  description: {
    textAlign: "justify",
    marginTop: "10px",
  },
  actions: {
    display: "flex",
    justifyContent: "center",
  },
  button: {
    textTransform: "capitalize",
  },
});

export default useStyles;
