import { Box, Button } from "@mui/material";
import TextInput from "./TextInput";

const DeliveryInput = ({ designation, zipCode, roadAddress, detailAddress, onDesignationChange, onZipCodeChange, onRoadAddressChange, onDetailAddressChange, onAddressSearch, onAddressBring }) => {
    return (
        <Box sx={{ display: 'flex', mt: 3 }}>
            <Box sx={{ width: 400 }}>
                <TextInput size={"small"} onChange={onDesignationChange} value={designation} placeholder="배송지명" />
                <TextInput size={"small"} onChange={onZipCodeChange} value={zipCode} placeholder="우편번호" />
                <TextInput size={"small"} onChange={onRoadAddressChange} value={roadAddress} placeholder="주소" />
                <TextInput size={"small"} onChange={onDetailAddressChange} value={detailAddress} placeholder="상세주소" />
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <Button variant="contained" disableRipple sx={{ height: '50%' }} onClick={onAddressSearch}>주소찾기</Button>
                <Button variant="contained" disableRipple sx={{ height: '50%' }} onClick={onAddressBring}>불러오기</Button>
            </Box>
        </Box>
    )
}

export default DeliveryInput;