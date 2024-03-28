import {
  Box,
  Button,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import ProductDetails from "../components/ProductDetails";
import OptionsSelect from "../components/OptionSelect";

const ProDetail = () => {
  const navigate = useNavigate();
  const [qty, setQty] = useState(1);
  const param = useParams();
  const [optVal1, setOptVal1] = useState([]);
  const [optVal2, setOptVal2] = useState([]);
  const [gImg, setGImg] = useState('')
  const [product, setProduct] = useState([]);
  const [price, setPrice] = useState();

  useEffect(() => {
    axios
      .get(`/goods/goodsList/goodsDetail?no=${param.id}`)
      .then((response) => {
        setProduct(response.data);
        setGImg(response.data[0].gimg)
        setPrice(response.data[0].gprice)
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const Order = () => {
    navigate(`/productorder/${product[0].gno}`, { state: { price: price, qty: qty, name: product[0].gname, img: gImg } })
  };

  useEffect(() => {
    if (product.length !== 0) {
      const goodsItem = product[0].goodsItem;
      const optVal1Array = goodsItem.map((item) => item.optVal1).filter((item) => item !== null);
      const optVal2Array = goodsItem.map((item) => item.optVal2).filter((item) => item !== null);
      setOptVal1(optVal1Array);
      setOptVal2(optVal2Array);
    }
  }, [product]);
  // console.log(product)
  return (
    <Box sx={{ display: "flex" }}>
      <Box>
        <img src={`/assets/${gImg}`} alt={gImg} style={{ width: 400, height: 400 }} />
      </Box>
      <Box sx={{ ml: 7, width: 450 }}>
        <ProductDetails
          name={product.length === 0 ? undefined : product[0].gname}
          price={product.length === 0 ? undefined : price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
        />
        <Box sx={{ mt: 20 }}>
          {optVal1.length > 0 && (<OptionsSelect options={optVal1} />)}
          {optVal2.length > 0 && (<OptionsSelect options={optVal2} />)}
          <form style={{ display: "flex", marginTop: 40 }}>
            <input
              style={{
                width: 55,
                textAlign: 'center',
                fontSize: 20,
                backgroundColor: 'white',
                color: 'black',
                border: '1px solid #DEDEDE'
              }}
              value={qty}
              onChange={(e) => { 
                setQty(Number(e.target.value))
                }} disabled />
            <Box sx={{ display: "grid", width: 65 }}>
              <Button
                onClick={() => {
                  setQty(qty + 1);
                  setPrice(price + product[0].gprice);
                }}
                variant="contained"
                disableRipple>▲</Button>
              <Button
                onClick={() => {
                  if (qty === 1) {
                  } else {
                    setQty(qty - 1);
                    setPrice(price - product[0].gprice)
                  }
                }}
                variant="contained"
                disableRipple
              >
                ▼
              </Button>
            </Box>
            <Button
              sx={{ width: "70%", height: 55, ml: 3 }}
              onClick={Order}
              size="large"
              variant="contained"
              disableRipple
            >
              구매하기
            </Button>
          </form>
        </Box>
      </Box>
    </Box>
  );
};

export default ProDetail;
