import { Link } from 'react-router-dom';
import './footer.scss'

function Footer() {
  return (
    <footer>
        <div className="footer-container">
            <Link to='/'>Questions? Contact us.</Link>
            <div className="links">
                <ul>
                    <li>FAQ</li>
                    <li>Investor Relations</li>
                    <li>Privacy</li>
                    <li>Speed Test</li>
                    <li>Netflix Nigeria</li>
                    <li><a href="https://nnamdiosuji.netlify.app/" className='cloned'>Cloned by Osuji Nnamdi Daniel</a></li>
                </ul>

                <ul>
                    <li>Help Center</li>
                    <li>Jobs</li>
                    <li>Cookie Preferences</li>
                    <li>Legal Notices</li>
                </ul>

                <ul>
                    <li>Account</li>
                    <li>Ways to Watch</li>
                    <li>Corporate Information</li>
                    <li>Only on Netflix</li>
                </ul>

                <ul>
                    <li>Media Center</li>
                    <li>Terms of Use</li>
                    <li>Contact Us</li>
                </ul>
            </div>
        </div>
    </footer>
  )
}

export default Footer