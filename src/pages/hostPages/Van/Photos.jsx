import React from "react";
import { useOutletContext } from "react-router-dom";
const Photos = () => {
  const vanData = useOutletContext()
  return ( 
    <img style={{width:"100px",height:"100px",borderRadius:"7px"}} src={vanData.imageUrl} alt=""/>
  );
}
export default Photos;