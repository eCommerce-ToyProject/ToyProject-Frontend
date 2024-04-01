// DeliveryContext.js
import React, { createContext, useContext, useState } from 'react';

const DeliveryContext = createContext(null);

export const DeliveryProvider = ({ children }) => {
  const [name, setName] = useState('');
  const [zipCode, setZipcode] = useState('');
  const [roadAddress, setRoadAddress] = useState('');
  const [detailAddress, setDetailAddress] = useState('');
  const [designation, setDesignation] = useState('');
  const [delno, setDelno] = useState();
  const [delModal, setDelModal] = useState(false);
  const [modal, setModal] = useState(false);
  const [addModal, setAddModal] = useState(false);
  const [msg, setMsg] = useState(false);

  return (
    <DeliveryContext.Provider value={{
      name,
      setName,
      zipCode,
      setZipcode,
      roadAddress,
      setRoadAddress,
      detailAddress,
      setDetailAddress,
      designation,
      setDesignation,
      delno,
      setDelno,
      delModal,
      setDelModal,
      modal,
      setModal,
      addModal,
      setAddModal,
      msg,
      setMsg
    }}>
      {children}
    </DeliveryContext.Provider>
  );
};

export const useDeliveryContext = () => useContext(DeliveryContext);
