
import './App.css'
import HeroImage from '/HeroImage.jpeg'

function App() {

  return (
    <div className='bg-red-400 w-screen max-w-[1440px] h-auto flex flex-col gap-5 '>
      <nav className='w-full bg-blue-400 h-[100px] flex items-center justify-between'>
        <div>VoteWise</div>
        <div>
          <a href="#">
            Login</a>
            <a href="#">
              Sign Up
            </a>
        </div>
      </nav>
      <section className='bg-yellow-400 flex h-[400px] items-center'>
        <div className='h-full flex flex-col justify-center w-1/2'>
          <h1>Empowering Democracy, One Vote at a Time</h1>
          <p>VoteWise is a secure and convenient way to cast your ballot online</p>
          <a href="#">Get Started</a>
        </div>
        <div className='rounded-full w-1/2 flex items-center h-[80%]'>
          <img src={HeroImage} alt="hero-image" className='w-full h-full object-cover rounded-2xl' />
        </div>
      </section>
      <section>Features</section>
      <footer>Footer</footer>
    </div>
  )
}

export default App
