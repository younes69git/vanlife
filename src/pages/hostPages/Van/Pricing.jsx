import { useOutletContext } from "react-router-dom";
const Pricing = () => {
  const vanData = useOutletContext()
  return ( 
    <h1>${vanData.price}<span style={{fontWeight:"initial" , fontSize:"18px"}}>/day</span></h1>
  );
}

export default Pricing;