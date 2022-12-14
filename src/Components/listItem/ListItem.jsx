import { Add, PlayArrow, ThumbDownOutlined, ThumbUpAltOutlined } from '@material-ui/icons'
import { useState } from 'react'
import'./listItem.scss'

function ListItem({index}) {
  const [isHovered, setIsHovered] = useState(false)
  return (
    <div className='listItem'
    style={{ left: isHovered && index * 255 - 50 + index * 2.5 }}
    onMouseover={() => setIsHovered(true)}
    onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src="https://occ-0-1723-92.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABU7D36jL6KiLG1xI8Xg_cZK-hYQj1L8yRxbQuB0rcLCnAk8AhEK5EM83QI71bRHUm0qOYxonD88gaThgDaPu7NuUfRg.jpg?r=4ee"
        alt=""
      />
      <div className="info">
        <div className="icons">
          <PlayArrow className="icon" />
          <Add className="icon" />
          <ThumbUpAltOutlined className="icon" />
          <ThumbDownOutlined className="icon" />
        </div>
        <div className="topInfo">
            <span>1 hour 14 mins</span>
            <span className="limit">+16</span>
            <span>1999</span>
        </div>
        <div className="genre">Action</div>
      </div>

    </div>
  )
}

export default ListItem