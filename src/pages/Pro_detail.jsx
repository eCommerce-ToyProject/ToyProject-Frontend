import {
  Box,
  Button,
  NativeSelect,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import Apple from "../assets/images.jpg";
import CustomModal from "../components/CustomModal";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import ProductDetails from "../components/ProductDetails";
import OptionsSelect from "../components/OptionSelect";

const Prodetail = () => {
  const navigate = useNavigate();
  const [qty, setQty] = useState(1);
  const [modal, setModal] = useState(false);
  const [desc, setDesc] = useState("");
  const param = useParams();
  const [optVal1, setOptVal1] = useState([]);
  const [optVal2, setOptVal2] = useState([]);
  const [gImg, setGImg] = useState('')
  const [product, setProduct] = useState([]);

  useEffect(() => {
    axios
      .get(`/goods/goodsList/goodsDetail?id=${param.id}`)
      .then((response) => {
        setProduct(response.data);
        setGImg(response.data[0].gimg)
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const closeModal = () => {
    setModal(false);
  };

  const Order = () => {
    setModal(true);
    setDesc(`상품 몇개 주문 완료했습니다!`);
    navigate("/");
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
        <img src={`/assets/${gImg}`} alt="사과" style={{ width: 400, height: 400 }} />
      </Box>
      <Box sx={{ ml: 7, width: 450 }}>
        <ProductDetails
          name={product.length === 0 ? undefined : product[0].gname}
          price={product.length === 0 ? undefined : product[0].gprice}
        />
        <Box sx={{ mt: 20 }}>
          {optVal1.length > 0 && (<OptionsSelect options={optVal1} />)}
          {optVal2.length > 0 && (<OptionsSelect options={optVal2} />)}
          <form style={{ display: "flex", marginTop: 40 }}>
            <TextField
              sx={{
                "& .MuiInputBase-root": {
                  "&:hover fieldset": {
                    borderColor: "rgb(192, 192, 192);",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "black",
                    border: "0.5px solid black",
                  },
                },
                width: 55,
              }}
              value={qty}
              onChange={(e) => setQty(Number(e.target.value))}/>
            <Box sx={{ display: "grid", width: 65 }}>
              <Button
                onClick={() => setQty(qty + 1)}
                variant="contained"
                disableRipple>▲</Button>
              <Button
                onClick={() => {
                  if (qty === 1) {
                  } else {
                    setQty(qty - 1);
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
      {modal && <CustomModal closeModal={closeModal} msg={desc} />}
    </Box>
  );
};

export default Prodetail;
