import React from "react";
import { Typography } from "@mui/material";

const ProductDetails = ({ name, price }) => {
  return (
    <>
      <Typography sx={{ wordBreak: "break-all" }} variant="h5" component="h5">
        {name}
      </Typography>
      <Typography sx={{ color: "#ae0000", mt: 3 }} variant="h5" component="h5">
        {price}원
      </Typography>
    </>
  );
};

export default ProductDetails;
