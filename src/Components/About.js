import React from 'react'

const About = () => {
  return (
    <div name="about"
         className='w-full h-screen bg-gradient-to-b from-gray-800   to-blue-950 text-white'>

         <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>

             <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-pink-400'>About</p>
             </div>

               <p className='text-xl mt-14'>
               Highly motivated and detail oriented web developer with a
             strong foundation in full stack web development. Recently
             completed MERN stack development to expand my skills and
             knowledge in modern web technologies. Eager to contribute to a
             collaborative team, utilizing my creativity and problem solving
            abilities to develop engaging websites. Open to opportunities to
            learn and grow in the ever evolving field of Web development.

            </p>

         </div>
    </div>
  )
}

export default About