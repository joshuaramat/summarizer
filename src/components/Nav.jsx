import logo from '../assets/logo.svg'

const Nav = () => {
  return (
    <nav className='flex justify-between items-center w-full mb-10 pt-3'>
      <div className='flex w-10 object-contain items-center'>
        <img src={logo} alt='logo' />
        <h1 className='flex items-center justify-center pt-3 font-satoshi font-bold text-xl text-gray-600'>BriefMe</h1>
      </div>
      <button
        type='button'
        onClick={() => window.open('https://github.com/joshuaramat')} 
        className='black_btn'
      >
        GitHub
      </button>
    </nav>
  )
}

export default Nav