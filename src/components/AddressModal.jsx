import { Box } from '@mui/material';
import React from 'react';
import DaumPostcode from 'react-daum-postcode';

const AddressModal = ({ setRoadAddress, setZipcode, setModal, modal }) => {

    const completeHandler = (data, state) => {
        console.log(data);
        setZipcode(data.zonecode); // 추가
        setRoadAddress(data.roadAddress); // 추가
        setModal(false);
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
        <Box>
            <DaumPostcode style={postCodeStyle} theme={themeObj} onComplete={completeHandler} autoClose />
        </Box>
    )
}

export default AddressModal;