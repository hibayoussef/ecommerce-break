import { Box } from "@mui/material";
// import img
import OfferImg from "../../../../assets/images/offer.jpg";

function Offer() {
  return (
    <Box>
      <img
        src={OfferImg}
        alt=""
        style={{ width: "100%", marginTop: "10px", height: "400px" }}
      />
    </Box>
  );
}

export default Offer;
