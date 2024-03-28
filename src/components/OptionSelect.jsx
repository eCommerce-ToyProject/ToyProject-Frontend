import React from "react";
import { NativeSelect } from "@mui/material";

const OptionsSelect = ({ options, handleOpt1 }) => {
  const uniqueOptions = [...new Set(options)];

  return (
    <NativeSelect onChange={handleOpt1} sx={{ mr: 2 }}> 
      {uniqueOptions.map((item) => (
        <option key={item} value={item}>
          {item}
        </option>
      ))}
    </NativeSelect>
  );
};

export default OptionsSelect;