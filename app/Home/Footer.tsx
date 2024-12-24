import React from 'react'
import { FaTwitter, FaFacebookF, FaYoutube, FaInstagram } from "react-icons/fa";


export default function Footer() {
  return (
    <div>
       <footer className="bg-black text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Column 1 */}
          <div>
            <ul className="space-y-2">
              <li><a href="#">FIND A STORE</a></li>
              <li><a href="#">BECOME A MEMBER</a></li>
              <li><a href="#">SIGN UP FOR EMAIL</a></li>
              <li><a href="#">SEND US FEEDBACK</a></li>
              <li><a href="#">STUDENT DISCOUNT</a></li>
            </ul>
          </div>

          {/* Column 2 */}
          <div>
            <ul className="space-y-2">
              <li><a href="#">GET HELP</a></li>
              <li><a href="#" className='text-gray-400'> ORDER STATUS</a></li>
              <li><a href="#" className='text-gray-400'>Delivery</a></li>
              <li><a href="#" className='text-gray-400'>Return</a></li>
              <li><a href="#" className='text-gray-400'>Payments option</a></li>
              <li><a href="#" className='text-gray-400'>Contact us on Nike.com</a></li>
              <li><a href="#" className='text-gray-400'>Contact us for All Inquires</a></li>
            </ul>
          </div>
           {/* Column 3 */}
           <div>
            <ul className="space-y-2">
              <li><a href="#">ABOUT NIKE</a></li>
              <li><a href="#">News </a></li>
              <li><a href="#"> Carrer</a></li>
              <li><a href="#">Investor</a></li>
              <li><a href="#">Sustainability</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-4 flex flex-col md:flex-row justify-between items-center">
          {/* Left */}
          <div className="flex items-center space-x-4">
            <span>India</span>
            <span>&copy; 2023 Nike, Inc. All Rights Reserved</span>
          </div>

          {/* Social Media */}
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" aria-label="Twitter"><FaTwitter /></a>
            <a href="#" aria-label="Facebook"><FaFacebookF /></a>
            <a href="#" aria-label="YouTube"><FaYoutube /></a>
            <a href="#" aria-label="Instagram"><FaInstagram /></a>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center mt-4 text-base text-gray-400">
          <div className="space-x-4">
            <a href="#">GUIDES</a>
            <a href="#">Terms of sale</a>
            <a href="#">Terms of use</a>
            <a href="#">Nike Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
    </div>
  )
}
