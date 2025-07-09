import React from "react";
import {useState , useEffect} from "react"
import { Link , NavLink, useSearchParams } from "react-router";

export function Vans () {
  const[vans , setVans] = useState([])
  const[searchParams , setSearchParams] = useSearchParams();
  const typeFilter = searchParams.get("type");
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

  const typesVans = new Set(vans.map(van => van.type.toLowerCase()));
  const typesColors = {
    simple : "#E17654",
    luxury : "#161616" ,
    rugged : "#115E59"
  }
  const typesVansEl = [...typesVans].map(typeVan => {
    const filterStyles = typeVan === typeFilter ? {backgroundColor : typesColors[typeFilter] , color:"white"} : null
    return (
      <NavLink 
      end
      style={filterStyles}
      to={`?type=${typeVan}`}
      >{typeVan}</NavLink>
    )
})
  const displayedVans = typeFilter ? vans.filter(van => van.type.toLowerCase() === typeFilter) : vans ;
  const vansElement = displayedVans.map((van) => {
    return (
      <Link 
        key={van.id}
        to={`/vans/${van.id}`}
        aria-label={`View details for ${van.name} priced at $${van.price} with type ${van.type}`}
      >
        <div  className="van">
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
        <div className="filter-buttons">
          <div>
            {typesVansEl}
          </div>
          <Link to="." style={{textDecoration:"underline"}}>Clear filter</Link>
        </div>
        <div className="vans">
          {vansElement}
        </div>
      </div>
    </main>
  );
}

export default Vans;