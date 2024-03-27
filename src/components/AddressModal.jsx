import { Box, Modal } from '@mui/material';
import React from 'react';
import DaumPostcode from 'react-daum-postcode';

const AddressModal = ({ setRoadAddress, setZipcode, setAddress, address }) => {

    const completeHandler = (data, state) => {
        console.log(data);
        setZipcode(data.zonecode); // 추가
        setRoadAddress(data.roadAddress); // 추가
        setAddress(false);
    }

    const Close = () => {
        setAddress(false);
    }

    const postCodeStyle = {
        position: "absolute",
        width: "30%",
        height: "50%",
        top: "0",
        left: "0",
        transform: "translate(115%, 50%)",
    };
    
    return (
        <Modal open={address} onClose={Close}>
            <Box>
                <DaumPostcode style={postCodeStyle} onComplete={completeHandler} autoClose />
            </Box>
        </Modal>
    )
}

export default AddressModal;