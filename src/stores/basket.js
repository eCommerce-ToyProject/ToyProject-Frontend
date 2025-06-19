import {create} from "zustand/react";

const useBasketStore = create((set) => ({
    basket: [],
    setBasket: (newMemo) =>
        set((prev) => ({
            setMemo: [...prev.basket, newMemo],
        })),
}))

export default useBasketStore