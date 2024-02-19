import ResetImage from '/ResetImage.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock, faEye, faEyeSlash, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Reset = () => {
  return (
    <div className="min-h-screen lg:h-screen w-screen flex flex-col-reverse lg:flex-row-reverse items-center justify-center relative">
      <Link to="/login" className=' w-10 h-10 absolute top-4 left-4 lg:hidden flex items-center justify-center'>
        <FontAwesomeIcon icon={faArrowLeft} className='text-white text-2xl' />
      </Link>
      <div className='flex w-full lg:w-1/2 h-full items-center justify-center px-5 py-10'>
        <div className='flex gap-5 flex-col w-full lg:w-[500px]'>
          <div className='text-xl lg:text-2xl font-bold text-[#23233b] w-full'>VoteWise</div>
          <div className='w-full'>
            <h1 className='text-2xl font-bold mb-1'>Reset Password</h1>
            <div className='flex'>
              <p className='text-gray-500'>Please type something you{"'"}ll remember.</p>
            </div>
          </div>
          <form action="#" className='w-full'>
            <div>
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
            </div>

            <Link to="/changed" className='w-full'>
              <button className='w-full h-[65px] lg:h-[55px] rounded-lg border border-solid border-blue-700 text-white text-xl font-semibold'
                style={{ backgroundColor: 'rgb(29 78 216)', }}>
                Reset Password
              </button>
            </Link>
          </form>
          <div className='flex justify-center pt-4'>
            <div>Already have an account? <Link to="/login" className='text-blue-700 pl-[2px]'>Login</Link></div>
          </div>
        </div>
      </div>
      <div className='flex items-center justify-center w-full min-h-[300px] lg:h-full lg:w-1/2 bg-blue-700 p-10 flex-1'>
        <img src={ResetImage} alt="" />
      </div>
    </div>
  );
}

export default Reset