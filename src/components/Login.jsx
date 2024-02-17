import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle as fabGoogle, faFacebook as fabFacebook } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faLock, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import LoginImage from '/LoginImage.svg';
const Login = () => {
  return (
    <div className="bg-[#b4c5e4] h-screen w-screen flex items-center justify-center">
      <div className="h-[90%] w-[80%] bg-white rounded-xl shadow-md flex overflow-hidden">
        <div className='flex flex-col gap-5 w-1/2 py-10 px-16'>
          <div className='text-xl lg:text-2xl font-bold text-[#23233b]'>VoteWise</div>
          <div className='w-full'>
            <h1 className='text-2xl font-bold mb-1'>Login in to your account</h1>
            <p className='text-md text-gray-400'>Welcome back! Select method to log in:</p>
          </div>
          <div className='w-full flex gap-4'>
            <a href="#" className='flex gap-2 items-center border border-solid border-gray-400 flex-1 h-[45px] justify-center rounded-lg'>
              <FontAwesomeIcon icon={fabGoogle} className='' />
              <p className='font-semibold'>Google</p>
            </a>
            <a href="#" className='flex gap-2 items-center border border-solid border-gray-400 flex-1 h-[45px] justify-center rounded-lg'>
              <FontAwesomeIcon icon={fabFacebook} className='text-blue-700' />
              <p className='font-semibold'>Facebook</p>
            </a>
          </div>
          <div className='flex gap-2 w-full items-center'>
            <hr className='w-auto h-[1px] bg-gray-300 flex-1'/>
            <div>or continue with email</div>
            <hr className='w-auto h-[1px] bg-gray-300 flex-1'/>
          </div>
          <form action="#" className='w-full'>
            <div className='w-full h-[45px] rounded-lg flex border border-solid border-gray-400 items-center px-4 gap-4 overflow-hidden mb-4'>
              <div className='h-full flex items-center'>
                <FontAwesomeIcon icon={faEnvelope} className='text-gray-400 text-lg' />
              </div>
              <input type="text" placeholder='Email' className='h-full flex-1 outline-none bg-transparent border-none text-[#3c3744] text-lg flex items-center font-medium' />
            </div>
            <div className='w-full h-[45px] rounded-lg flex border border-solid border-gray-400 items-center px-4 gap-4 overflow-hidden mb-4'>
              <div className='h-full flex items-center'>
                <FontAwesomeIcon icon={faLock} className='text-gray-400 text-lg' />
              </div>
              <input type="text" placeholder='Password' className='h-full flex-1 outline-none bg-transparent border-none text-[#3c3744] text-lg flex items-center font-medium' />
              <div className='h-full flex items-center justify-center'>
                <FontAwesomeIcon icon={faEye} className='text-gray-400 text-lg hidden' />
                <FontAwesomeIcon icon={faEyeSlash} className='text-gray-400 text-lg' />
              </div>
            </div>
            <div className='flex justify-between mb-4'>
              <div className='flex gap-1'>
                <input type="checkbox" name="" id="" className='bg-blue-700 text-blue-700' />
                <p className='text-gray-500'>Remember me</p>
              </div>
              <div>
                <Link to="/reset" className='text-blue-700 '>Forgot Password?</Link>
              </div>
            </div>
            <button  className='w-full h-[45px] rounded-lg border border-solid border-blue-700 text-white text-xl font-semibold'
            style={{backgroundColor: '#1e40af',}}
            type='submit'>Login</button>
          </form>
          <div className='flex justify-center gap-1'>
            <div>Don{"'"}t have an account?</div>
            <div>
            <Link to="/signup">Create an account</Link>
            </div>
          </div>
        </div>
        <div className='w-1/2 bg-blue-700 flex items-center px-5'>
          <img src={LoginImage} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Login