import React from 'react'
import HeroImage from '../assets/avator.png';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';
import { Link } from 'react-scroll';

const Home = () => {
  return (
    <div name="home" 
         className='h-screen w-full bg-gradient-to-b from-blue-950 via-black to-gray-800'>

       <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row '>

          <div className='flex flex-col justify-center h-full text-center sm:text-left'>
            <h1 className='text-4xl sm:text-7xl font-bold text-white'> I'm P.Balaji </h1>
            <h3 className='text-2xl sm:text-4xl font-bold text-gray-300'>Full stack Web Developer | MERN</h3><br></br>
            <p className='text-gray-400 py-3 pe-4'>
            Highly motivated and enthusiastic full stack web developer seeking
            an entry-level position to utilize my skills in front-end and back-end development. 
            Passionate about creating dynamic and user-friendly web applications while continuously 
            learning and staying up-to-date with emerging technologies.
            </p>

            <div>
                <Link to='skills'
                      smooth duration={500}
                     className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md 
                      bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer font-bold'>

                    Skills

                    <span className='group-hover:rotate-90 duration-300'> < MdOutlineKeyboardArrowRight  size={25} className='ml-1'/> </span>
                </Link>
            </div>
          </div>
          
          <div>
           <img src={HeroImage} alt='my profile' className='rounded-2xl mx-auto w-1/3 md:w-full'/>
          </div>

       </div>
    </div>
  )
}

export default Home