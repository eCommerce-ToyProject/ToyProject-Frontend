import React from 'react';
import { FormControlLabel, Radio, RadioGroup } from "@mui/material";

const PayRadio = ({ selectRadio }) => {
    return (
        <RadioGroup row sx={{ mt: 3 }}>
            <FormControlLabel value="CREDIT_CARD" control={<Radio />} onClick={selectRadio} label="카트결제" />
            <FormControlLabel value="KKO_PAY" control={<Radio />} onClick={selectRadio} label="카카오페이" />
            <FormControlLabel value="BNK_ACC" control={<Radio />} onClick={selectRadio} label="계좌이체" />
        </RadioGroup>
    )
}

export default PayRadio;