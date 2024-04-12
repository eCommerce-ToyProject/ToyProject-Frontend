import { Grid, Typography, Box } from '@mui/material';
import React, { useEffect, useState } from 'react';
import MyinfoNavList from '../components/MyinfoNavList';
import OrderListCard from '../components/OrderListCard';
import axios from 'axios';
import { useSelector } from 'react-redux';


const OrderList = () => {
    const name = useSelector(state => state.name);
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(1);
    const [orders, setOrders] = useState([]);
    const [hasMore, setHasMore] = useState(true); // 데이터가 더 있는지 확인

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        fetchData();  // 초기 데이터 로드
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);

    const fetchData = () => {
        if (loading || !hasMore) return; // 로딩 중이거나 더 불러올 데이터가 없으면 종료
        setLoading(true);
        axios.get(`/orders/myOrderList?id=${name}&page=${page}&size=10`)
            .then((res) => {
                setOrders([...orders, ...res.data.content]); // 데이터를 끝에 추가
                setPage(page + 1);
                setHasMore(res.data.content.length > 0); // 받아온 데이터가 없다면 더 이상 요청 중지
            })
            .catch((error) => {
                console.error('Error fetching orders:', error);
            })
            .finally(() => setLoading(false));
    }

    const handleScroll = () => {
        if (window.innerHeight + document.documentElement.scrollTop < document.documentElement.offsetHeight - 50 || loading) {
            return;
        }
        fetchData();
    }

    // if (name !== '' && orders) {
    //     axios.get(`/orders/myOrderList?id=${name}&page${page}&size=10`)
    //         .then((res) => {
    //             setOrders([...res.data.content, ...orders])
    //         })
    //         .catch((error) => {
    //             console.error('Error checking login status:', error);
    //         });
    // }

    return (
        <Box sx={{ display: 'flex' }}>
            <MyinfoNavList />
            <Box>
                <Typography sx={{ mb: 3, ml: 3 }} variant='h5' fontWeight={600}>주문 내역</Typography>
                <Grid sx={{
                    width: 750,
                    pr: 3,
                    pl: 3,
                    overflowY: 'auto', // 세로 스크롤바만 표시되도록 함
                    height: 700,
                    '&::-webkit-scrollbar': {
                        width: '0.4em' // 스크롤바 너비 조정
                    },
                    '&::-webkit-scrollbar-thumb': {
                        backgroundColor: 'rgba(0, 0, 0, 0.1)' // 스크롤바 색상 조정
                    }
                }}>
                    {orders.length > 0 ? <OrderListCard product={orders} /> : null}
                </Grid>
            </Box>
        </Box>
    )
}

export default OrderList;