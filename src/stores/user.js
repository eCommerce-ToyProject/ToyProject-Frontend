import {create} from "zustand/react";

const useUserStore = create((set) => ({
    userName: '',
    setUserName: (name) =>
        set(() => ({ userName: name })),
}))

export default useUserStore