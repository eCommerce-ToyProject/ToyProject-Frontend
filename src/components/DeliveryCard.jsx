import { Box, IconButton, Typography } from '@mui/material';
import { MdDelete } from "react-icons/md";
import React from 'react';
import axios from 'axios';
import { useDeliveryContext } from '../context/DeliveryContext';

const DeliveryCard = ({ props, Close }) => {
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
                    axios.put(`/delivery/deleteDelivery/${item.delNo}`, {
                        deleted: true
                    })
                        .then((res) => {
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
                                setRoadAddress(item.delPlc);
                                setDetailAddress(item.detailAddress);
                                setDesignation(item.designation)
                                setDelno(item.delNo)
                                Close();
                            }}>
                                <Box>
                                    <Typography fontWeight={600} fontSize={20}>{item.designation}</Typography>
                                    <Typography>{item.zcode}</Typography>
                                    <Typography>{item.delPlc}</Typography>
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