import { ArrowForwardIosOutlined } from '@material-ui/icons'
import Accordion from '../accordion/Accordion'
import Offers from '../offers/Offers'
import './register.scss'
import RegNav from './RegNav'

function Register() {
  return (
    <> 
      <div className='register'>
        <RegNav/>
        <div className="container">
          <h1>Unlimited movies, TV</h1>
          <h1>shows, and more.</h1>
          <p>Watch anywhere. Cancel anytime.</p>
          <div className="ready">
            Ready to watch? Enter your email to create or restart your membership.
          </div>
          <form action="">
            <input type="text" placeholder="Email address" name="" id="" />
            <button>Get Started <ArrowForwardIosOutlined/></button>
          </form>
        </div>
      </div> 
      <Offers/>
      <Accordion/>
    </>
 
  )
}

export default Register