import React from 'react'

function Intro(){
  return(
<div>

<p className='text-yellow-400'>Hello, welcome</p>


<div className='mt-12'>
  <h1 className='text-4xl'>I am <span className='text-red-700'>Shahreyar</span></h1>
</div>


<div className='mt-4'>
a budding developer with experience in HTML, CSS, and JavaScript. I am also knowledgeable in C, Python, Java, and currently learning Android development and databases.
</div>

<button className='border-2 p-2 rounded-lg bg-[#FACC15] text-black mt-8'>Contact us</button>
</div>

  )
}



function Imag(){


  return (

<div>
  <img src='../assets/temp.jpg' className='w-80 h-80 rounded-lg'/>
</div>

  )

}


function About() {
  return (
 
 <div className='flex align-middle justify-center w-auto'>
  <div className='flex m-32'>
   <div className='m-10'><Intro/></div>
 
 <div><Imag/></div>
 </div>
 </div>
  );
}

export default About;
