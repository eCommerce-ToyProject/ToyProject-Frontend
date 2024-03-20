import React from 'react'
import { Box, Grid } from '@mui/material';
import ProductCard from '../components/ProductCard';
import dress from '../assets/dress.jpg';
import skirt from '../assets/skirt.jpg';
import pants from '../assets/pants.jpg';
import jeans from '../assets/jeans.jpg';
import tshirt from '../assets/tshirt.jpg';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <Box>
            <Grid container direction="row" justifyContent="center">
                {/* <Link to={`/detail/${id}`}><Link> */}
                <Link to={`/detail`}><ProductCard title={"블랙 드레스"} price={"59,000"} img={dress}/></Link>
                <ProductCard title={"블랙 스커트"} price={"20,900"} img={skirt}/>
                <ProductCard title={"와이드 팬츠"} price={"24,900"} img={pants}/>
                <ProductCard title={"스트레이트 데님 팬츠"} price={"30,000"} img={jeans}/>
                <ProductCard title={"가성비 티셔츠"} price={"12,900"} img={tshirt}/>
            </Grid>
        </Box >
    )
}

export default Home;