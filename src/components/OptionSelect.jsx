import React from "react";
import { NativeSelect } from "@mui/material";

const OptionsSelect = ({ options }) => {
  const uniqueOptions = [...new Set(options)];

  return (
    <NativeSelect sx={{ mr: 2 }}> 
      {uniqueOptions.map((item) => (
        <option key={item} value={item}>
          {item}
        </option>
      ))}
    </NativeSelect>
  );
};

export default OptionsSelect;