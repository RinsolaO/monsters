import React from "react";
import "./Searchbox.css";
const Searchbox = ({ onChange, className, placeholder }) => {
  return (
    <div>
      <input
        className={className}
        type="search"
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  );
};

export default Searchbox;
