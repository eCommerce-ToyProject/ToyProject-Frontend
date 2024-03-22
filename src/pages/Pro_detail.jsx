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

const Prodetail = () => {
  const navigate = useNavigate();
  const [qty, setQty] = useState(1);
  const [modal, setModal] = useState(false);
  const [desc, setDesc] = useState("");
  const param = useParams();
  let list = {
    optVal1: [],
    optVal2: [],
  };

  const [product, setProduct] = useState([]);

  useEffect(() => {
    axios
      .get(`/goods/goodsList/goodsDetail?id=${param.id}`)
      .then((response) => {
        setProduct(response.data);
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

  return (
    <Box sx={{ display: "flex" }}>
      <Box>
        <img src={Apple} alt="사과" style={{ width: 400, height: 400 }} />
      </Box>
      <Box sx={{ ml: 7, width: 450 }}>
        <Typography sx={{ wordBreak: "break-all" }} variant="h5" component="h5">
          {product.length === 0 ? undefined : product[0].gname}
        </Typography>
        <Typography
          sx={{ color: "#ae0000", mt: 3 }}
          variant="h5"
          component="h5"
        >
          {product.length === 0 ? undefined : product[0].gprice}원
        </Typography>

        <Box sx={{ mt: 20 }}>
          {product.length === 0
            ? undefined
            : product[0].goodsItem.map((item) => {
                list.optVal1.push(item.optVal1);
                list.optVal2.push(item.optVal2);
              })}
          {console.log(list.optVal1)}
          {list.optVal1.filter((item) => item !== null).length > 0 && (
            <NativeSelect>
              {list.optVal1.map(
                (item) => item && <option value={item}>{item}</option>
              )}
            </NativeSelect>
          )}
          {list.optVal2.filter((item) => item !== null).length > 0 && (
            <NativeSelect>
              {list.optVal2.map(
                (item) => item && <option value={item}>{item}</option>
              )}
            </NativeSelect>
          )}
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
              onChange={(e) => setQty(Number(e.target.value))}
            />
            <Box sx={{ display: "grid", width: 65 }}>
              <Button
                onClick={() => setQty(qty + 1)}
                variant="contained"
                disableRipple
              >
                ▲
              </Button>
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
