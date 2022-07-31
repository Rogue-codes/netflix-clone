import { ArrowBackIosOutlined, ArrowForwardIosOutlined } from '@material-ui/icons'
import { useRef, useState } from 'react'
import '../list/list.scss'
import ListItem from '../listItem/ListItem'

function List() {
    const listRef = useRef()
    const [isClicked, setIsClicked] = useState(false)
    const[listIndex,setListIndex] = useState(0)
    const handleClick = (direction) =>{
        setIsClicked(true)
        let distance = listRef.current.getBoundingClientRect().x - 50
        if(direction === 'left' && listIndex > 0){
            setListIndex(listIndex - 1)
            listRef.current.style.transform = `translateX(${230 + distance}px)`
        }
        if(direction === 'right' && listIndex < 7){
            setListIndex(listIndex + 1)
            listRef.current.style.transform = `translateX(${-230 + distance}px)`
        }
    }
  return (
    <div className='list'>
        <div className="listTitle">Continue to watch</div>
        <div className="wrapper">
            <ArrowBackIosOutlined className='sliderArrow left' 
            style={{display: !isClicked && 'none'}} onClick={()=>handleClick('left')}/>
            <div className="container" ref={listRef}>
                <ListItem index={0}/>
                <ListItem index={1}/>
                <ListItem index={2}/>
                <ListItem index={3}/>
                <ListItem index={4}/>
                <ListItem index={5}/>
                <ListItem index={6}/>
                <ListItem index={7}/>
                <ListItem index={8}/>
                <ListItem index={9}/>
            </div>
            <ArrowForwardIosOutlined className='sliderArrow right' onClick={()=>handleClick('right')}/>
        </div>
    </div>
  )
}

export default List