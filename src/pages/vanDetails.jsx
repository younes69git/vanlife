import { useParams } from "react-router-dom";
import { useEffect , useState } from "react";
const Van = () => {
  const {id} = useParams();
  const [van , setVan] = useState(null)
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