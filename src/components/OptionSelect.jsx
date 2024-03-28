import React from "react";
import { NativeSelect } from "@mui/material";

const OptionsSelect = ({ options, handleOpt }) => {
  const uniqueOptions = [...new Set(options)];

  return (
    <NativeSelect onChange={handleOpt} sx={{ mr: 2 }}>
      <option value={''} selected >
        선택
      </option>
      {uniqueOptions.map((item, index) => (
        <option key={index} value={item}>
          {item}
        </option>
      ))}
    </NativeSelect>
  );
};

export default OptionsSelect;