import React, { useCallback } from "react";
import axios from "axios";
import {useSelector} from "react-redux";

const CartItem = ({ 
  checked, 
  onCheckChange, 
  imageUrl, 
  title, 
  description, 
  arrivalDate, 
  price, 
  cartItemId,
  originalPrice = 0, 
  discountLabel, 
  quantity = 1, // 기본값 1
  onQuantityChange, // 수량 변경 콜백
  onDelete, 
}) => {
  const name = useSelector(state => state.name);

  // 수량 증가
  const handleIncrement = () => {
    if (onQuantityChange) {
      onQuantityChange(quantity + 1);
    }
  };

  // 수량 감소
  const handleDecrement = () => {
    if (quantity > 1 && onQuantityChange) {
      onQuantityChange(quantity - 1);
    }
  };

  // 직접 입력 처리
  const handleQuantityInputChange = (e) => {
    const value = parseInt(e.target.value) || 1;
    if (value > 0 && onQuantityChange) {
      onQuantityChange(value);
    }
  };


  

  return (
    <div style={{ display: "flex", alignItems: "flex-start", borderBottom: "1px solid #ddd", padding: "10px 0" }}>
      {/* 체크박스 */}
      <input
        type="checkbox"
        checked={checked}
        onChange={onCheckChange}
        style={{ marginRight: 8, marginTop: 8 }}
      />

      {/* 이미지 */}
      <img
        src={imageUrl}
        alt="상품"
        style={{ width: 80, height: 80, objectFit: "cover", marginRight: 12, borderRadius: 4 }}
      />

      {/* 정보 */}
      <div style={{ flex: 1 }}>
        <div style={{ fontSize: 14, fontWeight: 500 }}>{title}</div>
        <div style={{ fontSize: 13, color: "#555", marginTop: 4 }}>{description}</div>
        <div style={{ fontSize: 12, color: "#888", marginTop: 4 }}>{arrivalDate}</div>

        {/* 가격 영역 */}
        <div style={{ display: "flex", alignItems: "center", marginTop: 8 }}>
          {discountLabel && (
            <span style={{
              backgroundColor: "#e53935",
              color: "white",
              fontSize: 12,
              fontWeight: "bold",
              padding: "2px 6px",
              borderRadius: 4,
              marginRight: 6
            }}>
              {discountLabel}
            </span>
          )}
          <span style={{
            textDecoration: originalPrice ? "line-through" : "none",
            color: "#999",
            fontSize: 13,
            marginRight: 6
          }}>
            {originalPrice && `${originalPrice}원`}
          </span>
        </div>

        <div style={{ fontSize: 18, fontWeight: "bold", marginTop: 4 }}>
          {price}원
        </div>

        {/* 수량 조절 영역 */}
        <div style={{ 
          display: "flex", 
          alignItems: "center", 
          marginTop: 8,
          gap: 4
        }}>
          <span style={{ fontSize: 13, color: "#666", marginRight: 8 }}>수량:</span>
          
          {/* 감소 버튼 */}
          <button
            onClick={handleDecrement}
            disabled={quantity <= 1}
            style={{
              width: 24,
              height: 24,
              border: "1px solid #ddd",
              background: quantity <= 1 ? "#f5f5f5" : "white",
              borderRadius: 4,
              cursor: quantity <= 1 ? "not-allowed" : "pointer",
              fontSize: 14,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: quantity <= 1 ? "#ccc" : "#333"
            }}
          >
            -
          </button>

          {/* 수량 입력 */}
          <input
            type="number"
            value={quantity}
            onChange={handleQuantityInputChange}
            min="1"
            style={{
              width: 50,
              height: 24,
              textAlign: "center",
              border: "1px solid #ddd",
              borderRadius: 4,
              fontSize: 13
            }}
          />

          {/* 증가 버튼 */}
          <button
            onClick={handleIncrement}
            style={{
              width: 24,
              height: 24,
              border: "1px solid #ddd",
              background: "white",
              borderRadius: 4,
              cursor: "pointer",
              fontSize: 14,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#333"
            }}
          >
            +
          </button>
        </div>
      </div>

      {/* 삭제 */}
      <button
        onClick={()=>onDelete(cartItemId)}
        style={{
          background: "none",
          border: "none",
          color: "#888",
          cursor: "pointer",
          fontSize: 13,
          marginLeft: 8
        }}
      >
        삭제
      </button>
    </div>
  );
};

export default CartItem;