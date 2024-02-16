import { Link } from 'react-router-dom';
import HeroImage from '/HeroImage.svg';
import FormImage from '/FormImage.svg';
import SurferImage from '/SurferImage.svg';
import ResponsiveImage from '/ResponsiveImage.svg';
import SecurityImage from '/SecurityImage.svg';
import AnalysisImage from '/AnalysisImage.svg';
import RealTimeImage from '/RealTimeImage.svg'; 
import VerificationImage from '/VerificationImage.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faTwitter as fabTwitter, faLinkedin as fabLinkedin } from '@fortawesome/free-brands-svg-icons';

const Home = () => {
    return (
        <div className='lg:w-screen max-w-[1440px] h-auto flex flex-col gap-5 lg:px-24 overflow-hidden'>
            <nav className='w-full  h-[80px] flex items-center justify-between px-4 fixed bg-white'>
                <div className='text-xl lg:text-2xl font-bold text-[#23233b]'>VoteWise</div>
                <div className='flex gap-4 lg:gap-10'>
                    <Link to="/login" className='text-lg bg-blue-700 w-[100px] h-[40px] flex items-center justify-center rounded-xl text-white'>
                        Login
                    </Link>
                    <Link to="/signup" className='text-lg h-[40px] flex items-center justify-center rounded-xl text-blue-700 border border-solid border-blue-700 w-[100px]'>
                        Sign Up
                    </Link>
                </div>
            </nav>
            <section className='flex h-[490px] items-center mt-[100px] flex-col lg:flex-row p-4 gap-8 lg:p-0 lg:gap-0'>
                <div className='h-full flex flex-col items-center lg:items-start justify-center w-full lg:w-1/2 gap-5 lg:pr-12 text-center lg:text-left'>
                    <h1 className='text-4xl font-bold text-[#23233b]'>Empowering Democracy, One Vote at a Time</h1>
                    <p className='text-xl lg:pr-16 text-[#2c4268]'>VoteWise is a secure and convenient way to cast your ballot online.</p>
                    <Link to="/signup" className='bg-blue-700 w-[150px] text-center rounded-2xl h-[50px] flex items-center justify-center text-base text-white shadow-2xl mt-8'>Get Started</Link>
                </div>
                <div className='rounded-full w-full lg:w-1/2 flex items-center h-full'>
                    <img src={HeroImage} alt="hero-image" className='w-full h-full object-cover rounded-2xl' />
                </div>
            </section>
            <section className='flex flex-col gap-8 items-center pt-40 lg:pt-20 w-full p-4 lg:p-0'>
                <h1 className='text-3xl font-semibold'>Our Features</h1>
                <div className='flex flex-col lg:grid grid-cols-3 auto-rows-[300px] gap-4 w-full'>
                    <div className='h-[300px] col-span-2 row-span-1 rounded-xl flex flex-row-reverse bg-[#23233b] text-white'>
                        <div className='h-full lg:h-auto justify-end w-1/2 flex items-end '>
                            <img src={FormImage} alt="" className='w-auto lg:w-full' />
                        </div>
                        <div className='flex flex-col justify-end gap-6 pr-4 lg:pr-0 pb-8 w-1/2 ml-8'>
                            <h2 className='text-2xl font-semibold'>Easy Poll Creation</h2>
                            <p className=''>Create your polls with easy steps.</p>
                        </div>
                    </div>
                    <div className='h-[300px] col-span-1 row-span-1 bg-white shadow-md shadow-[#23233b] rounded-xl flex flex-col-reverse'>
                        <div className='w-full flex h-1/2 justify-end'>
                            <img src={AnalysisImage} alt="" className='' />
                        </div>
                        <div className='flex flex-col gap-6 w-full px-5 h-1/2 pt-8'>
                            <h2 className='text-2xl font-semibold'>Result Analysis</h2>
                            <p className=''>Our integrated data analysis algorithm helps to make your results visually appealing.</p>
                        </div>
                    </div>
                    <div className='h-[300px] col-span-1 row-span-1 bg-white shadow-md shadow-[#23233b] rounded-xl flex flex-col-reverse'>
                        <div className='w-full flex h-1/2 justify-end pr-4'>
                            <img src={RealTimeImage} alt="" className='' />
                        </div>
                        <div className='flex flex-col gap-6 w-full px-5 h-1/2 pt-8'>
                            <h2 className='text-2xl font-semibold'>Real Time Monitoring</h2>
                            <p className=''>Our system provides election result analysis as they are happening in real time.</p>
                        </div>
                    </div>
                    <div className='h-[300px] col-span-2 row-span-1 rounded-xl flex flex-row-reverse bg-[#23233b] text-white'>
                        <div className='w-1/2 flex items-end pb-10'>
                            <img src={ResponsiveImage} alt="" className='w-full' />
                        </div>
                        <div className='flex flex-col justify-end gap-6 pb-8 w-1/2 ml-8'>
                            <h2 className='text-2xl font-semibold'>Mobile Responsive Design</h2>
                            <p className=''>Our web app is compatible with most screen sizes from mobile phones, to tablets and desktop.</p>
                        </div>
                    </div>
                    <div className='h-[300px] col-span-2 row-span-1 rounded-xl flex flex-row-reverse bg-[#23233b] text-white'>
                        <div className='w-1/2 flex items-end'>
                            <img src={SecurityImage} alt="" className='w-full' />
                        </div>
                        <div className='flex flex-col justify-end gap-6 pb-8 w-1/2 ml-8'>
                            <h2 className='text-2xl font-semibold'>Data Security</h2>
                            <p className=''>Our system prioritizes data safety. Your poll results are safe with us.</p>
                        </div>
                    </div>
                    <div className='h-[300px] col-span-1 row-span-1 bg-white shadow-md shadow-[#23233b] rounded-xl flex flex-col'>
                        <div className='w-full flex h-1/2 justify-start pl-4 pt-4'>
                            <img src={VerificationImage} alt="" className='' />
                        </div>
                        <div className='flex flex-col gap-6 w-full px-5 h-1/2 pt-8'>
                            <h2 className='text-2xl font-semibold'>Voters Verification</h2>
                            <p className=''>You can put verification measures to limit who has access to your polls.</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className='w-full p-4 h-auto lg:h-[300px] lg:px-10 shado-xl bg-[#ebebeb] rounded-none lg:rounded-xl mt-12 flex flex-col lg:flex-row justify-between items-center '>
                <div className='flex flex-col gap-5 py-10 items-center lg:items-start'>
                    <h2 className='text-[#23233b] text-3xl font-semibold'>Ready to dive in?</h2>
                    <p className='text-lg text-[#2c4268]'>An electric voting experience awaits you</p>
                    <Link className='bg-blue-700 w-[100px] h-[40px] flex items-center justify-center text-white rounded-xl'>Register</Link>
                </div>
                <div className='w-full lg:w-1/2 h-full'>
                    <img src={SurferImage} alt="dive-image" className='bg-cover w-full h-full object-cover' />
                </div>
            </section>
            <footer className='bg-[#23233b] flex flex-col gap-10 items-center py-7'>
                <div className='text-2xl font-bold text-[#ebebeb]'>VoteWise</div>
                <div className='flex gap-10'>
                <a href="#" className='text-[#ebebeb] text-3xl'>
                <FontAwesomeIcon icon={fabTwitter} />
                </a>
                <a href="#" className='text-[#ebebeb] text-3xl'>
                <FontAwesomeIcon icon={faEnvelope} />
                </a>
                <a href="#" className='text-[#ebebeb] text-3xl'>
                <FontAwesomeIcon icon={fabLinkedin} />
                </a>
                <a href="#" className='text-[#ebebeb] text-3xl'>
                <FontAwesomeIcon icon={faPhone} />
                </a>
                </div>
                <div className='text-lg font-medium text-[#ebebeb]'>Bada Jesutobi 2024 All Rights Reserved</div>
            </footer>
        </div>
    )
}

export default Home