import React from "react";
import {useState , useEffect} from "react"
import { Link } from "react-router";

export function Vans () {
  const[vans , setVans] = useState([])
  useEffect(()=>{
    const controller = new AbortController();
    fetch("/api/vans")
    .then(res => {
      if(res.ok) {
        return res.json()
      }
    })
    .then(data => {
      setVans(data.vans)
    })
    return controller.abort()
  },[])
  const vansElement = vans.map((van) => {
    const typesColors = {
      simple : "#E17654",
      luxury : "#161616" ,
      rugged : "#115E59"
    }
    return (
      <Link 
        
        to={`/vans/${van.id}`}
        aria-label={`View details for ${van.name} priced at $${van.price} with type ${van.type}`}
      >
        <div key={van.id} className="van">
            <img src={van.imageUrl} alt="" />
            <div>
              <span>{van.name}</span>
              <span>${van.price}<span style={{fontSize:"15px"}}>/day</span></span>
            </div>
            <span className="van-type" style={{backgroundColor : typesColors[van.type]}}>{van.type}</span>
        </div>
      </Link>
    )
  })
  return ( 
    <main className="content-vans">
      <div className="container">
        <h1>Explore our van options</h1>
        <div className="vans">
          {vansElement}
        </div>
      </div>
    </main>
  );
}

export default Vans;