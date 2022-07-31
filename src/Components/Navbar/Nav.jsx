import React, { useState } from 'react'
import '../Navbar/nav.scss'
import {ArrowDropDown, Menu, Notifications, Search} from '@material-ui/icons';
import { Link } from 'react-router-dom';
import { useTransition, animated } from 'react-spring'

function Nav() {
    const [scroll, setScroll] = useState(false)

    window.onscroll = () => {
        setScroll(window.pageYOffset === 0 ? false : true)
        return window.onscroll(null)
    }

    const [showMenu, setShowMenu]= useState(false)

    const maskTransitions = useTransition(showMenu, {
        from: { opacity: 0 },
        enter: { opacity: 1 },
        leave: { opacity: 0 },
        reverse: showMenu,
        delay: 200,
        // config: config.molasses,
        // onRest: () => set(!show),
    })
  
    const menuTransitions = useTransition(showMenu, {
      from: { opacity: 0, transform: "translateX(-100%)"},
      enter: { opacity: 1, transform: "translateX(0%)" },
      leave: { opacity: 0, transform: "translateX(-100%)" },
      reverse: showMenu,
      delay: 200,
        // config: config.molasses,
      // onRest: () => set(!show),
    })

  return (
    <div className={scroll ? 'navbar dark' : 'navbar'}>
        <div className="left">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png" alt="" />
            <Link to='/register'>Homepage</Link>
            <Link to='/'>Series</Link>
            <Link to='/'>Movies</Link>
            <Link to='/'>New and Popular</Link>
            <Link to='/'>My list</Link>
        </div>

        <div className="right">
            <Search/>
            <p>KIDS</p>
            <Notifications className='notification'/>
            <img src="https://images.pexels.com/photos/12973509/pexels-photo-12973509.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" />
            <div className="profile">
                <ArrowDropDown/>
                <div className="options">
                    <span>
                        Settings
                    </span>

                    <span>
                        Logout
                    </span>
                </div>
            </div>
        </div>

        <Menu className='menu' onClick={()=>setShowMenu(!showMenu)}/>

        {
            maskTransitions(
            (styles, item) => item && <animated.div style={styles} className='firstAni' onClick={()=> setShowMenu(false)}>

            </animated.div>
            )
        }

        {
            menuTransitions(
            (styles, item) => item && <animated.div style={styles} className='animate'>
                <Link to='/register' onClick={()=> setShowMenu(false)}>Homepage</Link>
                <Link to='/' onClick={()=> setShowMenu(false)}>Series</Link>
                <Link to='/' onClick={()=> setShowMenu(false)}>Movies</Link>
                <Link to='/' onClick={()=> setShowMenu(false)}>New and Popular</Link>
                <Link to='/' onClick={()=> setShowMenu(false)}>My list</Link>
            </animated.div>
            )
      }
    </div>
  )
}

export default Nav