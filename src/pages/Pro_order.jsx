import React, { useEffect, useState } from 'react';
import { Box, Button, FormControlLabel, Radio, RadioGroup, Typography } from "@mui/material";
import { useLocation, useParams } from 'react-router-dom';
import OrderUserinfo from '../components/OrderUserInfo';
import CustomModal from '../components/CustomModal';
import OrderPayDetail from '../components/OrderPayDetail';
import OrdersCard from '../components/OrdersCard';
import axios from 'axios';
import DeliveryModal from '../components/DeliveryModal';
import DeliveryInput from '../components/DeliveryInput';

const ProOrder = () => {
    const param = useParams();
    const location = useLocation();
    const price = location.state?.price;
    const title = location.state?.name;
    const qty = location.state?.qty;
    const img = location.state?.img;
    const [modal, setModal] = useState(false);
    const [msg, setMsg] = useState("");
    const [pay, Setpay] = useState("");
    const [address, setAddress] = useState(false);
    const [delModal, setDelModal] = useState(false);
    const [name, setName] = useState(undefined);
    const [userData, setUserData] = useState([])

    const handleAddress = () => {
        setAddress(true);
    };

    const handleBringAddress = () => {
        setDelModal(true)
    }

    const closeModal = () => {
        setModal(false)
    }

    const closedeModal = () => {
        setDelModal(false)
    }

    const selectRadio = (e) => {
        Setpay(e.target.value);
        console.log(pay);
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

    useEffect(() => {
        if(name !== undefined&&userData.length === 0){
            axios.get(`/members/orderingMyinfo?id=${name}`)
            .then((res) => {
                setUserData(res.data);
            })
            .catch((error) => {
                console.error('Error checking login status:', error);
            });
        }
    });

    const handleOrder = () => {
        if (pay === "") {
            setModal(true);
            setMsg("결제방식을 선택해 주세요.");
        } else {
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
            <OrdersCard price={price} title={title} img={img} qty={qty} />

            {/* 주문정보 작성 및 결제 공간 */}
            <Box sx={{ display: 'flex', mt: 7 }}>
                <Box sx={{ width: '60%' }}>
                    <Box>
                        <Typography variant='h5' fontWeight={600}>배송지</Typography>
                    </Box>
                    <DeliveryInput />
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
                    <OrderUserinfo userData={userData.length!==0?userData:null}/>
                    <OrderPayDetail price={price} />
                </Box>
            </Box>
            {
                modal ? <CustomModal closeModal={closeModal} msg={msg} /> : null
            }
            {
                delModal ? <DeliveryModal id={name !== undefined ? name : null} delModal={delModal} closeModal={closeModal} /> : null
            }
        </Box>
    )
}

export default ProOrder;