import React from 'react';
import { Box, Button, Modal } from '@mui/material';
import { useDeliveryContext } from '../context/DeliveryContext';
import TextInput from './TextInput';
import axios from 'axios';
import CustomModal from './CustomModal';
import { useSelector } from 'react-redux';

const AddDeliModal = ({ onAddressSearch }) => {
    const name = useSelector(state => state.name);
    const {
        zipCode,
        setZipcode,
        roadAddress,
        setRoadAddress,
        detailAddress,
        setDetailAddress,
        designation,
        setDesignation,
        addDelModal,
        setAddDelModal,
        modal,
        setModal,
        msg,
        setMsg
    } = useDeliveryContext();

    const Close = () => {
        closedelModal()
    }

    const closedelModal = () => {
        setAddDelModal(false)
    }

    const closeModal = () => {
        setModal(false);
    }

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 370,
        bgcolor: 'background.paper',
        borderRadius: 5,
        boxShadow: 24,
        p: 4,
    };

    const addAddress = async () => {
        if (designation === '') {
            setModal(true);
            setMsg("배송지명을 입력해 주세요");
        } else if (zipCode === '') {
            setModal(true);
            setMsg("우편번호를 입력해 주세요");
        } else if (roadAddress === '') {
            setModal(true);
            setMsg("주소를 입력해 주세요");
        } else if (detailAddress === '') {
            setModal(true);
            setMsg("상세주소를 입력해 주세요");
        } else {
            await axios.post("/delivery/createDelivery", {
                dlivPlc: roadAddress,
                memberId: name,
                zipCode: zipCode,
                detailAddress: detailAddress,
                designation: designation
            })
                .then(() => {
                    setDetailAddress("");
                    setZipcode("");
                    setRoadAddress("");
                    setDesignation("");
                    Close();
                    setModal(true);
                    setMsg("배송지를 추가했습니다");
                })
                .catch(() => {
                    Close();
                    setModal(true);
                    setMsg("배송지 추가를 실패했습니다");
                })
        }
    }

    return (
        <Modal
            open={addDelModal}
            onClose={Close}
        >

            <Box sx={style}>
                <Box sx={{ display: 'flex', mt: 3 }}>
                    <Box sx={{ width: 400 }}>
                        <TextInput size={"small"} onChange={e => setDesignation(e.target.value)} value={designation} placeholder="배송지명" />
                        <TextInput size={"small"} onChange={e => setZipcode(e.target.value)} value={zipCode} placeholder="우편번호" />
                        <TextInput size={"small"} onChange={e => setRoadAddress(e.target.value)} value={roadAddress} placeholder="주소" />
                        <TextInput size={"small"} onChange={e => setDetailAddress(e.target.value)} value={detailAddress} placeholder="상세주소" />
                    </Box>
                    <Box>
                        <Button variant="contained" disableRipple sx={{ height: '100%' }} onClick={onAddressSearch}>주소찾기</Button>
                    </Box>
                </Box>
                <Button variant="contained" disableRipple sx={{ ml: 17, mt: 3 }} onClick={addAddress}>추가하기</Button>
                {
                    modal ? <CustomModal msg={msg} closeModal={closeModal} /> : null
                }
            </Box>
        </Modal>
    )
}

export default AddDeliModal;