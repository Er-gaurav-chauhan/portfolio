import React from 'react'

import { Element , Link} from 'react-scroll'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

function Intro() {
  return (
    








    <Element name="about">




      
    <div className='text-black bg-white h-dvh'>

      <p className='text-black'>Hello, welcome</p>


      <div className='mt-10'>
        <h1 className='text-4xl'>I am <span className='text-orange-500 lemon-regular'>Shahreyar</span></h1>
      </div>

      <div className='mt-4 text-xl text-black'>
        a budding developer with experience in HTML, CSS, and JavaScript. I am also knowledgeable in C, Python, Java, and currently learning Android development and databases.
      </div>

   <Link to='contact' smooth={true} duration={500}>   <button className='w-40 border-2 p-2 rounded-lg bg-black text-white mt-8 hover:bg-white hover:text-black hover:border-black hover:font-black font-semibold'>Contact us</button> </Link>
    </div>
    </Element>
    

  )
}



function Imag() {


  return (
    <>
     <div>
      <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXsPG5KCGKyPSIPH0Mo0Q2PudHAATfk6ndwVRBN4Hyq8eyb2cG6OORsYz0Ko7ABj3ub44&usqp=CAU' className='w-80 h-80 rounded-lg object-fit absolute right-[152px] top-56 drop-shadow-xl' />
    </div>
<div className='border-solid border-yellow-500 w-72 h-80 border-[30px] rounded-3xl mt-2'></div>
   
    </>
  )

}


function About() {
  return (

    <div className='flex align-middle justify-center w-auto'>
      <div className='flex m-32 justify-around'>
        <div className='m-10'  data-aos="fade-up" data-aos-duration="4000"><Intro /></div>

        <div><Imag /></div>
      </div>
    </div>
    
  );
}

export default About;
