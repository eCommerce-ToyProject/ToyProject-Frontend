import React from "react";

const CartItem = ({ checked, onCheckChange, imageUrl, title, description, arrivalDate, price, originalPrice = 0, discountLabel, onDelete }) => {
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
      </div>

      {/* 삭제 */}
      <button
        onClick={onDelete}
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
