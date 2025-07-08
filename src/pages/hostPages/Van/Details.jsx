import { useOutletContext } from "react-router-dom";
const Details = () => {
  const vanData = useOutletContext()
  return ( 
    <div className="all-info">
      <p><span className="bold-text">Name</span>: {vanData.name}</p>
      <p><span className="bold-text">Category</span>: {vanData.type}</p>
      <p><span className="bold-text">Description</span>: {vanData.description}</p>
      <p><span className="bold-text">Visibility</span>: public</p>
    </div>
  );
}
export default Details;