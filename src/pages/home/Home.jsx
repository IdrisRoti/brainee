import { Link } from "react-router-dom";
import './home.css'

const Home = () => {
  return (
    <div className="home-page">
      <div className="logo"><span>brainee</span> <i className="fa-solid fa-brain"></i></div>
      <h2> Lets test your Knowledge</h2>
      <Link to='/register' className="link">START QUIZ</Link>
    </div>
  );
};

export default Home;
