import {create} from "zustand/react";

const useBasketStore = create((set) => ({
    basket: [],
    setBasket: (newMemo) =>{
        console.log(newMemo)
        return set((prev) => ({
            basket: [...prev.basket, newMemo],
        }))}
}))

export default useBasketStore