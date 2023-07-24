import { useContext } from 'react';
import DataContext from '../context/DataContext';
import './category.css'


const Category = ({cat}) => {
  const {name, diff, noOfQues, cate, setCate} = useContext(DataContext);

  const handleCate = (value)=> {
    setCate(value)

    console.log(name, diff, noOfQues, cate);
    // console.log(cate);
  }

  return (
    <div className='category'
     style={{backgroundColor: cat.color}}
      onClick={() => handleCate(cat.value)}>
        <div className="cat-icon" style={{color: cat.color}}>
          <i className="fa-solid fa-paperclip"></i>
          </div>
        <h2 className="cat-name">{cat.category}</h2>
    </div>
  )
}

export default Category