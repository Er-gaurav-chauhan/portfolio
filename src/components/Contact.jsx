import React from 'react';
import { Element } from 'react-scroll';
function Contact() {
  return (
<Element name='contact'>
    <section id="contact" className="bg-gray-100 p-4">
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold mb-2">Contact</h2>
        <p>If you want to get in touch, feel free to reach out to me!</p>
        {/* Add your contact details or form here */}
      </div>
    </section>
    </Element>
  );
}

export default Contact;
