import React, { useState } from "react";
import { useAsyncDebounce } from "react-table";
import "./GlobalFilter.css";

export const GlobalFilter = ({ filter, setFilter }) => {
  const [value, setValue] = useState(filter);
  const handleClick = useAsyncDebounce((value) => {
    setFilter(value || undefined);
  }, 400);
  
//   const handleClick=(filtervalue)=>{
// value===""?setFilter(value):setFilter(filtervalue || undefined)
//   }

const button={
  borderRadius: "10px",
  padding:"3px",
  fontSize: "15px",
margin:"3px",
}
  return (
    <>
      <div className="ui category search">
        <div className="ui icon input">
          <span>
            Customer Name:{" "}
            <input
              className="prompt"
              value={value || ""}
              type="text"
              onChange={(e) => {
                setValue(e.target.value);
                // onChange(e.target.value);
              }}
              placeholder="Search customer..."
            />
            <button style={button} onClick={()=>handleClick(value)}className="search icon">Search</button>
          </span>
        </div>
      </div>
    </>
  );
};
