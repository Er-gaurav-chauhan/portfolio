import React from 'react';

function About() {
  return (
    <div className='flex'>
        <div className='justify-center align-middle flex'>

        <div className='m-8 '>
    <section id="about" className="p-4 text-white">
      <div className="container">
        <h2 className="text-4xl font-bold mb-2">About Me</h2>
       <div className='mt-4'><p>Hello! I am <span className='text-red-600 text-2xl'>Shahreyar</span>,</p></div> 
       <p>  a budding developer with experience in HTML, CSS, and JavaScript. I am also knowledgeable in C, Python, Java, and currently learning Android development and databases.</p>
      </div>
    </section>
      <button>Contact Me</button>
    </div>

    <div>
        <img src='../assets/temp.jpg' className='w-40' />
    </div>

        </div>
 
    </div>
  );
}

export default About;
