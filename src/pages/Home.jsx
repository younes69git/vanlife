import img from "../../public/image 53.png"
const Home = () => {
  return ( 
    <>
      <main className="content"style={{  backgroundImage: `url(${img})`}}>
        <div className="container">
          <h1>You got the travel plans, we got the travel vans.</h1>
          <p>Add adventure to your life by joining the #vanlife movement. Rent the perfect van to make your perfect road trip.</p>
          <button>Find your van</button>
        </div>
      </main>
    </>
  );
}

export default Home;