import { useParams } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { useEffect , useState } from "react";
import { Outlet } from "react-router-dom";
import "../../../server"
const VanHD = () => {
  const[van , setVan] = useState([])
  const {id} = useParams()
  useEffect(()=>{
    const controller = new AbortController();
    fetch(`/api/host/vansHost/${id}`)
    .then(res => {
      if(res.ok) {
        return res.json()
      }
    })
    .then(data => {
      setVan(data.vans[0])
    })
    return controller.abort()
  },[id])
  const carTypeColor = {
    simple : "#E17654",
    luxury : "#161616" ,
    rugged : "#115E59"
  }
  const activeStyles= {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "black" 
  }
  return ( 
    <>
      <div className="go-back">
        <span>⬅</span>
        <NavLink 
          to={".."}
          relative="path"
        >Back to all vans</NavLink>
      </div>
      {van && <div className="van-details" key={van.hostId}>
        <div className="van-nature">
          <img src={van.imageUrl} alt="" />
          <div>
            <span className="van-type" style={{backgroundColor : carTypeColor[van.type]}}>{van.type}</span>
            <h2>{van.name}</h2>
            <h3>${van.price} <span style={{fontSize:"15px" , fontWeight:"initial"}}>/day</span></h3>
          </div>
        </div>
        <nav>
          <NavLink
            end
            style={({isActive}) => isActive ? activeStyles : null}
            to={`.`}>Details</NavLink>
          <NavLink
            style={({isActive}) => isActive ? activeStyles : null}
            to={`pricing`}>Pricing</NavLink>
          <NavLink
            style={({isActive}) => isActive ? activeStyles : null}
            to={`photo`}>Photos</NavLink>
        </nav>
        <Outlet context={van}/>
      </div>}
    </>
  );
}
export default VanHD;