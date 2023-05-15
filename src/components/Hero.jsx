import { logo } from '../assets';

const Hero = () => {
  return (
    <header className='w-full flex justify-center items-center flex-col'>
      <nav className='flex justify-between items-center w-full mb-10 pt-3'>
        <div className='flex w-10 object-contain items-center'>
          <img src={logo} alt='logo' />
          <h1 className='flex items-center justify-center pt-3 font-satoshi font-bold text-xl text-gray-600'>BriefMe</h1>
        </div>
        <button
          type='button'
          onClick={() => window.open('https://github.com/joshuaramt')} 
          className='black_btn'
        >
          GitHub
        </button>
      </nav>

      <h1 className='head_text'>
        <span className='blue_gradient'>BriefMe</span>. 
        <br className='max-md:hidden' /> Distill the web, one URL at a time.
      </h1>
      <h2 className='desc'>
        <span className='blue_gradient'>Streamline complex information into concise summaries with AI.</span>
        <br />
        Simply enter a URL and watch BriefMe effortlessly condenses intricate articles, lengthy blogs, or comprehensive reports into succinct summaries. No more wading through excessive detail or irrelevant information – BriefMe delivers clarity and comprehension at a glance.
      </h2>
    </header>
  )
}

export default Hero