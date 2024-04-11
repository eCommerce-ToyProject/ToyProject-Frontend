// DeliveryContext.js
import React, { createContext, useContext, useState } from 'react';

const LoginContext = createContext();

export const LoginProvider = ({ children }) => {
    const [loginId, setLoginId] = useState('');
    const [loginPwd, setLoginPwd] = useState('');
    const [isRemember, setIsRemember] = useState(false);
    const [id, setId] = useState('');
    const [pwd, setPwd] = useState('');
    const [pwdChk, setPwdChk] = useState('');
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [modal, setModal] = useState(false);
    const [desc, setDesc] = useState('');
    const [nav, setNav] = useState('');
    const [checkId, SetCheckId] = useState(false);

    return (
        <LoginContext.Provider value={{
            loginId,
            setLoginId,
            loginPwd,
            setLoginPwd,
            isRemember,
            setIsRemember,
            id,
            setId,
            pwd,
            setPwd,
            pwdChk,
            setPwdChk,
            email,
            setEmail,
            name,
            setName,
            phone,
            setPhone,
            modal,
            setModal,
            desc,
            setDesc,
            nav,
            setNav,
            checkId,
            SetCheckId
        }}>
            {children}
        </LoginContext.Provider>
    );
};

export const useLoginContext = () => useContext(LoginContext);
