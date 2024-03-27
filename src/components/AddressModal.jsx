import { Box, Modal } from '@mui/material';
import React from 'react';
import DaumPostcode from 'react-daum-postcode';

const AddressModal = ({ setRoadAddress, setZipcode, setAddress, address, closeModal }) => {

    const completeHandler = (data, state) => {
        console.log(data);
        setZipcode(data.zonecode); // 추가
        setRoadAddress(data.roadAddress); // 추가
        setAddress(false);
    }

    const Close = () => {
        setAddress(false);
        closeModal();
    }

    const postCodeStyle = {
        display: "block",
        position: "absolute",
        width: "50%",
        height: "50%",
        top: "0",
        left: "0",
        transform: "translate(50%, 50%)",
        zIndex: 100,
    };
    var themeObj = {
        searchBgColor: "#0B65C8", //검색창 배경색
        queryTextColor: "#FFFFFF" //검색창 글자색
    };

    return (
        <Modal open={address} onClose={Close}>
            <Box>
                <DaumPostcode style={postCodeStyle} theme={themeObj} onComplete={completeHandler} autoClose />
            </Box>
        </Modal>
    )
}

export default AddressModal;