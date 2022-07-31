import { InfoOutlined, PlayArrow } from '@material-ui/icons'
import React from 'react'
import { Link } from 'react-router-dom';
import '../featured/featured.scss';

function Featured({type}) {
  return (
    <div className='featured'>
        {
            type && (<div className='categories'>
                <span>{type ==='movies' ? 'Movies' : "Series"}</span>
                <select name="genre" id="genre">
                <option>Genre</option>
                <option value="adventure">Adventure</option>
                <option value="comedy">Comedy</option>
                <option value="crime">Crime</option>
                <option value="fantasy">Fantasy</option>
                <option value="historical">Historical</option>
                <option value="horror">Horror</option>
                <option value="romance">Romance</option>
                <option value="sci-fi">Sci-fi</option>
                <option value="thriller">Thriller</option>
                <option value="western">Western</option>
                <option value="animation">Animation</option>
                <option value="drama">Drama</option>
                <option value="documentary">Documentary</option>

                </select>
            </div>)
        }
        <img src="https://www.magneticmag.com/.image/t_share/MTg2MTE0MzkzNjMxNjMxMDQz/matrix-resurrections_sdtk_cover_01_3000px_rgb_300dpi.jpg" alt="" />
        <div className="info">
            <img src="https://occ-0-1432-1433.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABUZdeG1DrMstq-YKHZ-dA-cx2uQN_YbCYx7RABDk0y7F8ZK6nzgCz4bp5qJVgMizPbVpIvXrd4xMBQAuNe0xmuW2WjoeGMDn1cFO.webp?r=df1" alt="" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis culpa mollitia sapiente sit incidunt architecto vel doloremque, soluta eaque et a quaerat illo fugiat sint nam. Exercitationem id eos saepe?</p>
            <div className="more">
               <Link to='/video' className="play">
                    <PlayArrow/>
                    <span>Play</span>
               </Link>
                <button className="moreInfo">
                    <InfoOutlined/>
                    <span>More</span>
                </button>
            </div>
        </div>
    </div>
  )
}

export default Featured