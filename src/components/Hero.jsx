import Nav from './Nav';
import { logo } from '../assets';

const Hero = () => {
  return (
    <header className='w-full flex justify-center items-center flex-col'>
      <Nav />
      <h1 className='head_text'>
        <span className='blue_gradient'>BriefMe</span>. Distill the web, one URL at a time.
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