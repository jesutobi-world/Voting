import { Link } from 'react-router-dom';
import ChangedImage from '/ChangedImage.svg';

const Changed = () => {
  return (
    <div className="h-screen lg:h-screen w-screen flex flex-col-reverse lg:flex-row-reverse items-center justify-center relative">
        <div className='flex w-full h-auto lg:w-1/2 items-center justify-center px-5 py-10'>
            <div className='flex gap-5 flex-col w-full lg:w-[500px]'>
                <div className='text-xl lg:text-2xl font-bold text-[#23233b] w-full'>VoteWise</div>
                <div className='w-full'>
                    <h1 className='text-2xl font-bold mb-1'>Password changed</h1>
                    <div className='flex'>
                        <p className='text-gray-500'>Your password has been changed successfully</p>
                    </div>
                </div>

                    <Link to="/login" className='w-full h-[65px] lg:h-[55px] rounded-lg border border-solid border-blue-700 text-white text-xl font-semibold bg-blue-700 text-center flex items-center justify-center'>
                            Back to login
                    </Link>
            </div>
        </div>
        <div className='flex items-center justify-center w-full min-h-[300px] lg:h-full lg:w-1/2 bg-blue-700 p-10 grow'>
            <img src={ChangedImage} alt="" className='object-cover w-[90%]' />
        </div>
    </div>
);
}

export default Changed