import React, { useState } from 'react'
import { Box, Button, Stack, Typography } from '@mui/material';
import TextInput from '../../components/Form/TextInput';

const Login = () => {
    const [id, setId] = useState('');
    const [pwd, setPwd] = useState('');

    return (
        <Box sx={{
            width: '600px',
            height: '800px'
        }}>
            <Typography variant='h3' component="h3">로그인</Typography>
            <Stack>
                <TextInput onChange={(e) => setId(e.target.value)} value={id}/>
                <TextInput onChange={(e) => setPwd(e.target.value)} value={pwd}/>
            </Stack>

            <Button>로그인</Button>
        </Box >
    )
}

export default Login;