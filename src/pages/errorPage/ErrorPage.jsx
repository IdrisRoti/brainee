import { Link } from "react-router-dom"
import "./errorPage.css"

const ErrorPage = () => {
  return (
    <div className='errorPage'>
       <div> <p style={{fontSize: "2rem"}}>An error occured :(</p>
        <p>but its not your fault</p>
        <Link className="link">Go back home</Link></div>
    </div>
  )
}

export default ErrorPage;