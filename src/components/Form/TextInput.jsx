import React from 'react';
import { TextField } from '@mui/material';

const TextInput = ({ onChange, value }) => {
    return (
        <TextField sx={{
            '& .MuiInputBase-root': {
                "&:hover fieldset": {
                    borderColor: 'rgb(192, 192, 192);'
                },
                "&.Mui-focused": {
                    borderColor: 'blue'
                }
            },
            width: '60%'
        }} onChange={onChange} value={value} id='outlined-basic' variant='outlined'></TextField>
    )
}

export default TextInput