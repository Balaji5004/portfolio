import React from 'react';
import html from '../assets/html.png';
import css from '../assets/css.png';
import javascript from '../assets/javascript.png';
import react from '../assets/react.png';
import node from '../assets/node.png';
import MongoDB from '../assets/MongoDB.png';
import ExpressJS from '../assets/ExpressJS.png';
import github from '../assets/github.png';
import AWS from '../assets/AWS.png';
import MySQL from '../assets/MySQL.png';
import tailwind from '../assets/tailwind.png';

const Skills = () => {
    
    const techs = [
        {
            id:1,
            src: html,
            title: 'HTML',
            style: 'shadow-orange-500'

        },
        {
            id:2,
            src: css,
            title: 'CSS',
            style: 'shadow-blue-500'

        },
        {
            id:3,
            src: javascript,
            title: 'JavaScript',
            style: 'shadow-yellow-500'

        },
        {
            id:4,
            src: react,
            title: 'React JS',
            style: 'shadow-blue-600'

        },
        {
            id:5,
            src: node,
            title: 'Node JS',
            style: 'shadow-green-800'

        },
        {
            id:6,
            src: MongoDB,
            title: 'MongoDB',
            style: 'shadow-green-500'

        },
        {
            id:7,
            src: ExpressJS,
            title: 'Express JS',
            style: 'shadow-white'

        },
        {
            id:8,
            src: github,
            title: 'GitHub',
            style: 'shadow-gray-500'

        },
        {
            id:9,
            src: AWS,
            title: 'AWS',
            style: 'shadow-orange-300'

        },
        {
            id:10,
            src: MySQL,
            title: 'MySQL',
            style: 'shadow-blue-800'

        },
        {
            id:11,
            src: tailwind,
            title: 'TailWind',
            style: 'shadow-sky-400'

        },
    ]

  return (
    <div name="skills"
         className='bg-gradient-to-b from-gray-800 to to-blue-950 w-full h-full p-4 flex flex-col'>

        <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white'>
            <div>
                <p className='text-4xl font-bold border-b-4 border-pink-400 p-2 inline'>Skills</p>
            </div>
             
             <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-12 px-12 sm:px-0'>

                {techs.map(({id, src, title, style}) => (

                    <div key={id}
                         className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
                    <img src={src} alt='' className='w-20 mx-auto'/>
                    <p className='mt-4'>{title}</p>
                   </div>
    
                ))}
               

             </div>


        </div>
    </div>
  )
}

export default Skills