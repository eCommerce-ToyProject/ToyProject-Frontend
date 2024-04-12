import React from 'react';
import { Box, Button, Modal } from '@mui/material';
import { useDeliveryContext } from '../context/DeliveryContext';
import TextInput from './TextInput';
import axios from 'axios';
import CustomModal from './CustomModal';

const ModifyDeliModal = ({ onAddressSearch }) => {
    const {
        delno,
        zipCode,
        setZipcode,
        roadAddress,
        setRoadAddress,
        detailAddress,
        setDetailAddress,
        designation,
        setDesignation,
        modDelModal,
        setModDelModal,
        modal,
        setModal,
        msg,
        setMsg
    } = useDeliveryContext();

    const Close = () => {
        closeModModal()
    }

    const closeModModal = () => {
        setModDelModal(false)
    }
    
    const closeModal = () => {
        setModal(false)
    }

    const ModifyAddress = () => {
        if (delno === undefined) {
            setModal(true);
            setMsg("추가하신 배송지를 수정해 주세요");
        } else {
            axios.put('/delivery/updateDelivery', {
                dlivNo: delno,
                dlivPlc: roadAddress,
                zipCode: zipCode,
                detailAddress: detailAddress,
                designation: designation
            })
                .then(() => {
                    setModal(true);
                    setMsg("배송지를 수정했습니다");
                })
                .catch((err) => {
                    setModal(true);
                    setMsg("배송지 수정을 실패했습니다");
                    console.log(err)
                })
        }
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

    return (
        <Modal
            open={modDelModal}
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
                <Button variant="contained" disableRipple sx={{ ml: 17, mt: 3 }} onClick={ModifyAddress}>수정하기</Button>
                {
                    modal ? <CustomModal msg={msg} closeModal={closeModal} /> : null
                }
            </Box>
        </Modal>
    )
}

export default ModifyDeliModal;