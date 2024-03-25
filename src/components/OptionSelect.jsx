import React from "react";
import { NativeSelect } from "@mui/material";

const OptionsSelect = ({ options }) => {
  return (
    <NativeSelect sx={{ mr: 4 }}>
      {options.map((item) => (
        <option key={item} value={item}>
          {item}
        </option>
      ))}
    </NativeSelect>
  );
};

export default OptionsSelect;
