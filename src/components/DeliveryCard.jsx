import { Box, IconButton, Typography } from '@mui/material';
import { MdDelete } from "react-icons/md";
import React, { useState } from 'react';
import axios from 'axios';

const DeliveryCard = ({ props, setZipcode, setRoadAddress, setDetailAddress, setDesignation, setDelno, Close, delno }) => {
    const [del, setDel] = useState();

    return (
        <Box>
            {props.map((item, key) => {
                const deleteAddress = () => {
                    axios.delete(`/delivery/deleteDelivery/${item.delNo}`) // delno 상태 직접 사용
                        .then((res) => {
                            setDel(res.data)
                            Close();
                        })
                        .catch((err) => {
                            console.log(err);
                            Close();
                        });
                };

                return (
                    del ? (
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