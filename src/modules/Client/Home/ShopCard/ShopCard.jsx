import { Box, Typography } from "@mui/material";
// start in card component
import ProductCard from "../../../../component/shared/ProductCard/ProductCard";
// import style css
import useStylesShop from "./ShopCard.styles";

function ShopCard() {
  const styles = useStylesShop();

  const handleAddToCart = () => {
    console.log("Product added to cart!");
  };
  return (
    <Box sx={styles.main}>
      <Box>
        <Typography variant="h4" sx={styles.text}>
          Shop Now
        </Typography>
        <Typography variant="h6" sx={styles.text}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure, ad.
        </Typography>
      </Box>
      <Box sx={styles.root}>
        <ProductCard
          image="https://via.placeholder.com/200"
          title="Sample Product"
          description="This is a brief description of the product."
          onAddToCart={handleAddToCart}
        />
      </Box>
    </Box>
  );
}

export default ShopCard;
