import Featured from '../../featured/Featured'
import List from '../../list/List'
import Nav from '../../Navbar/Nav'
import '../Home/Home.scss'
function Home() {

  return (
    <div className='home'>
        <Nav/>
        <Featured type='movies'/>
        <List/>
        <List/>
        <List/>
    </div>
  )
}

export default Home