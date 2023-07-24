import { useContext } from 'react';
import './resultpage.css'
import { Link } from 'react-router-dom';
import DataContext from '../../context/DataContext';

const ResultPage = () => {
  const {name, score, setScore, noOfQues} = useContext(DataContext);

  return (
    <div className='resultpage'>
        <div className="overlay">
            <div className="result-card">
            <Link className='close-btn' onClick={() => setScore(0)} to={"/"}><i className="fa-solid fa-times"></i></Link>
            <h3>Hi <span>{name}</span></h3>
            <p>Your results are in!</p>
            <div className="result-logo">
            <div>
                <div>
                <i className="fa-solid fa-brain"></i>
                </div>
            </div>
            </div>
            <h3>You got <b>{score && score}</b> from <b>{noOfQues && noOfQues}</b> questions</h3>
            <button onClick={() => setScore(0)}><Link to='/' className='link'>Back to home</Link></button>
            </div>
        </div>
    </div>
  )
}

export default ResultPage