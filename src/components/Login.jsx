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
            <h1>Login in to your account</h1>
            <p>Welcome back! Select method to log in:</p>
          </div>
          <div className='w-full flex'>
            <a href="#">
              <FontAwesomeIcon icon={fabGoogle} className='' />
              <p>Google</p>
            </a>
            <a href="#">
              <FontAwesomeIcon icon={fabFacebook} className='text-blue-700' />
              <p>Facebook</p>
            </a>
          </div>
          <div className='flex gap-[1px] w-full'>
            <div className='w-auto h-[1px] bg-gray-400'></div>
            <div>or continue with email</div>
            <div className='w-auto h-[1px] bg-gray-400'></div>
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
            <div className='flex justify-between'>
              <div className='flex gap-1'>
                <input type="checkbox" name="" id="" />
                <p>Remember me</p>
              </div>
              <div>
                <Link to="/reset">Forgot Password?</Link>
              </div>
            </div>
            <button type="submit" className='w-full h-[50px] bg-blue-400 rounded-lg'>Login</button>
          </form>
          <div className='flex justify-center gap-1'>
            <div>Don't have an account?</div>
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