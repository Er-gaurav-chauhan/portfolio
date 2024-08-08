import React from 'react'
import { Link } from 'react-router-dom'

function Intro() {
  return (
    <div>

      <p className='text-yellow-400'>Hello, welcome</p>


      <div className='mt-10'>
        <h1 className='text-4xl'>I am <span className='text-red-700 lemon-regular'>Shahreyar</span></h1>
      </div>


      <div className='mt-4'>
        a budding developer with experience in HTML, CSS, and JavaScript. I am also knowledgeable in C, Python, Java, and currently learning Android development and databases.
      </div>

      <Link to='/contact'><button className='border-2 p-2 rounded-lg bg-[#FACC15] text-black mt-8 hover:bg-slate-200 hover:font-black font-semibold'>Contact us</button></Link>
    </div>

  )
}



function Imag() {


  return (

    <div>
      <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXsPG5KCGKyPSIPH0Mo0Q2PudHAATfk6ndwVRBN4Hyq8eyb2cG6OORsYz0Ko7ABj3ub44&usqp=CAU' className='w-80 h-80 rounded-lg' />
    </div>

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
