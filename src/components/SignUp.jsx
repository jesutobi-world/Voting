import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle as fabGoogle, faFacebook as fabFacebook } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faLock, faEye, faEyeSlash, faIdCard } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import SignUpImage from '/SignUpImage.svg';
const SignUp = () => {
  return (
    <div className="min-h-screen lg:h-screen w-screen flex flex-col-reverse lg:flex-row items-center justify-center">
      <div className='flex w-full lg:w-1/2 h-full items-center justify-center px-5 py-10 flex-1'>
        <div className='flex gap-5 flex-col w-full lg:w-[500px]'>
          <div className='text-xl lg:text-2xl font-bold text-[#23233b] w-full'>VoteWise</div>
          <div className='w-full'>
            <h1 className='text-2xl font-bold mb-1'>Create an account</h1>
            <div className='flex'>
              <div>Already have an account? <Link to="/login" className='text-blue-700 pl-[2px]'>Login</Link></div>
            </div>
          </div>
          <form action="#" className='w-full'>
            {/* <div className='w-full h-[55px] lg:h-[45px] rounded-lg flex border border-solid border-gray-400 items-center px-4 gap-4 overflow-hidden mb-4'>
              <div className='h-full flex items-center'>
                <FontAwesomeIcon icon={faIdCard} className='text-gray-400 text-lg' />
              </div>
              <input type="text" placeholder='Matric Number' className='h-full flex-1 outline-none bg-transparent border-none text-[#3c3744] text-lg flex items-center font-medium' />
            </div> */}
            <div className='w-full h-[65px] lg:h-[55px] rounded-lg flex border border-solid border-gray-400 items-center px-4 gap-4 overflow-hidden mb-4'>
              <div className='h-full flex items-center'>
                <FontAwesomeIcon icon={faEnvelope} className='text-gray-400 text-lg' />
              </div>
              <input type="text" placeholder='Email' className='h-full flex-1 outline-none bg-transparent border-none text-[#3c3744] text-lg flex items-center font-medium' />
            </div>
            <div className='w-full h-[65px] lg:h-[55px] rounded-lg flex border border-solid border-gray-400 items-center px-4 gap-4 overflow-hidden mb-4'>
              <div className='h-full flex items-center'>
                <FontAwesomeIcon icon={faLock} className='text-gray-400 text-lg' />
              </div>
              <input type="text" placeholder='Password' className='h-full flex-1 outline-none bg-transparent border-none text-[#3c3744] text-lg flex items-center font-medium' />
              <div className='h-full flex items-center justify-center'>
                <FontAwesomeIcon icon={faEye} className='text-gray-400 text-lg hidden' />
                <FontAwesomeIcon icon={faEyeSlash} className='text-gray-400 text-lg' />
              </div>
            </div>
            <div className='w-full h-[55px] lg:h-[45px] rounded-lg flex border border-solid border-gray-400 items-center px-4 gap-4 overflow-hidden mb-4'>
              <div className='h-full flex items-center'>
                <FontAwesomeIcon icon={faLock} className='text-gray-400 text-lg' />
              </div>
              <input type="text" placeholder='Repeat Password' className='h-full flex-1 outline-none bg-transparent border-none text-[#3c3744] text-lg flex items-center font-medium' />
              <div className='h-full flex items-center justify-center'>
                <FontAwesomeIcon icon={faEye} className='text-gray-400 text-lg hidden' />
                <FontAwesomeIcon icon={faEyeSlash} className='text-gray-400 text-lg' />
              </div>
            </div>
            <div className='flex justify-between mb-4'>
              <div className='flex gap-1'>
                <input type="checkbox" name="" id="" className='bg-blue-700 text-blue-700' />
                <p className='text-gray-500 text-sm'>Creating an account means you agree to our <Link to="/terms" className='text-blue-700 pl-[2px]'>Terms of Service & Privacy Policy.</Link></p>
              </div>
            </div>
            <button className='w-full py-3 rounded-lg border border-solid border-blue-700 text-white text-xl font-semibold'
              style={{ backgroundColor: 'rgb(29 78 216)', }}
              type='submit'>Sign Up</button>
          </form>
          <div className='flex gap-2 w-full items-center'>
            <hr className='w-auto h-[1px] bg-gray-300 flex-1' />
            <div>or sign up with</div>
            <hr className='w-auto h-[1px] bg-gray-300 flex-1' />
          </div>
          <div className='w-full flex gap-4 flex-col lg:flex-row mb-1'>
            <a href="#" className='flex gap-2 items-center border border-solid border-gray-400 flex-1 py-3 justify-center rounded-lg'>
              <FontAwesomeIcon icon={fabGoogle} className='' />
              <p className='font-semibold'>Google</p>
            </a>
            <a href="#" className='flex gap-2 items-center border border-solid border-gray-400 flex-1 py-3 justify-center rounded-lg'>
              <FontAwesomeIcon icon={fabFacebook} className='text-blue-700' />
              <p className='font-semibold'>Facebook</p>
            </a>
          </div>
        </div>
      </div>
      <div className='flex items-center justify-center w-full h-[400px] lg:h-full lg:w-1/2 bg-blue-700 p-10'>
        <img src={SignUpImage} alt="" className='' />
      </div>
    </div>
  )
}

export default SignUp