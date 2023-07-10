import React from 'react';
import './Header.css'; // Update the import statement to include the correct file path
import HeroImg from '../../assets/hero.png';
import { RiShoppingBagFill } from 'react-icons/ri';
import { BsArrowRight } from 'react-icons/bs';
import { motion } from 'framer-motion';

function Header() {
  const transition = {duration: 3,type: 'spring'}
  return (
    <div className="Header-container">
      <div className="h_sides">
        <span className='text1'>Skin Protection Cream</span>
        <div className="text2">
          <span className='tex2Child1'>Trendy Collection</span>
          <span className='tex2Child2'>Seedily say has suitable disposal and boy. Exercise joy man children rejoiced.</span>
        </div>
      </div>
     
      <div className="wrapper">
        <motion.div 
          initial={{bottom: '3rem'}}
          whileInView={{bottom: '-3rem'}}
          transition={transition}
         className="blueCircle">
          <img src={HeroImg} width={600} alt="" />
          <div className="cart2">
            <RiShoppingBagFill />
            <div className="signUp">
              <span>Best sign up options</span>
              <div>
                <BsArrowRight />
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="h_sides">
        <div className="traffic">
          <span>1.5M</span>
          <span>Monthly Traffic</span>
        </div>
        <div className="costumers">
          <span>100K</span>
          <span>Happy Costumers</span>
        </div>
      </div>
    </div>
  );
}

export default Header;
