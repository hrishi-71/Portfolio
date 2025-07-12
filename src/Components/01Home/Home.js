import './Home.css'
import { ReactTyped } from 'react-typed'


const Home = () => {
  return (
    <div className='px-5' id='home'>
      <h1 className='myself'>Hi, I'm Hrishikesh Dhanawade</h1>
      <ReactTyped
        className='home-heading'
        strings={['React Developer', 'Frontend Enthusiast', 'UI/UX Builder']}
        typeSpeed={40}
        backSpeed={50}
        loop
        />
      <p className='home-desc mt-5'>Crafting seamless web experiences through clean code, modern design, and a passion for turning ideas into reality.</p>
    </div>
  )
}

export default Home
