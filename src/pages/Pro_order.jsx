import React, { useEffect, useState } from 'react';
import { Box, Button, FormControlLabel, Radio, RadioGroup, Typography } from "@mui/material";
import dress from '../assets/dress.jpg'
import OptionsSelect from '../components/OptionSelect';
import TextInput from '../components/TextInput';
import AddressModal from '../components/AddressModal';
import { NavLink, useParams } from 'react-router-dom';
import OrderUserinfo from '../components/OrderUserInfo';
import CustomModal from '../components/CustomModal';
import OrderPayDetail from '../components/OrderPayDetail';

const ProOrder = () => {
    const param = useParams();
    const [zipCode, setZipcode] = useState("");
    const [roadAddress, setRoadAddress] = useState("");
    const [detailAddress, setDetailAddress] = useState("");
    const [modal, setModal] = useState(false);
    const [msg, setMsg] = useState("");
    const [pay, Setpay] = useState("");
    const [address, setAddress] = useState(false);

    const handleAddress = () => {
        setAddress(true);
    };

    const closeModal = () => {
        setModal(false)
    }

    const selectRadio = (e) => {
        Setpay(e.target.value);
        console.log(pay);
    }

    // useEffect(() => {

    // })

    const handleOrder = () => {
        if(zipCode === "" || roadAddress === ""){
            setModal(true);
            setMsg("상품 배송지를 정해주세요.");
        }else if(pay === ""){
            setModal(true);
            setMsg("결제방식을 선택해 주세요.");
        }else{
            setModal(true);
            setMsg("결제성공.");
        }
    }

    return (
        <Box sx={{ width: 900, m: '0 auto' }}>
            <Typography variant='h4' fontWeight={600} sx={{ color: '#1976d2', textAlign: 'center' }}>
                결제하기
            </Typography>

            {/* 구매할 제품 카드 */}
            <Box sx={{ display: 'flex', mt: 3, width: '100%', border: '1px solid #DEDEDE', p: 3, borderRadius: 4 }}>
                <img src={dress} alt={dress} style={{ width: 130, height: 130, borderRadius: 15 }} />
                <Box sx={{ ml: 3 }}>
                    <NavLink style={{ textDecoration: 'none' }} to={`/productdetail/${1}`}>
                        <Typography sx={{ lineHeight: 2, mt: 2, color: 'black' }}>블랙 드레스</Typography>
                    </NavLink>
                    <Typography sx={{ lineHeight: 2 }}>2개</Typography>
                    <Typography sx={{ lineHeight: 2, fontSize: 20 }} fontWeight={600}>500원</Typography>
                </Box>
            </Box>

            {/* 주문정보 작성 및 결제 공간 */}
            <Box sx={{ display: 'flex', mt: 7 }}>
                <Box sx={{ width: '60%' }}>
                    <Typography variant='h5' fontWeight={600}>배송지</Typography>
                    
                    {/* <OptionsSelect options={} /> */}
                    <Box sx={{ display: 'flex', mt: 3 }}>
                        <Box sx={{ width: 400 }}>
                            <TextInput size={"small"} onChange={(e) => setZipcode(e.target.value)} value={zipCode} placeholder="우편번호" />
                            <TextInput size={"small"} onChange={(e) => setRoadAddress(e.target.value)} value={roadAddress} placeholder="주소" />
                            <TextInput size={"small"} onChange={(e) => setDetailAddress(e.target.value)} value={detailAddress} placeholder="상세주소" />
                        </Box>
                        <Button variant="contained" disableRipple onClick={handleAddress}>주소찾기</Button>
                    </Box>
                    <Typography variant='h5' fontWeight={600} sx={{ mt: 3 }}>결제수단</Typography>
                   
                    {/* 결제 수단 라디오 */}
                    <RadioGroup row sx={{ mt: 3 }}>
                        <FormControlLabel value="CREDIT_CARD" control={<Radio />} onClick={selectRadio} label="카트결제" />
                        <FormControlLabel value="KKO_PAY" control={<Radio />} onClick={selectRadio} label="카카오페이" />
                        <FormControlLabel value="BNK_ACC" control={<Radio />} onClick={selectRadio} label="계좌이체" />
                    </RadioGroup>

                    <Button size='large' variant="contained" disableRipple sx={{ width: 500, mt: 4 }} onClick={handleOrder}>결제하기</Button>
                </Box>
                <Box sx={{ width: '40%' }}>
                    <OrderUserinfo />
                    <OrderPayDetail />
                </Box>
            </Box>
            {
                address ? <AddressModal setRoadAddress={setRoadAddress} setZipcode={setZipcode} setAddress={setAddress} /> : null
            }
            {
                modal ? <CustomModal closeModal={closeModal} msg={msg} /> : null
            }
        </Box>
    )
}

export default ProOrder;