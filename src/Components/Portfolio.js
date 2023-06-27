import React from 'react';



const Portfolio = () => {

    const portfolios = [
        {
            id:1,
            content:"AFC MAINTENANCE ENGINEER",
            company:"Chennai Metro Rail Limited at FSM",
            year:'2020-2023',
        },
        {
            id:2,
            content:"APPLICATION & MAINTENANCE ENGINEER",
            company:"IQ tech inspired solutions",
            year:'2019-2020',
        },
        {
            id:3,
            content:"JUNIOR QUALITY ENGINEER",
            company:"Avalon Technologies Private Limited",
            year:'2018-2019',
        },
       
    ]

  return (
    <div name="experience"
        className='bg-gradient-to-b from-blue-950 to-gray-800 w-full text-white md:h-screen'>
        
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-pink-400'> Experience </p>

            </div>

            <div className=' grid sm:grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-6 px-12 sm:px-0 '>

            {portfolios.map(({id, content, year,company}) => (

           
                
                <div key={id} className='shadow-md shadow-gray-600 rounded-lg pt-10 hover:scale-105 duration-500'>

                   <p className='pl-11 font-bold text-2xl '>{content}</p>
                   <p className=' pl-11 text-gray-400'>{company}</p>

                   <div className='flex justify-center items-center '>
                    <p className='mt-6 py-4 font-bold'>{year}</p>
                </div> 
                </div>

           
            ))}
    
            </div>
        </div>
    </div>
  )
}

export default Portfolio