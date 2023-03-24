import React from "react";
import { Typography } from "@mui/material";

const TotalCost = ({ selections }) => {
  const total = selections.reduce((acc, curr) => acc + curr.price, 0);

  return (
    <Typography variant="h6" align="center">
      TotalCost: ${total}
    </Typography>
  );
};

export default TotalCost;
