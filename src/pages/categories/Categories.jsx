import './categories.css'
import { Link } from 'react-router-dom'
import Category from '../../components/Category'
import CategoriesData from '../../Data/CategoriesData'

const Categories = () => {
  return (
    <div className='cat'>
      <div className="top">
        <Link className="back link" to="/register"><i className="fa-solid fa-arrow-left"></i></Link>
        <h2>Choose Category</h2>
      </div>
      <div className="bottom">
        <div className="cat-container">
        {CategoriesData.map((cat, i) => (
          <Category cat={cat} key={i}/>
        )) }
      </div>
      </div>
    </div>
  )
}

export default Categories