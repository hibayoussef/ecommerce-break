import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  CardActions,
} from "@mui/material";
import useStyles from "./ProductCard.styles";

const ProductCard = ({ image, title, description, onAddToCart }) => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardMedia
        component="img"
        height="200"
        image={image}
        alt={title}
        className={classes.media}
      />
      <CardContent>
        <Typography variant="h6" component="div" className={classes.title}>
          {title}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          className={classes.description}
        >
          {description}
        </Typography>
      </CardContent>
      <CardActions className={classes.actions}>
        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          onClick={onAddToCart}
        >
          Add to Cart
        </Button>
      </CardActions>
    </Card>
  );
};

export default ProductCard;
