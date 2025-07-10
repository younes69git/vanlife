import {useState , useEffect} from "react"
import "../../server"
import { Link } from "react-router-dom"
const VanHost = () => {
  const [vans , setVans] = useState([])
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
  const vansElement = vans.map(van =>(
    <Link to={van.id}>
      <div className="van" key={van.id}>
        <img style={{width:"65px" , height:"65px" , borderRadius:"4px"}} src={van.imageUrl} alt="photo" />
        <div>
          <span>{van.name}</span>
          <span>{van.price}/day</span>
        </div>
      </div>
    </Link>
  ))
  return ( 
    <div className="vans">
      <h1>Your Listed Vans</h1>
      {vansElement}
    </div>
  );
}

export default VanHost;