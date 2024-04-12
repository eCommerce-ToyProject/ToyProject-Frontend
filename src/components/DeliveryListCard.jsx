import { Box, Typography, IconButton } from '@mui/material';
import axios from 'axios';
import { MdDelete } from 'react-icons/md';
import { useDeliveryContext } from '../context/DeliveryContext';
import { useEffect } from 'react';

const DeliveryListCard = ({ item, onClick }) => {
    const {
        setModal,
        setMsg
    } = useDeliveryContext();

    return (
        <Box>

            {
                item.map((item) => {
                    const deleteAddress = () => {
                        axios.put(`/delivery/deleteDelivery/${item.dlivNo}`, {
                            deleted: true
                        })
                            .then(() => {
                                setModal(true);
                                setMsg("배송지를 삭제했습니다.");
                            })
                            .catch((err) => {
                                console.log(err)
                            });
                    };
                    return (
                        item.deleted === false
                            ? <Box key={item.dlivNo} sx={{ borderRadius: 4, p: 2, boxShadow: 5, mb: 2 }} onClick={onClick}>
                                <Box sx={{ display: 'flex' }}>
                                    <Typography sx={{ fontWeight: 600, fontSize: 20, mb: 1, ml: 1 }}>
                                        {item.designation}
                                    </Typography>
                                    <Box sx={{ ml: 'auto' }}>
                                        <IconButton aria-label="delete" size="small" onClick={deleteAddress}>
                                            <MdDelete color='#ae0000' />
                                        </IconButton>
                                    </Box>
                                </Box>
                                <Box sx={{ width: 250, border: '1px solid #DEDEDE', borderRadius: 4, p: 2, fontSize: 17, wordBreak: 'break-all' }}>
                                    <Typography>{item.zcode}</Typography>
                                    <Typography>{item.dlivPlc}</Typography>
                                    <Typography>{item.detailAddress}</Typography>
                                </Box>
                            </Box>
                            : null
                    )

                })}
        </Box>
    )
}

export default DeliveryListCard;