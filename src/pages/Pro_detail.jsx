import { Box, Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import ProductDetails from "../components/ProductDetails";
import OptionsSelect from "../components/OptionSelect";
import CustomModal from '../components/CustomModal';
import { useSelector } from "react-redux";

const ProDetail = () => {
  const navigate = useNavigate();
  const param = useParams();
  const name = useSelector(state => state.name);
  const [qty, setQty] = useState(1);
  const [optVal1, setOptVal1] = useState([]);
  const [optVal2, setOptVal2] = useState([]);
  const [gImg, setGImg] = useState('')
  const [product, setProduct] = useState([]);
  const [price, setPrice] = useState();
  const [selectOpt1, setSelectOpt1] = useState('');
  const [selectOpt2, setSelectOpt2] = useState('');
  const [modal, setModal] = useState(false)
  const [msg, setMsg] = useState("")

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
  }, [param.id]);

  useEffect(() => {
    if (product.length !== 0) {
      const goodsItem = product[0].goodsItem;
      const optVal1Array = goodsItem.map((item) => item.optVal1).filter((item) => item !== null);
      const optVal2Array = goodsItem.map((item) => item.optVal2).filter((item) => item !== null);
      setOptVal1(optVal1Array);
      setOptVal2(optVal2Array);
    }
  }, [product]);

  const handleOpt1 = (e) => {
    setSelectOpt1(e.target.value)
  }

  const handleOpt2 = (e) => {
    setSelectOpt2(e.target.value)
  }

  const closeModal = () => {
    setModal(false)
  }

  const Order = () => {
    if (name !== undefined) {
      let missingOptions = [];
      if (optVal1.length > 0 && selectOpt1 === '') {
        missingOptions.push('옵션1');
      }
      if (optVal2.length > 0 && selectOpt2 === '') {
        missingOptions.push('옵션2');
      }
      if (missingOptions.length > 0) {
        setModal(true);
        setMsg(`${missingOptions.join('과 ')}을(를) 선택해 주세요.`);
      } else {
        navigate(`/productorder/${product[0].gno}`,
          {
            state: {
              price: price,
              qty: qty,
              name: product[0].gname,
              img: gImg,
              gno: product[0].gno,
              opt1: selectOpt1,
              opt2: selectOpt2
            }
          }
        )
      }
    } else {
      navigate('/login')
    }
  }

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
          {optVal1.length > 0 && (<OptionsSelect handleOpt={handleOpt1} handleOpt2={handleOpt2} options={optVal1} />)}
          {optVal2.length > 0 && (<OptionsSelect handleOpt={handleOpt2} options={optVal2} />)}
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
      {
        modal ? <CustomModal closeModal={closeModal} msg={msg} /> : null
      }
    </Box>
  );
};

export default ProDetail;
