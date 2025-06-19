import React from "react";
import { BsCart } from 'react-icons/bs';

const CartIcon = ({ itemCount = 1 }) => {
    return (
        <div style={{ position: "relative", display: "inline-block" }}>
            <BsCart size={42} style={{ color: 'black' }} />

            {itemCount > 0 && (
                <span
                    style={{
                        position: "absolute",
                        top: -5,
                        right: -5,
                        backgroundColor: "red",
                        color: "white",
                        borderRadius: "50%",
                        padding: "2px 6px",
                        fontSize: 12,
                        fontWeight: "bold",
                        minWidth: 20,
                        textAlign: "center",
                    }}
                >
          {itemCount}
        </span>
            )}
        </div>
    );
};

export default CartIcon;
