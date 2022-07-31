import { Link } from 'react-router-dom'
import './regnav.scss'

function RegNav() {
  return (
    <div className='regnav'>
        <Link to='/' className="left">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png" alt="" />
        </Link>
        <div className="right">
            <button>Sign In</button>
        </div>
    </div>
  )
}

export default RegNav