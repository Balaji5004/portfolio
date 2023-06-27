import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { message } from 'antd';

const Contact = () => {

      const form = useRef();
    
      const sendEmail = (e) => {
        e.preventDefault();   
        setTimeout (() =>{
         message.success('Thank You👍')
        },1000);
    
        emailjs.sendForm('service_e63epug', 'template_yoxbz1r', form.current, 'hCbpyWay0u_HphwKA')
          .then((result) => {
              console.log(result.text);
              console.log("message send");
          }, (error) => {
              console.log(error.text);
          });
      };
   


  return (
    <div name='contact'
        className='w-full h-full bg-gradient-to-b from-blue-950 via-black to-gray-800 text-white'>

        <div className='flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full'>

            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-pink-400'>Contact</p>
                <p className='py-6'>Submit the form below to get in touch with me</p>
            </div>
              
              <div className='flex justify-center items-center'>

              <form ref={form} onSubmit={sendEmail} className='flex flex-col w-full md:w-1/2'>

              <input type="text" name="user_name"  placeholder= 'Enter your name'
                     className='pg-2 bg-transparent border-2 rounded-md text-white focus:outline-none'/>
              
              <input type="email" name="user_email"  placeholder='Enter your email'
                     className=' my-4 pg-2 bg-transparent border-2 rounded-md text-white focus:outline-none' />

              <textarea name="message" placeholder='Enter your message' rows="10"
                        className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'/>
              <input type="submit" value="Send"
                     className='text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 my-8 mx-auto
                     flex items-center rounded-md hover:scale-110 duration-300' />
              </form>

              </div>

        </div>
    </div>
  )
}

export default Contact


