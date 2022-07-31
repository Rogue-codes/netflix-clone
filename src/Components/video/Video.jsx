import { ArrowBackOutlined } from '@material-ui/icons'
import { Link } from 'react-router-dom'
import './video.scss'

function Video() {
  return (
    <div className='video-container'>
        <Link to='/' className="top">
            <ArrowBackOutlined/>
            Home
        </Link>
        <video src="https://player.vimeo.com/external/433944538.sd.mp4?s=01521568a0488626d73b34243e27f74a789ea20b&profile_id=164&oauth2_token_id=57447761"
        className="video"
        autoPlay
        progress
        controls
        ></video>
    </div>
  )
}

export default Video