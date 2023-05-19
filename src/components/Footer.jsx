import React from 'react'
import logo from '../assets/footer-logo.svg'

const Footer = () => {
  return (
    <footer className='w-full flex justify-center inset-x-0 bottom-0'>
      <hr />
      <img src={logo} alt='logo' />
    </footer>
  )
}

export default Footer