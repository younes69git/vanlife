import { Link } from "react-router";
const About = () => {
  return ( 
    <main className="content-about">
      <img src="/public/kevin-schmid-Mta8r0bxhbo-unsplash.jpg" alt="" />
      <div className="container">
        <h1>Don’t squeeze in a sedan when you could relax in a van</h1>
        <p>Our mission is to enliven your road trip with the perfect travel van rental. Our vans are recertified before each trip to ensure your travel plans can go off without a hitch.
        (Hitch costs extra 😉)</p>
        <p>Our team is full of vanlife enthusiasts who know firsthand the magic of touring the world on 4 wheels.</p>
        <div className="explort">
          <h3>Your destination is waiting. <br />
          Your van is ready.
          </h3>
          <button><Link to="/vans">Explore our vans</Link></button>
        </div>
      </div>
    </main>
  );
}

export default About ;