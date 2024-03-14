import React from 'react';
import { TextField } from '@mui/material';

const TextInput = ({ onChange, value, placeholder}) => {
    return (
        <TextField sx={{
            '& .MuiInputBase-root': {
                "&:hover fieldset": {
                    borderColor: 'rgb(192, 192, 192);'
                },
                "&.Mui-focused fieldset": {
                    borderColor: 'black',
                    border: '0.5px solid black'
                }
            },
            width: '100%',
        }} onChange={onChange} value={value} id='outlined-basic' variant='outlined' placeholder={placeholder}></TextField>
    )
}

export default TextInput