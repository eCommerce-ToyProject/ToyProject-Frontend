import React from "react";
import { NativeSelect } from "@mui/material";

const OptionsSelect = ({ options }) => {
  const uniqueOptions = [...new Set(options)];

  return (
    <NativeSelect>
      {uniqueOptions.map((item) => (
        <option key={item} value={item}>
          {item}
        </option>
      ))}
    </NativeSelect>
  );
};

export default OptionsSelect;