import React from 'react'
// import { Link } from 'react-router-dom'
import { Element } from 'react-scroll'

function Intro() {
  return (
    <Element name="about">
    <div>

      <p className='text-yellow-400'>Hello, welcome</p>


      <div className='mt-10'>
        <h1 className='text-4xl'>I am <span className='text-orange-500 lemon-regular'>Shahreyar</span></h1>
      </div>

      <div className='mt-4 text-xl text-gray-200'>
        a budding developer with experience in HTML, CSS, and JavaScript. I am also knowledgeable in C, Python, Java, and currently learning Android development and databases.
      </div>

      <button className='w-40 border-2 p-2 rounded-lg bg-[#FACC15] text-black mt-8 hover:bg-slate-200 hover:font-black font-semibold'>Contact us</button>
    </div>
    </Element>

  )
}



function Imag() {


  return (
    <>
     <div className=''>
      <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXsPG5KCGKyPSIPH0Mo0Q2PudHAATfk6ndwVRBN4Hyq8eyb2cG6OORsYz0Ko7ABj3ub44&usqp=CAU' className='w-80 h-80 rounded-lg object-fit absolute right-[152px] top-56' />
    </div>
<div className='border-solid border-yellow-500 w-72 h-80 border-[30px] rounded-3xl mt-2'></div>
   
    </>
  )

}


function About() {
  return (

    <div className='flex align-middle justify-center w-auto'>
      <div className='flex m-32'>
        <div className='m-10'><Intro /></div>

        <div><Imag /></div>
      </div>
    </div>
  );
}

export default About;
