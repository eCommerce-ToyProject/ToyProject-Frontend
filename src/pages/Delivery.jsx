import { Box, Button, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import MyinfoNavList from '../components/MyinfoNavList';
import axios from 'axios';
import DeliveryInput from '../components/DeliveryInput';
import AddressModal from '../components/AddressModal';
import DeliveryModal from '../components/DeliveryModal';
import CustomModal from '../components/CustomModal';

const Delivery = () => {
    const [name, setName] = useState('');
    const [zipCode, setZipcode] = useState('');
    const [roadAddress, setRoadAddress] = useState('');
    const [detailAddress, setDetailAddress] = useState('');
    const [designation, setDesignation] = useState('');
    const [address, setAddress] = useState('');
    const [delModal, setDelModal] = useState(false);
    const [modal, setModal] = useState(false);
    const [msg, setMsg] = useState(false);

    const closeModal = () => {
        setModal(false)
    }

    // 배송지 인풋에 사용되는 모달 함수들
    const handleBringAddress = () => {
        setDelModal(true)
    }

    const handleAddress = () => {
        setAddress(true);
    }

    const closedelModal = () => {
        setDelModal(false)
    }

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
                delPlc: roadAddress,
                memberId: name,
                zipCode: zipCode,
                detailAddress: detailAddress,
                designation: designation
            })
                .then(() => {
                    setModal(true);
                    setMsg("배송지를 추가했습니다");
                })
                .catch(() => {
                    setModal(true);
                    setMsg("배송지 추가를 실패했습니다");
                })
        }
    }

    useEffect(() => {
        axios.post('/members/loginCheck')
            .then((res) => {
                setName(res.data);
            })
            .catch((error) => {
                console.error('Error checking login status:', error);
            });
    });

    return (
        <Box sx={{ display: 'flex' }}>
            <MyinfoNavList />
            <Box>
                <Typography sx={{ mb: 3 }} variant='h5' fontWeight={600}>배송지 추가 / 수정</Typography>
                
                {/* 배송지 폼 컴포넌트 */}
                <DeliveryInput 
                    designation={designation}
                    zipCode={zipCode}
                    roadAddress={roadAddress}
                    detailAddress={detailAddress}
                    onDesignationChange={(e) => setDesignation(e.target.value)}
                    onZipCodeChange={(e) => setZipcode(e.target.value)}
                    onRoadAddressChange={(e) => setRoadAddress(e.target.value)}
                    onDetailAddressChange={(e) => setDetailAddress(e.target.value)}
                    onAddressSearch={handleAddress}
                    onAddressBring={handleBringAddress}
                />

                <Button variant="contained" disableRipple sx={{ mt: 3, mr: 2 }} onClick={addAddress}>추가하기</Button>
                <Button variant="contained" disableRipple sx={{ mt: 3 }}>수정하기</Button>
            </Box>
            {
                address ? <AddressModal setRoadAddress={setRoadAddress} setZipcode={setZipcode} setAddress={setAddress} address={address} /> : null
            }
            {
                modal ? <CustomModal msg={msg} closeModal={closeModal} /> : null
            }
            {
                delModal
                    ? <DeliveryModal delModal={delModal} closeModal={closedelModal} id={name !== undefined ? name : null} setZipcode={setZipcode} setRoadAddress={setRoadAddress} setDetailAddress={setDetailAddress} setDesignation={setDesignation} />
                    : null
            }
        </Box>
    )
}

export default Delivery;