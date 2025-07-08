import { NavLink } from "react-router-dom";
import { Outlet } from "react-router-dom";
const LayoutHost = () => {
  const activeStyles= {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "black" 
  }
  return ( 
    <>
    <main className="host-content">
      <div className="container">
        <div className="second-nav">
          <ul>
            <li><NavLink 
              style={({isActive}) => isActive ? activeStyles : null}
              end
              to={"."}>Dashboard</NavLink></li>
            <li><NavLink 
              style={({isActive}) => isActive ? activeStyles : null}
              to={"income"}>Income</NavLink></li>
            <li><NavLink 
              style={({isActive}) => isActive ? activeStyles : null}
              to={"vansHost"}>Vans</NavLink></li>
            <li><NavLink 
              style={({isActive}) => isActive ? activeStyles : null}
              to={"review"}>Reviews</NavLink></li>
          </ul>
        </div>
        <Outlet/>
      </div>
    </main>
    </>
  );
}

export default LayoutHost;