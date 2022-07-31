import { Add,ArrowForwardIosOutlined,CloseOutlined } from '@material-ui/icons'
import { useState } from 'react'
import { Data } from '../../data'
import './accordion.scss'

function Accordion() {
    const [clicked, setClicked] = useState(false)
    const [data] = useState(Data)

    const toggle = (index) => {
        if(clicked === index){
            return setClicked(null)
        }
        setClicked(index)
    }
  return (
    <div className='accordion-section'>
        <div className="acc-header">
            <h1>Frequently Asked Questions</h1>
        </div>

        <div className="acc-main">
            {
            data.map((item,index) =>(
                <div className={clicked === index ? "accrd show" : 'accrd'} key={index}>
                <header>
                    <p>{item.question}</p>
                    <div className="icon">
                        {clicked === index ?(<CloseOutlined className='ico' onClick={()=>toggle(index)}/>) :(<Add className='ico' onClick={()=>toggle(index)}/>)}
                    </div>
                </header>
                <main>
                    <p>{item.answer}</p>
                </main>
            </div>
            ))
            }
        </div>
        <div className="acc-bottom">
            <p>Ready to watch? Enter your email to create or restart your membership.</p>
            <form action="">
                <input type="text" placeholder="Email address" name="" id="" />
                <button>Get Started <ArrowForwardIosOutlined/></button>
            </form>
        </div>
    </div>
  )
}

export default Accordion