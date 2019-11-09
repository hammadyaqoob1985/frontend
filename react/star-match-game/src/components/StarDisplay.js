import React from "react"
import utils from "../math-utils"
const StarsDisplay = (props) => (
    <>
   {utils.range(1,props.starNumber).map(starId => 
            <div key= {starId} className= "star" />
            )}
      </>
  );
  export default StarsDisplay;