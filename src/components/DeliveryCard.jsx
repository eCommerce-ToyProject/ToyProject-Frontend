import { Box, IconButton, Typography } from '@mui/material';
import { MdDelete } from "react-icons/md";
import React from 'react';
import axios from 'axios';
import { useDeliveryContext } from '../context/DeliveryContext';
import { useCookies } from 'react-cookie';

const DeliveryCard = ({ props, Close }) => {
    const [cookies] = useCookies(['accessToken']);
    const {
        setZipcode,
        setRoadAddress,
        setDetailAddress,
        setDesignation,
        setDelno,
    } = useDeliveryContext();

    return (
        <Box>
            {props.map((item, key) => {
                const deleteAddress = () => {
                    axios.put(`/delivery/deleteDelivery/${item.dlivNo}`, {
                        deleted: true
                    },
                        {
                            withCredentials: false,
                            headers: {
                                Authorization: `Bearer ${cookies.accessToken}`
                            }
                        })
                        .then(() => {
                            Close();
                        })
                        .catch((err) => {
                            console.log(err);
                            Close();
                        });
                };

                return (
                    item.deleted === false ? (
                        <Box key={key} sx={{ border: '1px solid #DEDEDE', borderRadius: 2, p: 2, mb: 1, display: 'flex' }}>
                            <Box onClick={() => {
                                setZipcode(item.zcode);
                                setRoadAddress(item.dlivPlc);
                                setDetailAddress(item.detailAddress);
                                setDesignation(item.designation)
                                setDelno(item.dlivNo)
                                Close();
                            }}>
                                <Box>
                                    <Typography fontWeight={600} fontSize={20}>{item.designation}</Typography>
                                    <Typography>{item.zcode}</Typography>
                                    <Typography>{item.dlivPlc}</Typography>
                                </Box>
                            </Box>
                            <IconButton aria-label="delete" size="small" sx={{ ml: 'auto' }} onClick={deleteAddress}>
                                <MdDelete color='red' />
                            </IconButton>
                        </Box>
                    )
                        : null
                )
            })}
        </Box>
    )
}

export default DeliveryCard;