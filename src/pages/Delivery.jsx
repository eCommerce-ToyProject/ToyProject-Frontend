import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import MyinfoNavList from '../components/MyinfoNavList';
import DeliveryInput from '../components/DeliveryInput';
import AddressModal from '../components/AddressModal';
import DeliveryModal from '../components/DeliveryModal';
import CustomModal from '../components/CustomModal';
import { useDeliveryContext } from '../context/DeliveryContext';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { useCookies } from 'react-cookie';

const Delivery = () => {
    const name = useSelector(state => state.name);
    const [cookies] = useCookies(['accessToken']);
    const {
        zipCode,
        setZipcode,
        roadAddress,
        setRoadAddress,
        detailAddress,
        setDetailAddress,
        designation,
        setDesignation,
        address,
        setAddress,
        delno,
        delModal,
        setDelModal,
        modal,
        setModal,
        msg,
        setMsg
    } = useDeliveryContext();

    const closeModal = () => {
        setModal(false)
    }

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
                dlivPlc: roadAddress,
                memberId: name,
                zipCode: zipCode,
                detailAddress: detailAddress,
                designation: designation
            },
                {
                    withCredentials: false,
                    headers: {
                        Authorization: `Bearer ${cookies.accessToken}`
                    },
                }
            )
                .then(() => {
                    setDetailAddress("");
                    setZipcode("");
                    setRoadAddress("");
                    setDesignation("");
                    setModal(true);
                    setMsg("배송지를 추가했습니다");
                })
                .catch(() => {
                    setModal(true);
                    setMsg("배송지 추가를 실패했습니다");
                })
        }
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
            },
                {
                    withCredentials: false,
                    headers: {
                        Authorization: `Bearer ${cookies.accessToken}`
                    },
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

    return (
        <Box sx={{ display: 'flex' }}>
            <MyinfoNavList />
            <Box>
                <Typography sx={{ mb: 3 }} variant='h5' fontWeight={600}>
                    배송지 추가 / 수정
                    <Button variant="contained" disableRipple sx={{ ml: 3 }} onClick={handleBringAddress}>추가하기</Button>
                </Typography>

                {/* 배송지 폼 컴포넌트 */}
                {/* <DeliveryInput
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
                <Button variant="contained" disableRipple sx={{ mt: 3 }} onClick={ModifyAddress}>수정하기</Button> */}

                {/* orderkListCard 수정해서 만들기 */}
                <Box sx={{ borderRadius: 4, p: 2, boxShadow: 5 }}>
                    <Typography sx={{ fontWeight: 600, fontSize: 20, mb: 2 }}>집</Typography>
                    <Box sx={{ display: 'flex', border: '1px solid #DEDEDE', borderRadius: 4, p: 2 }}>
                        <Box sx={{ width: 300 }}>
                            <Box sx={{ height: 100 }}>
                                <Typography sx={{ fontSize: 19 }}>05043</Typography>
                                <Typography sx={{ fontSize: 19 }}>광진구 자양로22길 73-4</Typography>
                                <Typography sx={{ fontSize: 19 }}>102호</Typography>
                            </Box>
                        </Box>
                    </Box>
                </Box>


            </Box>
            {
                address ? <AddressModal /> : null
            }
            {
                modal ? <CustomModal msg={msg} closeModal={closeModal} /> : null
            }
            {
                delModal
                    ? <DeliveryModal closeModal={closedelModal} />
                    : null
            }
        </Box>
    )
}

export default Delivery;