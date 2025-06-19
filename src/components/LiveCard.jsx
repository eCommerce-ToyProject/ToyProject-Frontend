import React from 'react';
import { Card, CardContent, CardMedia, Chip, Typography, Avatar, Box, Stack } from '@mui/material';
import { MdLiveTv } from 'react-icons/md';

const LiveCard = ({ data }) => {
  return (
    <Card sx={{ width: 320, borderRadius: 2, boxShadow: 3 }}>
      {/* 썸네일 이미지 */}
      <Box sx={{ position: 'relative' }}>
        <CardMedia
          component="img"
          height="180"
          image="/path-to-your-thumbnail.jpg" // 썸네일 이미지 경로
          alt="stream thumbnail"
        />

        {/* LIVE 뱃지 */}
        <Box sx={{
          position: 'absolute',
          top: 8,
          left: 8,
          backgroundColor: 'red',
          color: 'white',
          padding: '2px 8px',
          borderRadius: '4px',
          fontSize: 12,
          display: 'flex',
          alignItems: 'center',
          gap: 0.5
        }}>
          <MdLiveTv size={14} />
          <span>LIVE 64명</span>
        </Box>
      </Box>

      {/* 카드 하단 콘텐츠 */}
      <CardContent sx={{ display: 'flex', gap: 1 }}>
        {/* 아바타 */}
        <Avatar src="/path-to-avatar.jpg" sx={{ width: 48, height: 48 }} />

        {/* 텍스트 콘텐츠 */}
        <Box>
          <Typography variant="subtitle1" fontWeight="bold" noWrap>
            [롯데] 미끄러지나 절벽 끝자락 붙잡고 버티느냐 vs 키움
          </Typography>
          <Typography variant="body2" color="text.secondary" noWrap>
            구아에요
          </Typography>

          {/* 태그 */}
          <Stack direction="row" spacing={1} mt={1} flexWrap="wrap">
            <Chip size="small" label="유입환영" />
            <Chip size="small" label="버튜버" />
            <Chip size="small" label="롯데자이언츠" />
            <Chip size="small" label="야구" />
          </Stack>
        </Box>
      </CardContent>
    </Card>
  );
};

export default LiveCard;
