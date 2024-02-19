import OtpImage from '/OtpImage.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Otp = () => {
  return (
    <div className="min-h-screen lg:h-screen w-screen flex flex-col-reverse lg:flex-row items-center justify-center relative">
      <Link to="/forgot" className=' w-10 h-10 absolute top-4 left-4 lg:hidden flex items-center justify-center'>
        <FontAwesomeIcon icon={faArrowLeft} className='text-white text-2xl' />
      </Link>
      <div className='flex w-full lg:w-1/2 h-full items-center justify-center px-5 py-10'>
        <div className='flex gap-5 flex-col w-full lg:w-[500px]'>
          <div className='text-xl lg:text-2xl font-bold text-[#23233b] w-full'>VoteWise</div>
          <div className='w-full'>
            <h1 className='text-2xl font-bold mb-1'>Please check your email</h1>
            <div className='flex'>
              <p className='text-gray-500'>We{"'"}ve sent a code to <span className='text-[#23233b] font-semibold'>{"email here"}</span></p>
            </div>
          </div>
          <form action="#" className='w-full gap-5 flex flex-col pt-4'>
            <div className='flex gap-5 w-full items-center justify-center'>
              <input type="number" className='h-14 w-14 rounded-md outline-none text-3xl font-semibold text-center border-[1px] border-solid border-gray-500 flex items-center justify-center' />
              <input type="number" disabled className='h-14 w-14 rounded-md outline-none text-3xl font-semibold text-center border-[1px] border-solid border-gray-500 flex items-center justify-center' />
              <input type="number" disabled className='h-14 w-14 rounded-md outline-none text-3xl font-semibold text-center border-[1px] border-solid border-gray-500 flex items-center justify-center' />
              <input type="number" disabled className='h-14 w-14 rounded-md outline-none text-3xl font-semibold text-center border-[1px] border-solid border-gray-500 flex items-center justify-center' />
            </div>

            {/* <div className='w-full h-[65px] lg:h-[55px] rounded-lg flex border border-solid border-gray-400 items-center px-4 gap-4 overflow-hidden mb-4'>
                        <div className='h-full flex items-center'>
                            <FontAwesomeIcon icon={faEnvelope} className='text-gray-400 text-lg' />
                        </div>
                        <input type="text" placeholder='Email' className='h-full flex-1 outline-none bg-transparent border-none text-[#3c3744] text-lg flex items-center font-medium' />
                    </div> */}

            <Link to="/reset" className='w-full'>
              <button className='w-full h-[65px] lg:h-[55px] rounded-lg border border-solid border-blue-700 text-white text-xl font-semibold'
                style={{ backgroundColor: 'rgb(29 78 216)', }}>
                Verify
              </button>
            </Link>
          </form>
          <p className='w-full text-center pt-4'>Send code again <span className='text-gray-500'>{"timer here"}</span></p>
        </div>
      </div>
      <div className='flex items-center justify-center w-full min-h-[300px] lg:h-full lg:w-1/2 bg-blue-700 p-10 flex-1'>
        <img src={OtpImage} alt="" className='' />
      </div>
    </div>
  )
}

export default Otp