// Info.js
import React from 'react';
import { motion } from 'framer-motion';
import { slideIn } from "../utils/motion";
import { styles } from "../styles";
import finlandFlag from '../assets/Flag_of_Finland.svg'; // Import the flag image

const Info = () => {
  const linkStyle = {
    textDecoration: 'none', // Remove underline
    color: 'inherit', // Inherit text color
    cursor: 'pointer', // Change cursor to pointer on hover
    display: 'flex', // Set display to flex to align items horizontally
    alignItems: 'center', // Align items vertically in the center
  };

  return (
    <motion.div
      variants={slideIn("left", "tween", 0.2, 1)}
      className='bg-black-100 p-8 rounded-2xl'
    >
      <h1 className={`${styles.sectionHeadText} text-white mb-6`}>My Info :</h1>
      
      <div className='text-white'>
        <p className='mb-4'>
          <span className="font-semibold text-2xl">Name:</span> Pravij Upreti
        </p>
        <p className='mb-4'>
          <span className="font-semibold text-2xl">Phone Number:</span>{" "}
          <a
            href="tel:+358469495153"
            style={linkStyle} // Apply style to remove underline
          >
            <img src={finlandFlag} alt="Finnish Flag" style={{ width: '20px', marginRight: '5px' }} /> 469495153
          </a>
        </p>
        <p className='mb-4'>
          <span className="font-semibold text-2xl">Email Id:</span>{" "}
          <a
            href="mailto:opporag@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            style={linkStyle} // Apply style to remove underline
          >
            opporag@gmail.com
          </a>
        </p>
      </div>
    </motion.div>
  );
};

export default Info;
