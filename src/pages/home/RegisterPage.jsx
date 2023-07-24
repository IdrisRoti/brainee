import { useContext, useState } from "react";
import "./home.css"
import { Link, useNavigate } from "react-router-dom";
import DataContext from "../../context/DataContext";
import CategoriesData from './../../Data/CategoriesData';

const RegisterPage = () => {
  const {name, setName, diff, setDiff, noOfQues, setNoOfQues, cate, setCate, setQues} = useContext(DataContext);

  const [errorMsg, setErrorMsg] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if(name && noOfQues && cate && diff ) { 
      setErrorMsg(false)
      fetchQuestions(diff, cate, noOfQues)
      navigate("/quizpage")
    } else{
      setErrorMsg(true);
      return;
    }
  };

  const fetchQuestions = async (diff = "", cate = "", noOfQues= "") => {
    const res = await fetch(`https://opentdb.com/api.php?${ noOfQues && `&amount=${noOfQues}`}${ cate && `&category=${cate}`}${ diff && `&difficulty=${diff}`}&type=multiple`);
    const data = await res.json();
    setQues(data.results);                 
}

  return (
    <div className='register'>
      <div className="top">
      <Link to="/" className="link"><div className="logo"><span>brainee</span> <i className="fa-solid fa-brain"></i></div></Link>
        <h2>Lets play</h2>
      </div>
      <div className="bottom">
        {errorMsg && <p style={{color:"red"}}>Please fill all inputs</p>}
        <form >
          <label>Your Name:</label>
          <input type="text" placeholder='Enter your name...' onChange={(e) => setName(e.target.value)}/>

          <label>Number of questions:</label>
          <input type="number" placeholder="min of 1 max of 50" max={50} min={1} onChange={(e) => setNoOfQues(e.target.value)}/>

          <label>Select Category:</label>
          <div className="difficulties">
            <select name="categories" onChange={(e) => setCate(e.target.value)}>
            <option value="9">Select Category</option>
              {CategoriesData.map((cat, i) => (
              <option key={i} value={cat.value}>{cat.category}</option>
              ))}
            </select>
          </div>

          <label>Select difficulty:</label>
          <div className="difficulties">
            <select name="diff" onChange={(e) => setDiff(e.target.value)}>
            <option value="easy">Select Difficulty</option>
              <option value="easy">Easy</option>
              <option value="medium">Medium</option>
              <option value="hard">Hard</option>
            </select>
          </div>
        <button type='submit' onClick={handleSubmit}>Enter <i className="fa-solid fa-arrow-right"></i></button>
      </form>
      </div>
    </div>
  )
}

export default RegisterPage