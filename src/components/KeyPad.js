import React from "react";
import useKeys from "../utils/useKeys";
import Key from './Key.js'


const KeyPad = ({performCalculation}) => {
  const keys = useKeys();
  return (
    <div style={{ width: "100%" }}>
      <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
        {
            keys.map((key) => {
//                return <Key data={key} />
                  console.log(keys.value)
                  return <Key data={key} performCalculation={performCalculation}/>
            })
        }
      </div>
    </div>
  );
};

export default KeyPad;