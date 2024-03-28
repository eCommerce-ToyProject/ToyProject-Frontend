import React, { useEffect, useState } from 'react';
import { Box, Button, Typography } from "@mui/material";
import { useLocation } from 'react-router-dom';
import OrderUserinfo from '../components/OrderUserInfo';
import CustomModal from '../components/CustomModal';
import OrderPayDetail from '../components/OrderPayDetail';
import OrdersCard from '../components/OrdersCard';
import axios from 'axios';
import DeliveryModal from '../components/DeliveryModal';
import AddressModal from '../components/AddressModal';
import DeliveryInput from '../components/DeliveryInput';
import PayRadio from '../components/PayRadio';

const ProOrder = () => {
    const location = useLocation();
    const price = location.state?.price;
    const title = location.state?.name;
    const qty = location.state?.qty;
    const img = location.state?.img;
    const gno = location.state?.gno;
    const opt1 = location.state?.opt1;
    const opt2 = location.state?.opt2;

    const [modal, setModal] = useState(false);
    const [msg, setMsg] = useState("");
    const [nav, setNav] = useState("");
    const [pay, Setpay] = useState("");
    const [address, setAddress] = useState(false);
    const [delModal, setDelModal] = useState(false);
    const [name, setName] = useState(undefined);
    const [userData, setUserData] = useState([])
    const [designation, setDesignation] = useState('');
    const [zipCode, setZipcode] = useState("");
    const [roadAddress, setRoadAddress] = useState("");
    const [detailAddress, setDetailAddress] = useState("");

    const handleAddress = () => {
        setAddress(true);
    };

    const handleBringAddress = () => {
        setDelModal(true)
    }

    const closeModal = () => {
        setModal(false)
    }

    const closedelModal = () => {
        setDelModal(false)
    }

    const selectRadio = (e) => {
        Setpay(e.target.value);
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
        if (name !== undefined && userData.length === 0) {
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
        if (zipCode === '' || roadAddress === '' || detailAddress === '') {
            setModal(true);
            setMsg("배송지를 입력해 주세요.");
        } else if (pay === "") {
            setModal(true);
            setMsg("결제방식을 선택해 주세요.");
        } else {
            axios.post('/orders/createOrder', {
                memberId: name,
                goodsId: gno,
                optVal1: opt1,
                optVal2: opt2,
                quantity: qty,
                paymn: pay,
                delPlc: roadAddress,
                zipCode: zipCode,
                detailAddress: detailAddress,
                designation: designation

            })
            .then(() => {
                setModal(true);
                setMsg('주문을 성공했습니다!');
                setNav('/');
            })
            .catch((err) => {
                console.log(err)
            })
        }
    }

    return (
        <Box sx={{ width: 900, m: '0 auto' }}>
            <Typography variant='h4' fontWeight={600} sx={{ color: '#1976d2', textAlign: 'center' }}>
                결제하기
            </Typography>

            {/* 구매할 제품 카드 */}
            <OrdersCard price={price} title={title} img={img} qty={qty} opt1={opt1} opt2={opt2} />

            {/* 주문정보 작성 및 결제 공간 */}
            <Box sx={{ display: 'flex', mt: 7 }}>
                <Box sx={{ width: '60%' }}>
                    <Box>
                        <Typography variant='h5' fontWeight={600}>배송지</Typography>
                    </Box>
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

                    <Typography variant='h5' fontWeight={600} sx={{ mt: 3 }}>결제수단</Typography>

                    {/* 결제 수단 라디오 */}
                    <PayRadio selectRadio={selectRadio} />

                    {/* 결제 버튼 */}
                    <Button size='large' variant="contained" disableRipple sx={{ width: 500, mt: 4 }} onClick={handleOrder}>결제하기</Button>
                </Box>
                <Box sx={{ width: '40%' }}>
                    <OrderUserinfo userData={userData.length !== 0 ? userData : null} />
                    <OrderPayDetail price={price} />
                </Box>
            </Box>
            {
                modal ? <CustomModal closeModal={closeModal} msg={msg} nav={nav} /> : null
            }
            {
                address ? <AddressModal setRoadAddress={setRoadAddress} setZipcode={setZipcode} setAddress={setAddress} address={address} /> : null
            }
            {
                delModal ? <DeliveryModal delModal={delModal} closeModal={closedelModal} id={name !== undefined ? name : null} setZipcode={setZipcode} setRoadAddress={setRoadAddress} setDetailAddress={setDetailAddress} setDesignation={setDesignation} /> : null
            }
        </Box>
    )
}

export default ProOrder;