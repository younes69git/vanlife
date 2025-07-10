import React from "react";
import {useState , useEffect} from "react"
import { Link , NavLink, useSearchParams } from "react-router";


export function Vans () {
  const[vans , setVans] = useState([])
  const[searchParams , setSearchParams] = useSearchParams();
  const typeFilter = searchParams.getAll("type");
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

  // function to apply filtre to vans
  function handleAddNewParams(key , value) {
    setSearchParams((prevParams) => {
      const current = prevParams.getAll("type");
      const newParams = new URLSearchParams(prevParams);
      if(value === null) {
        newParams.delete(key);
      }else if (current.includes(value)){
        newParams.delete(key)
        current.filter(v => v !== value).forEach(v => {
          newParams.append(key , v);
        })
      }else {
        newParams.append(key , value)
      }
      return newParams;
    })
  }
  const typesVans = new Set(vans.map(van => van.type.toLowerCase()));
  const typesColors = {
    simple : "#E17654",
    luxury : "#161616" ,
    rugged : "#115E59"
  }
  const typesVansEl = [...typesVans].map(typeVan => {
    const filterStyles =  typeFilter.includes(typeVan) ? {backgroundColor : typesColors[typeVan] , color:"white"} : null
    return (
      // <NavLink 
      // style={filterStyles}
      // to={`?type=${typeVan}`}
      // >{typeVan}</NavLink>
      <button 
        key={typeVan}
        style={filterStyles}
        onClick={() => handleAddNewParams("type" , typeVan)}
      >{typeVan}</button>
    )
})
  const displayedVans = typeFilter.length > 0 ? vans.filter(van => typeFilter.includes(van.type.toLowerCase())) : vans ;
  const vansElement = displayedVans.map((van) => {
    return (
      <Link 
        key={van.id}
        to={van.id}
        state={{search : searchParams.toString() , types : typeFilter}}
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
          {typeFilter.length > 0
          ? <button 
              onClick={() => handleAddNewParams("type" , null)} 
              style={{textDecoration:"underline"}}
            >Clear filter</button> 
          : null}
        </div>
        <div className="vans">
          {vansElement}
        </div>
      </div>
    </main>
  );
}

export default Vans;