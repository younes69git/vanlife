import { useParams } from "react-router-dom";
import { useEffect , useState } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
const Van = () => {
  const {id} = useParams();
  const [van , setVan] = useState(null)
  const location = useLocation()
  const search = location.state?.search || ""
  const vansNames = location.state.types.join(" and ") || "all";
  console.log(vansNames)
    useEffect(()=>{
      fetch(`/api/vans/${id}`)
      .then(res => res.json())
      .then(data =>{
        setVan(data.vans)
      })
    },[id])
    const typesColors = {
      simple : "#E17654",
      luxury : "#161616" ,
      rugged : "#115E59"
    }
  return ( 
    <main className="details-van">
      <div className="container">
        <div className="go-back">
          <span>⬅</span>
          <Link 
            to={`..?${search}`}
            relative="path"
          >Back to {vansNames} vans</Link>
        </div>
        {van ? (<div key={van.id} className="van">
          <img src={van.imageUrl} alt="" />
          <span className="van-type" style={{backgroundColor : typesColors[van.type]}}>{van.type}</span>
          <h2>{van.name}</h2>
          <h3>${van.price}<span style={{fontSize:"14px"}}>/day</span></h3>
          <p>{van.description}</p>
          <button className="link-button">Rent this van</button> 
      </div>) : <h1>Loading...</h1>}
      </div>
    </main>
  );
}
export default Van;