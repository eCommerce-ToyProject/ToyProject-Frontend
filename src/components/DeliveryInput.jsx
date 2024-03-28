import { Box, Button } from "@mui/material";
import TextInput from "./TextInput";
import { useState } from "react";
import DeliveryModal from "./DeliveryModal";
import AddressModal from "./AddressModal";

const DeliveryInput = () => {
    const [zipCode, setZipcode] = useState("");
    const [roadAddress, setRoadAddress] = useState("");
    const [detailAddress, setDetailAddress] = useState("");
    const [address, setAddress] = useState(false);
    const [delModal, setDelModal] = useState(false);

    const closedelModal = () => {
        setDelModal(false)
    }

    const handleAddress = () => {
        setAddress(true);
    };

    const handleBringAddress = () => {
        setDelModal(true)
    }

    return (
        <Box sx={{ display: 'flex', mt: 3 }}>
            <Box sx={{ width: 400 }}>
                <TextInput size={"small"} onChange={(e) => setZipcode(e.target.value)} value={zipCode} placeholder="우편번호" />
                <TextInput size={"small"} onChange={(e) => setRoadAddress(e.target.value)} value={roadAddress} placeholder="주소" />
                <TextInput size={"small"} onChange={(e) => setDetailAddress(e.target.value)} value={detailAddress} placeholder="상세주소" />
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <Button variant="contained" disableRipple sx={{ height: '50%' }} onClick={handleAddress}>주소찾기</Button>
                <Button variant="contained" disableRipple sx={{ height: '50%' }} onClick={handleBringAddress}>불러오기</Button>
            </Box>
            {
                address ? <AddressModal setRoadAddress={setRoadAddress} setZipcode={setZipcode} setAddress={setAddress} address={address} /> : null
            }
            {
                delModal ? <DeliveryModal delModal={delModal} closeModal={closedelModal} /> : null
            }
        </Box>
    )
}

export default DeliveryInput;