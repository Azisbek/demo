import React from "react";

const Input = ({ type, onChange, value }) => {
  return (
    <>
      <input type={type} onChange={onChange} placeholder="hoho" value={value} />
    </>
  );
};

export default Input;
